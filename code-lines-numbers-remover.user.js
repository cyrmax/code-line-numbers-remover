// ==UserScript==
// @name         Metanit line remover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Removes line numbers in code snippets on metanit
// @author       Cyrmax
// @updateURL https://cyrmax.github.io/code-line-numbers-remover
// @downloadURL https://cyrmax.github.io/code-line-numbers-remover
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