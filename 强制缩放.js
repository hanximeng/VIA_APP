// ==UserScript==
// @name         强制缩放
// @namespace    https://hanximeng.com/
// @match        *
// @version      1.0
// @description  强制缩放网页
// @author       寒曦朦
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
	/* 判断是否该执行 */
	if (/(windows|Macintosh|pad)/i.test(navigator.userAgent)) {
		/* 开始执行代码 */
		const meta = document.createElement('meta');
		meta.setAttribute('name', 'viewport');
		meta.setAttribute('content', 'width=device-width, initial-scale=0.5, user-scalable=yes');
		document.head.appendChild(meta);
	};
})();
