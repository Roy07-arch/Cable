(window.HUB_EVENTS = {
    ASSET_ADDED: "ASSET_ADDED",
    ASSET_DELETED: "ASSET_DELETED",
    ASSET_DESELECTED: "ASSET_DESELECTED",
    ASSET_SELECTED: "ASSET_SELECTED",
    ASSET_UPDATED: "ASSET_UPDATED",
    CONSOLE_CHANGE: "CONSOLE_CHANGE",
    CONSOLE_CLOSED: "CONSOLE_CLOSED",
    CONSOLE_EVENT: "CONSOLE_EVENT",
    CONSOLE_OPENED: "CONSOLE_OPENED",
    CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND",
    CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE",
    EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE",
    EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE",
    EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE",
    EMBED_RESHOWN: "EMBED_RESHOWN",
    FORMAT_FINISH: "FORMAT_FINISH",
    FORMAT_ERROR: "FORMAT_ERROR",
    FORMAT_START: "FORMAT_START",
    IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS",
    IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE",
    KEY_PRESS: "KEY_PRESS",
    LINTER_FINISH: "LINTER_FINISH",
    LINTER_START: "LINTER_START",
    PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER",
    PEN_CHANGE: "PEN_CHANGE",
    PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE",
    PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD",
    PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS",
    PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND",
    PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL",
    PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED",
    PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST",
    PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES",
    PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE",
    PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER",
    PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE",
    PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE",
    PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE",
    PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL",
    PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP",
    PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME",
    PEN_ERRORS: "PEN_ERRORS",
    PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE",
    PEN_LOGS: "PEN_LOGS",
    PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE",
    PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL",
    PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH",
    PEN_PREVIEW_START: "PEN_PREVIEW_START",
    PEN_SAVED: "PEN_SAVED",
    POPUP_CLOSE: "POPUP_CLOSE",
    POPUP_OPEN: "POPUP_OPEN",
    POST_CHANGE: "POST_CHANGE",
    POST_SAVED: "POST_SAVED",
    PROCESSING_FINISH: "PROCESSING_FINISH",
    PROCESSING_START: "PROCESSED_STARTED",
}),
    (function () {
        const E = 30,
            _ = ["css_pre_processor", "css_prefix", "css_starter", "description", "head", "html_classes", "html_pre_processor", "js_pre_processor", "js_library", "dependencies", "resources", "title"],
            N = { DEPENDENCIES: "DEPENDENCIES", IMPORTS: "IMPORTS" },
            S = [
                "css_pre_processor",
                "css_prefix",
                "css_starter",
                "css",
                "dependencies",
                "description",
                "editor_settings",
                "head",
                "html_classes",
                "html_pre_processor",
                "html",
                "id",
                "js_pre_processor",
                "js_library",
                "js",
                "newTags",
                "parent",
                "private",
                "resources",
                "slug_hash_private",
                "slug_hash",
                "tags",
                "team_id",
                "template",
                "title",
                "user_id",
            ],
            R = ["css_pre_processor", "css_prefix", "css_starter", "css", "dependencies", "head", "html_classes", "html_pre_processor", "html", "js_pre_processor", "js_library", "js", "resources"],
            T = ["html", "css", "js"],
            I = "INLINE_PEN_STYLESHEET_ID",
            O = 50;
        window.PEN_CONSTANTS = { CANONICAL_IMPORTS: N, COLLAB_SYNC_ATTRIBUTES: _, DATA_ATTRIBUTES: S, INLINE_PEN_STYLESHEET_ID: I, MAX_DEPENDENCIES: E, MAX_PACKAGE_VERSIONS: O, PREVIEW_ATTRIBUTES: R, TYPES: T };
    })(),
    (function () {
        function E(E) {
            const S = _(E),
                { action: R, css: T } = S;
            HUB_EVENTS.IFRAME_PREVIEW_RELOAD_CSS === R && N(T);
        }
        function _(E) {
            return "object" == typeof E.data ? E.data : {};
        }
        function N(E) {
            const _ = R();
            S(E), _ && _.parentNode.removeChild(_), window.PrefixFree && StyleFix.process();
        }
        function S(E) {
            const _ = document.createElement("style");
            (_.type = "text/css"), (_.className = PEN_CONSTANTS.INLINE_PEN_STYLESHEET_ID), _.styleSheet ? (_.styleSheet.cssText = E) : _.appendChild(document.createTextNode(E)), T.appendChild(_);
        }
        function R() {
            const E = Array.from(document.getElementsByTagName("style"));
            return E.find((E) => PEN_CONSTANTS.INLINE_PEN_STYLESHEET_ID === E.className);
        }
        const T = document.head || document.getElementsByTagName("head")[0];
        window.addEventListener("message", E, !1);
    })();
