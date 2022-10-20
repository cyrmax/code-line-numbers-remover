// ==UserScript==
// @name         Metanit line remover
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Removes line numbers in code snippets on metanit and other sites
// @author       Cyrmax
// @updateURL https://cyrmax.github.io/code-line-numbers-remover
// @downloadURL https://cyrmax.github.io/code-line-numbers-remover
// @match        https://metanit.com/*
// @match https://superfastpython.com/*
// @run-at document-start
// @grant unsafeWindow
// ==/UserScript==

(function () {
	'use strict';
	switch (location.host) {
		case 'metanit.com':
			var selector = 'td.gutter';
			break;
		case 'superfastpython.com':
			var selector = 'td.crayon-nums';
			break;
		default:
			return;
	}
	unsafeWindow.setInterval(function () {
		for (const shit of document.querySelectorAll(selector)) {
			shit.parentNode.removeChild(shit);
		}
	}, 1000);
})();