'use strict';

import analyzer from './module/service_analyzer';

let msg = { metaInfo: analyzer(document.head.innerHTML) };
// send data to background (event_page.js)
chrome.runtime.sendMessage(msg, () => {});

// revieve message from event_page.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.type === 'analyze') {
		sendResponse({ metaInfo: analyzer(document.head.innerHTML)});
	}
});
