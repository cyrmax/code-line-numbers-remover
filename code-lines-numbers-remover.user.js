// ==UserScript==
// @name         Metanit line remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes line numbers in code snippets on metanit
// @author       Cyrmax
// @match        https://metanit.com/*
// @run-at document-start
// @grant unsafeWindow
// ==/UserScript==

(function() {
	'use strict';
	unsafeWindow.setInterval(function() {
		var shits = document.querySelectorAll("td.gutter");
		for (const shit of shits) {
			shit.parentNode.removeChild(shit);
		}
	}, 1000);
})();