!(function () {
    function E(E) {
        for (var _ = [].slice.call(E), N = [], n = [], R = 0; R < _.length; R++) n.push(t(S(_[R]))), N.push(e(_[R]));
        return { complexities: N, stringifiedArguments: n };
    }
    function _(E) {
        try {
            return null === E ? R : void 0 === E ? O : N(E) ? T : {}.toString.call(E);
        } catch (_) {
            return D;
        }
    }
    function N(E) {
        return !!(E && "object" == typeof E && "nodeType" in E && 1 === E.nodeType && E.outerHTML);
    }
    function e(E) {
        var N;
        switch (_(E)) {
            case R:
            case O:
            case c:
            case I:
            case a:
                return s;
            case D:
            case P:
            case A:
                return L;
            case T:
                return i;
            case o:
            case r:
                for (var e = 0; e < E.length; e++) {
                    var t,
                        S = _(E[e]);
                    if (S === P || S === D || S === o) return L;
                }
                return s;
            default:
                return L;
        }
    }
    function t(E) {
        return E.length > n ? E.slice(0, n) + "\u2026" : E;
    }
    function S(E) {
        try {
            var N = _(E),
                e = {};
            switch (N) {
                case R:
                    return "null";
                case O:
                    return "undefined";
                case c:
                    return "" + E;
                case I:
                    return E ? "true" : "false";
                case T:
                    return E.outerHTML;
                case P:
                    return E.toString();
                case a:
                    return '"' + E.replace(/"/g, "'") + '"';
                case r:
                    return `// ${N} (${(E = Array.prototype.slice.call(E, 0)).length})\n[${E.map((E) => (E.tagName ? `"<${E.tagName.toLowerCase()}/>"` : `"${E.nodeName.toLowerCase()}"`))}]`;
                case o:
                    return `// ${N} (${E.length})\n[${E.map((E) => S(E))}]`;
                case D:
                    return (
                        Object.keys(E).map((_) => {
                            let N;
                            "function" == typeof Object.getOwnPropertyDescriptor(E, _).get ? (e[_] = "\u2026") : (e[_] = E[_]);
                        }),
                        `// ${N} \n${JSON.stringify(e, null, 2)}`
                    );
                default:
                    return `// ${N} \n${JSON.stringify(E, null, 2)}`;
            }
        } catch (t) {
            return "/* Log Skipped: Sorry, this log cannot be shown. You might need to use the browser console instead. */";
        }
    }
    const n = 2e3,
        R = "TYPE_NULL",
        O = "TYPE_UNDEFINED",
        T = "TYPE_ELEMENT_NODE",
        o = "[object Array]",
        r = "[object NodeList]",
        I = "[object Boolean]",
        P = "[object Function]",
        A = "[object global]",
        c = "[object Number]",
        D = "[object Object]",
        a = "[object String]";
    window.__cpConsoleSafeStringify = E;
    const s = 1,
        L = 2,
        i = 3;
})(),
    (window.HUB_EVENTS = {
        ASSET_ADDED: "ASSET_ADDED",
        ASSET_DELETED: "ASSET_DELETED",
        ASSET_DESELECTED: "ASSET_DESELECTED",
        ASSET_SELECTED: "ASSET_SELECTED",
        ASSET_UPDATED: "ASSET_UPDATED",
        CONSOLE_CHANGE: "CONSOLE_CHANGE",
        CONSOLE_CLOSED: "CONSOLE_CLOSED",
        CONSOLE_EVENT: "CONSOLE_EVENT",
        CONSOLE_OPENED: "CONSOLE_OPENED",
        CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND",
        CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE",
        EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE",
        EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE",
        EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE",
        EMBED_RESHOWN: "EMBED_RESHOWN",
        FORMAT_FINISH: "FORMAT_FINISH",
        FORMAT_ERROR: "FORMAT_ERROR",
        FORMAT_START: "FORMAT_START",
        IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS",
        IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE",
        KEY_PRESS: "KEY_PRESS",
        LINTER_FINISH: "LINTER_FINISH",
        LINTER_START: "LINTER_START",
        PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER",
        PEN_CHANGE: "PEN_CHANGE",
        PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE",
        PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD",
        PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS",
        PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND",
        PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL",
        PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED",
        PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST",
        PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES",
        PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE",
        PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER",
        PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE",
        PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE",
        PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE",
        PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL",
        PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP",
        PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME",
        PEN_ERRORS: "PEN_ERRORS",
        PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE",
        PEN_LOGS: "PEN_LOGS",
        PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE",
        PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL",
        PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH",
        PEN_PREVIEW_START: "PEN_PREVIEW_START",
        PEN_SAVED: "PEN_SAVED",
        POPUP_CLOSE: "POPUP_CLOSE",
        POPUP_OPEN: "POPUP_OPEN",
        POST_CHANGE: "POST_CHANGE",
        POST_SAVED: "POST_SAVED",
        PROCESSING_FINISH: "PROCESSING_FINISH",
        PROCESSING_START: "PROCESSED_STARTED",
    }),
    (function () {
        function E() {
            if (window.console)
                for (let E = 0; E < e.length; E++)
                    !(function N() {
                        const N = e[E];
                        window.console[N] &&
                            (window.console[N] = function () {
                                this.apply(console, arguments), _(N, arguments);
                            }.bind(console[N]));
                    })();
        }
        function _(E, _) {
            const N = window.__cpConsoleSafeStringify(_),
                { complexities: e, stringifiedArguments: t } = N,
                S = { topic: HUB_EVENTS.CONSOLE_EVENT, data: { function: E, arguments: t, complexity: Math.max.apply(null, e) } };
            window.parent.postMessage(S, "*");
        }
        function N(E) {
            const { topic: _, data: N } = "object" == typeof E.data ? E.data : {};
            if (_ === HUB_EVENTS.CONSOLE_RUN_COMMAND)
                try {
                    const E = window.eval(N.command);
                    console.log(E);
                } catch (e) {
                    return void console.error(e.message);
                }
        }
        const e = ["clear", "count", "debug", "error", "info", "log", "table", "time", "timeEnd", "warn"];
        E(), window.addEventListener("message", N, !1);
    })();
!(function () {
    function n(n) {
        const { message: o, filename: i, lineno: t, colno: s } = n;
        if (e.test(i)) {
            const n = { topic: HUB_EVENTS.PEN_ERROR_RUNTIME, data: { message: o, filename: i, line: t, lineno: t, colno: s } };
            window.parent.postMessage(n, "*");
        }
    }
    window.addEventListener("error", n);
    const e = /(boomboom\/(index|pen)\.js|index.html)/;
    window.__handleRuntimeErrors = n;
})();
(window.HUB_EVENTS = {
    ASSET_ADDED: "ASSET_ADDED",
    ASSET_DELETED: "ASSET_DELETED",
    ASSET_DESELECTED: "ASSET_DESELECTED",
    ASSET_SELECTED: "ASSET_SELECTED",
    ASSET_UPDATED: "ASSET_UPDATED",
    CONSOLE_CHANGE: "CONSOLE_CHANGE",
    CONSOLE_CLOSED: "CONSOLE_CLOSED",
    CONSOLE_EVENT: "CONSOLE_EVENT",
    CONSOLE_OPENED: "CONSOLE_OPENED",
    CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND",
    CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE",
    EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE",
    EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE",
    EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE",
    EMBED_RESHOWN: "EMBED_RESHOWN",
    FORMAT_FINISH: "FORMAT_FINISH",
    FORMAT_ERROR: "FORMAT_ERROR",
    FORMAT_START: "FORMAT_START",
    IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS",
    IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE",
    KEY_PRESS: "KEY_PRESS",
    LINTER_FINISH: "LINTER_FINISH",
    LINTER_START: "LINTER_START",
    PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER",
    PEN_CHANGE: "PEN_CHANGE",
    PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE",
    PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD",
    PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS",
    PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND",
    PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL",
    PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED",
    PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST",
    PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES",
    PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE",
    PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER",
    PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE",
    PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE",
    PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE",
    PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL",
    PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP",
    PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME",
    PEN_ERRORS: "PEN_ERRORS",
    PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE",
    PEN_LOGS: "PEN_LOGS",
    PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE",
    PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL",
    PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH",
    PEN_PREVIEW_START: "PEN_PREVIEW_START",
    PEN_SAVED: "PEN_SAVED",
    POPUP_CLOSE: "POPUP_CLOSE",
    POPUP_OPEN: "POPUP_OPEN",
    POST_CHANGE: "POST_CHANGE",
    POST_SAVED: "POST_SAVED",
    PROCESSING_FINISH: "PROCESSING_FINISH",
    PROCESSING_START: "PROCESSED_STARTED",
}),
    "object" != typeof window.CP && (window.CP = {}),
    (window.CP.PenTimer = {
        programNoLongerBeingMonitored: !1,
        timeOfFirstCallToShouldStopLoop: 0,
        _loopExits: {},
        _loopTimers: {},
        START_MONITORING_AFTER: 2e3,
        STOP_ALL_MONITORING_TIMEOUT: 5e3,
        MAX_TIME_IN_LOOP_WO_EXIT: 2200,
        exitedLoop: function (E) {
            this._loopExits[E] = !0;
        },
        shouldStopLoop: function (E) {
            if (this.programKilledSoStopMonitoring) return !0;
            if (this.programNoLongerBeingMonitored) return !1;
            if (this._loopExits[E]) return !1;
            var _ = this._getTime();
            if (0 === this.timeOfFirstCallToShouldStopLoop) return (this.timeOfFirstCallToShouldStopLoop = _), !1;
            var o = _ - this.timeOfFirstCallToShouldStopLoop;
            if (o < this.START_MONITORING_AFTER) return !1;
            if (o > this.STOP_ALL_MONITORING_TIMEOUT) return (this.programNoLongerBeingMonitored = !0), !1;
            try {
                this._checkOnInfiniteLoop(E, _);
            } catch (N) {
                return this._sendErrorMessageToEditor(), (this.programKilledSoStopMonitoring = !0), !0;
            }
            return !1;
        },
        _sendErrorMessageToEditor: function () {
            try {
                if (this._shouldPostMessage()) {
                    var E = { topic: HUB_EVENTS.PEN_ERROR_INFINITE_LOOP, data: { line: this._findAroundLineNumber() } };
                    parent.postMessage(E, "*");
                } else this._throwAnErrorToStopPen();
            } catch (_) {
                this._throwAnErrorToStopPen();
            }
        },
        _shouldPostMessage: function () {
            return document.location.href.match(/boomerang/);
        },
        _throwAnErrorToStopPen: function () {
            throw "We found an infinite loop in your Pen. We've stopped the Pen from running. Please correct it or contact support@codepen.io.";
        },
        _findAroundLineNumber: function () {
            var E = new Error(),
                _ = 0;
            if (E.stack) {
                var o = E.stack.match(/boomerang\S+:(\d+):\d+/);
                o && (_ = o[1]);
            }
            return _;
        },
        _checkOnInfiniteLoop: function (E, _) {
            if (!this._loopTimers[E]) return (this._loopTimers[E] = _), !1;
            var o;
            if (_ - this._loopTimers[E] > this.MAX_TIME_IN_LOOP_WO_EXIT) throw "Infinite Loop found on loop: " + E;
        },
        _getTime: function () {
            return +new Date();
        },
    }),
    (window.CP.shouldStopExecution = function (E) {
        var _ = window.CP.PenTimer.shouldStopLoop(E);
        return !0 === _ && console.warn("[CodePen]: An infinite loop (or a loop taking too long) was detected, so we stopped its execution. Sorry!"), _;
    }),
    (window.CP.exitedLoop = function (E) {
        window.CP.PenTimer.exitedLoop(E);
    });
