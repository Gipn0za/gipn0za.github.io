// ==UserScript==
// @name         移动编辑器快速插入
// @namespace    http://tampermonkey.net/
// @version      2024-07-10
// @description  try to take over the world!
// @author       You
// @match        https://*.huijiwiki.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=huijiwiki.com
// @grant        none
// ==/UserScript==

/* 把edittool挪编辑器上面去 */
window.onload = function() { $('.mw-editTools').insertBefore('.wikiEditor-ui'); };
