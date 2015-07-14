'use strict';

getMetaInfo(function(err, metaInfo) {
	if (!err) {
		riot.mount('analyzer', { metaInfo: metaInfo });
	}
});

/**
 * Get meta info from background script
 * @param {function} callback
**/
function getMetaInfo(callback) {
	chrome.runtime.getBackgroundPage(function(backgroundPage) {
		if (chrome.runtime.lastError) {
			callback(chrome.runtime.lastError);
		} else {
			callback(null, backgroundPage.metaInfo.get());
		}
	});
}
