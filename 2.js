// ==UserScript==
// @name         移动编辑器快速插入
// @namespace    http://tampermonkey.net/
// @version      2024-07-10
// @description  try to take over the world!
// @author       You
// @match        https://*.huijiwiki.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=huijiwiki.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use me';

    function moveEditTools() {
        const editTools = document.querySelector('.mw-editTools');
        const wikiEditor = document.querySelector('.wikiEditor-ui');

        if (editTools && wikiEditor) {
            // 如果已经在正确的位置则跳过，防止无限重复移动
            if (wikiEditor.previousElementSibling === editTools) {
                return true;
            }
            wikiEditor.parentNode.insertBefore(editTools, wikiEditor);
            return true;
        }
        return false;
    }

    // 1. 尝试直接运行
    if (!moveEditTools()) {
        // 2. 如果元素尚未加载，使用 MutationObserver 监听 DOM 变化
        const observer = new MutationObserver((mutations, obs) => {
            if (moveEditTools()) {
                obs.disconnect(); // 成功移动后停止监听
            }
        });

        observer.observe(document.body || document.documentElement, {
            childList: true,
            subtree: true
        });
    }
})();
