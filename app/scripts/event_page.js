'use strict';

var metaInfo = new Background('metaInfo');

/**
 * Background
 * @param {string} key name
**/
function Background(key) {
	this.key = key;
}
Background.prototype.get = function() {
	return JSON.parse(localStorage.getItem(this.key));
};
Background.prototype.set = function(value) {
	localStorage.setItem(this.key, JSON.stringify(value));
};

/**
 * Update badge text and background
 * @param {string} tab ID
 * @param {object} params
 * @param {string} params.text
 * @param {string} params.bgColor
**/
function updateBadge(tabId, params) {
	chrome.browserAction.setBadgeBackgroundColor({ tabId: tabId, color: params.bgColor });
	chrome.browserAction.setBadgeText({ tabId: tabId, text: params.text });
}

/**
 * Create params to update budge
 * @param {number} score
 * @return {object} params
 * @return {string} params.text
 * @return {string} params.bgColor
**/
function createBadgeParams(score) {
  score = Math.floor(score);
  var badgeBgColor = '#3ce2b4';
  if (!score) {
    score = '-';
    badgeBgColor = '#ccc';
  }

  return {
    bgColor: badgeBgColor,
    text: score.toString()
  };
}

// recieve data from content_script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var tabId = sender.tab.id;
	var metaInfoData = request.metaInfo;
	if (!metaInfoData) { return; }

  updateBadge(tabId, createBadgeParams(metaInfoData.score));
	chrome.browserAction.setPopup({ tabId: tabId, popup: 'app/popup.html' });

  metaInfo.set(metaInfoData);
	sendResponse();

});

// update metaInfo when the tab is activated
chrome.tabs.onActivated.addListener(function(info) {
	var tabId = info.tabId;
	chrome.tabs.sendMessage(tabId, { type: 'analyze' }, {}, function(msg) {
    if (!msg || !msg.metaInfo) {
      return;
    }
    if (metaInfo.get().score !== msg.metaInfo.score) {
      updateBadge(tabId, createBadgeParams(msg.metaInfo.score));
    }
		metaInfo.set(msg.metaInfo);
	});
});
