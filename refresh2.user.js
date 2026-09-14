// ==UserScript==
// @name         GBF自动刷新 (ChromeXt适配版)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  检测到按下攻击键后自动刷新
// @author       you, matsunatsu
// @match        *://game.granbluefantasy.jp/*
// @match        *://gbf.game.mbga.jp/*
// @icon         https://www.google.com/s2/favicons?domain=granbluefantasy.jp
// @downloadURL  https://raw.githubusercontent.com/Gipn0za/gipn0za.github.io/refs/heads/main/refresh2.user.js
// @updateURL    https://raw.githubusercontent.com/Gipn0za/gipn0za.github.io/refs/heads/main/refresh2.user.js
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 辅助函数：替换 XMLHttpRequest 的 send 方法
    function patchXHR(targetWindow) {
        if (!targetWindow || !targetWindow.XMLHttpRequest) return;

        const origSend = targetWindow.XMLHttpRequest.prototype.send;
        targetWindow.XMLHttpRequest.prototype.send = function (...args) {
            this.addEventListener('load', () => {
                if (this.status === 200 && this.responseURL) {
                    if (this.responseURL.includes('normal_attack_result.json')) {
                        targetWindow.location.reload();
                    }
                }
            });
            return origSend.apply(this, args);
        };
    }

    // 优先尝试直接劫持 window
    patchXHR(window);

    // 若 typeof unsafeWindow 不为空，则同步劫持 unsafeWindow
    if (typeof unsafeWindow !== 'undefined') {
        patchXHR(unsafeWindow);
    }
})();
