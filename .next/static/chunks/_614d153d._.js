(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useHydrationErrorFix.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HydrationErrorFix",
    ()=>HydrationErrorFix,
    "useHydrationErrorFix",
    ()=>useHydrationErrorFix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function useHydrationErrorFix() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHydrationErrorFix.useEffect": ()=>{
            // Suppress hydration warnings in development for known browser extension issues
            if ("TURBOPACK compile-time truthy", 1) {
                const originalConsoleError = console.error;
                console.error = ({
                    "useHydrationErrorFix.useEffect": function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _args_;
                        const message = ((_args_ = args[0]) === null || _args_ === void 0 ? void 0 : _args_.toString()) || '';
                        // Filter out known hydration errors caused by browser extensions
                        if (message.includes('fdprocessedid') || message.includes('Extra attributes from the server') || message.includes('A tree hydrated but some attributes') || message.includes('Warning: Prop') && message.includes('did not match')) {
                            // Log a cleaner warning instead
                            console.warn('🔧 Hydration mismatch detected (likely browser extension interference). This is typically harmless.');
                            return;
                        }
                        // Log other errors normally
                        originalConsoleError.apply(console, args);
                    }
                })["useHydrationErrorFix.useEffect"];
                // Cleanup
                return ({
                    "useHydrationErrorFix.useEffect": ()=>{
                        console.error = originalConsoleError;
                    }
                })["useHydrationErrorFix.useEffect"];
            }
        }
    }["useHydrationErrorFix.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHydrationErrorFix.useEffect": ()=>{
            // Handle runtime hydration errors
            const handleError = {
                "useHydrationErrorFix.useEffect.handleError": (event)=>{
                    const message = event.message || '';
                    if (message.includes('hydration') || message.includes('Hydration') || message.includes('fdprocessedid')) {
                        // Prevent the error from bubbling up for known hydration issues
                        event.preventDefault();
                        event.stopPropagation();
                        console.warn('🔧 Hydration error suppressed (browser extension conflict)');
                        return false;
                    }
                }
            }["useHydrationErrorFix.useEffect.handleError"];
            const handleUnhandledRejection = {
                "useHydrationErrorFix.useEffect.handleUnhandledRejection": (event)=>{
                    var _event_reason, _event_reason1;
                    const reason = ((_event_reason = event.reason) === null || _event_reason === void 0 ? void 0 : _event_reason.message) || ((_event_reason1 = event.reason) === null || _event_reason1 === void 0 ? void 0 : _event_reason1.toString()) || '';
                    if (reason.includes('hydration') || reason.includes('Hydration') || reason.includes('fdprocessedid')) {
                        // Prevent the error from bubbling up for known hydration issues
                        event.preventDefault();
                        console.warn('🔧 Hydration promise rejection suppressed (browser extension conflict)');
                    }
                }
            }["useHydrationErrorFix.useEffect.handleUnhandledRejection"];
            // Add global error handlers
            window.addEventListener('error', handleError);
            window.addEventListener('unhandledrejection', handleUnhandledRejection);
            // Cleanup
            return ({
                "useHydrationErrorFix.useEffect": ()=>{
                    window.removeEventListener('error', handleError);
                    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
                }
            })["useHydrationErrorFix.useEffect"];
        }
    }["useHydrationErrorFix.useEffect"], []);
}
_s(useHydrationErrorFix, "3ubReDTFssvu4DHeldAg55cW/CI=");
function HydrationErrorFix(param) {
    let { children } = param;
    _s1();
    useHydrationErrorFix();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s1(HydrationErrorFix, "jI7Y3NBH3eve3BjH/5qLMthIew0=", false, function() {
    return [
        useHydrationErrorFix
    ];
});
_c = HydrationErrorFix;
var _c;
__turbopack_context__.k.register(_c, "HydrationErrorFix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/AuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHydrationErrorFix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useHydrationErrorFix.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function AuthProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHydrationErrorFix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HydrationErrorFix"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/providers/AuthProvider.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/providers/AuthProvider.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/fin-agentix-logo.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fin-agentix-logo.be3e54e1.png");}),
"[project]/src/assets/fin-agentix-logo.png.mjs { IMAGE => \"[project]/src/assets/fin-agentix-logo.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/fin-agentix-logo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1253,
    height: 1183,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAuklEQVR42jXOWwqCQBgFYFfVGlpD26hV9OwCgh6TIHyoLIzyQhQqOeI1b6Pj6IyS7aCRCv6HHz4O53AprFKIv5cVdY4aiJqr8eDykn0ExHhp1QvQqdmraXvHf3JFRYqKilowmusTiQhhT7q3G6YMaIlbUfHHU2HGnyJIGXjRH3Z6OONlJ8KY9s0A2QB2kK+P5koyNrK1VYDp5kOCNQcJOt/cgwb2qn25+16MgBf9VjEDIWRRP0FssWl7H5Dxn8AtAaikAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SplashScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/fin-agentix-logo.png.mjs { IMAGE => "[project]/src/assets/fin-agentix-logo.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const loadingSteps = [
    "Initializing Fin-Agentix Platform...",
    "Setting up secure connections...",
    "Loading user authentication...",
    "Preparing loan management system...",
    "Connecting to database...",
    "Finalizing AI-powered services...",
    "Application ready!"
];
function SplashScreen(param) {
    let { onComplete } = param;
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            const totalDuration = 4000; // 4 seconds total
            const stepDuration = totalDuration / loadingSteps.length;
            const timer = setInterval({
                "SplashScreen.useEffect.timer": ()=>{
                    setCurrentStep({
                        "SplashScreen.useEffect.timer": (prev)=>{
                            const nextStep = prev + 1;
                            setProgress(nextStep / loadingSteps.length * 100);
                            if (nextStep >= loadingSteps.length) {
                                setIsComplete(true);
                                setTimeout({
                                    "SplashScreen.useEffect.timer": ()=>{
                                        setShowSplash(false);
                                        setTimeout({
                                            "SplashScreen.useEffect.timer": ()=>{
                                                clearInterval(timer);
                                                onComplete();
                                            }
                                        }["SplashScreen.useEffect.timer"], 500);
                                    }
                                }["SplashScreen.useEffect.timer"], 800);
                                return prev;
                            }
                            return nextStep;
                        }
                    }["SplashScreen.useEffect.timer"]);
                }
            }["SplashScreen.useEffect.timer"], stepDuration);
            return ({
                "SplashScreen.useEffect": ()=>clearInterval(timer)
            })["SplashScreen.useEffect"];
        }
    }["SplashScreen.useEffect"], [
        onComplete
    ]);
    if (!showSplash) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: 'fadeIn 0.5s ease-in-out'
                },
                className: "jsx-7972d185ad66dbd6" + " " + "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 transition-opacity duration-500 ".concat(isComplete ? 'opacity-0' : 'opacity-100'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7972d185ad66dbd6" + " " + "absolute inset-0 opacity-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7972d185ad66dbd6" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 translate-y-32"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7972d185ad66dbd6" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 translate-y-64"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: 'logoScale 0.8s ease-out'
                        },
                        className: "jsx-7972d185ad66dbd6" + " " + "relative mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7972d185ad66dbd6" + " " + "w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-105",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7972d185ad66dbd6" + " " + "w-28 h-28 rounded-full overflow-hidden bg-white p-2 shadow-inner border-2 border-blue-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "Fin-Agentix Logo",
                                        width: 112,
                                        height: 112,
                                        className: "object-contain w-full h-full rounded-full",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: 'slideUp 0.6s ease-out 0.3s both'
                                },
                                className: "jsx-7972d185ad66dbd6" + " " + "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-7972d185ad66dbd6" + " " + "text-4xl font-bold text-white mb-2 tracking-wide",
                                        children: "Fin-Agentix"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-7972d185ad66dbd6" + " " + "text-lg text-blue-200",
                                        children: "AI-Powered Indian Lending Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: 'slideUp 0.6s ease-out 0.6s both'
                        },
                        className: "jsx-7972d185ad66dbd6" + " " + "w-full max-w-md px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7972d185ad66dbd6" + " " + "w-full bg-blue-800/30 rounded-full h-2 mb-6 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "".concat(progress, "%")
                                    },
                                    className: "jsx-7972d185ad66dbd6" + " " + "h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full shadow-lg transition-all duration-300 ease-out"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7972d185ad66dbd6" + " " + "text-center min-h-[60px] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        animation: 'textFade 0.3s ease-in-out'
                                    },
                                    className: "jsx-7972d185ad66dbd6" + " " + "text-blue-100 text-lg font-medium transition-all duration-300",
                                    children: loadingSteps[currentStep] || loadingSteps[loadingSteps.length - 1]
                                }, currentStep, false, {
                                    fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7972d185ad66dbd6" + " " + "flex justify-center space-x-1 mt-4",
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animation: "dotPulse 1s ease-in-out infinite ".concat(i * 0.2, "s")
                                        },
                                        className: "jsx-7972d185ad66dbd6" + " " + "w-2 h-2 bg-yellow-400 rounded-full"
                                    }, i, false, {
                                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: 'fadeIn 0.5s ease-out 1s both'
                                },
                                className: "jsx-7972d185ad66dbd6" + " " + "text-center mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-7972d185ad66dbd6" + " " + "text-blue-300 text-sm font-medium",
                                    children: [
                                        Math.round(progress),
                                        "% Complete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: 'fadeIn 0.5s ease-out 1.2s both'
                        },
                        className: "jsx-7972d185ad66dbd6" + " " + "absolute bottom-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-7972d185ad66dbd6" + " " + "text-blue-300 text-sm",
                                children: [
                                    "Version 1.0.0 • ",
                                    new Date().getFullYear(),
                                    " Fin-Agentix India"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-7972d185ad66dbd6" + " " + "text-blue-400 text-xs mt-1",
                                children: "Secured by 256-bit SSL Encryption"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: 'successScale 0.5s ease-out'
                        },
                        className: "jsx-7972d185ad66dbd6" + " " + "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7972d185ad66dbd6" + " " + "w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                style: {
                                    animation: 'checkDraw 0.5s ease-out'
                                },
                                className: "jsx-7972d185ad66dbd6" + " " + "w-12 h-12 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 3,
                                    d: "M5 13l4 4L19 7",
                                    className: "jsx-7972d185ad66dbd6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SplashScreen.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SplashScreen.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SplashScreen.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7972d185ad66dbd6",
                children: "@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes logoScale{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes textFade{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes dotPulse{0%,to{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}}@keyframes successScale{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes checkDraw{0%{stroke-dasharray:0 100}to{stroke-dasharray:100 0}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(SplashScreen, "upQZENVb5Ivma3qGCWgxbA4QQrM=");
_c = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/AppLoadingProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLoadingProvider,
    "useAppLoading",
    ()=>useAppLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SplashScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AppLoadingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isLoading: true,
    setIsLoading: ()=>{}
});
const useAppLoading = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppLoadingContext);
    if (!context) {
        throw new Error('useAppLoading must be used within AppLoadingProvider');
    }
    return context;
};
_s(useAppLoading, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function AppLoadingProvider(param) {
    let { children } = param;
    _s1();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Initialize app loading state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppLoadingProvider.useEffect": ()=>{
            // Check if this is the first visit or refresh
            const hasShownSplash = sessionStorage.getItem('fin-agentix-splash-shown');
            if (hasShownSplash) {
                // Skip splash screen if already shown in this session
                setIsLoading(false);
                setShowSplash(false);
            } else {
                // Show splash screen on first load
                setShowSplash(true);
            }
        }
    }["AppLoadingProvider.useEffect"], []);
    const handleSplashComplete = ()=>{
        // Mark splash as shown for this session
        sessionStorage.setItem('fin-agentix-splash-shown', 'true');
        setIsLoading(false);
        setShowSplash(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppLoadingContext.Provider, {
        value: {
            isLoading,
            setIsLoading
        },
        children: [
            showSplash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: handleSplashComplete
            }, void 0, false, {
                fileName: "[project]/src/components/providers/AppLoadingProvider.tsx",
                lineNumber: 56,
                columnNumber: 22
            }, this),
            !isLoading && children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/providers/AppLoadingProvider.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s1(AppLoadingProvider, "JGvDdoqSokP94mW8JeMZ83JrLRY=");
_c = AppLoadingProvider;
var _c;
__turbopack_context__.k.register(_c, "AppLoadingProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/fin-agentix-logo.png.mjs { IMAGE => "[project]/src/assets/fin-agentix-logo.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Logo = (param)=>{
    let { size, className = "" } = param;
    _s();
    const [showFallback, setShowFallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sizeClasses = {
        sm: {
            container: "w-10 h-10",
            image: 32,
            text: "text-xs"
        },
        md: {
            container: "w-12 h-12",
            image: 40,
            text: "text-sm"
        },
        lg: {
            container: "w-20 h-20",
            image: 64,
            text: "text-xl"
        }
    };
    const { container, image, text } = sizeClasses[size];
    // Try to load the logo directly with a timeout fallback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Logo.useEffect": ()=>{
            // Since we have the logo imported, set showFallback to false
            setShowFallback(false);
        }
    }["Logo.useEffect"], []);
    // Professional fallback design with your branding (circular design preference)
    if (showFallback) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "".concat(container, " rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg flex items-center justify-center font-bold ").concat(text, " ").concat(className, " border-2 border-white ring-2 ring-blue-200"),
            children: "FA"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Logo.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Try to use your actual logo
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(container, " rounded-full overflow-hidden bg-white p-1 shadow-lg flex items-center justify-center ").concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$fin$2d$agentix$2d$logo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "Fin-Agentix Logo",
            width: image,
            height: image,
            className: "object-contain w-full h-full rounded-full",
            priority: size === 'sm',
            onError: ()=>setShowFallback(true)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Logo.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Logo.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Logo, "V2ITPL9TLQt+97MszOLRhhMdW8M=");
_c = Logo;
const __TURBOPACK__default__export__ = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/LanguageSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const languages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'hi',
        name: 'हिंदी'
    },
    {
        code: 'ta',
        name: 'தமிழ்'
    },
    {
        code: 'te',
        name: 'తెలుగు'
    },
    {
        code: 'ml',
        name: 'മലയാളം'
    },
    {
        code: 'kn',
        name: 'ಕನ್ನಡ'
    },
    {
        code: 'bn',
        name: 'বাংলা'
    },
    {
        code: 'gu',
        name: 'ગુજરાતી'
    },
    {
        code: 'or',
        name: 'ଓଡ଼ିଆ'
    },
    {
        code: 'pa',
        name: 'ਪੰਜਾਬੀ'
    },
    {
        code: 'mr',
        name: 'मराठी'
    },
    {
        code: 'ur',
        name: 'اردو'
    }
];
function LanguageSelector() {
    var _languages_find;
    _s();
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSelector.useEffect": ()=>{
            // Get the current language from i18n
            const currentLanguage = i18n.language.split('-')[0]; // Get base language code
            setSelectedLanguage(currentLanguage);
        }
    }["LanguageSelector.useEffect"], [
        i18n.language
    ]);
    const changeLanguage = (languageCode)=>{
        i18n.changeLanguage(languageCode);
        setSelectedLanguage(languageCode);
        setIsOpen(false);
        // Store the selected language in localStorage
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('selectedLanguage', languageCode);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-1",
                        children: "🌐"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/LanguageSelector.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    ((_languages_find = languages.find((lang)=>lang.code === selectedLanguage)) === null || _languages_find === void 0 ? void 0 : _languages_find.name) || 'English'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/LanguageSelector.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50",
                children: languages.map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>changeLanguage(language.code),
                        className: "block w-full text-left px-4 py-2 text-sm ".concat(selectedLanguage === language.code ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-100'),
                        children: language.name
                    }, language.code, false, {
                        fileName: "[project]/src/components/ui/LanguageSelector.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/LanguageSelector.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/LanguageSelector.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(LanguageSelector, "Gnbi3JVeRqernpA9soTab7AmLZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js [app-client] (ecmascript) <export default as Bars3Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LanguageSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function classNames() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(" ");
}
function Navigation() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('common');
    const publicNavigation = [
        {
            name: t('navigation.home'),
            href: "/"
        },
        {
            name: t('navigation.all_loans'),
            href: "/loans"
        },
        {
            name: t('navigation.emi_calculator'),
            href: "/loans/calculator"
        },
        {
            name: t('navigation.about'),
            href: "/about"
        },
        {
            name: t('navigation.contact'),
            href: "/contact"
        }
    ];
    const userNavigation = [
        {
            name: t('navigation.dashboard'),
            href: "/dashboard"
        },
        {
            name: t('navigation.apply_for_loan'),
            href: "/loans/apply"
        },
        {
            name: t('navigation.my_applications'),
            href: "/loans/my-applications"
        },
        {
            name: t('navigation.kyc_verification'),
            href: "/kyc"
        },
        {
            name: t('navigation.emi_calculator'),
            href: "/loans/calculator"
        },
        {
            name: t('navigation.profile'),
            href: "/profile"
        }
    ];
    const adminNavigation = [
        {
            name: t('navigation.admin_dashboard'),
            href: "/admin"
        },
        {
            name: t('navigation.applications'),
            href: "/admin/applications"
        },
        {
            name: t('navigation.users'),
            href: "/admin/users"
        },
        {
            name: t('navigation.analytics'),
            href: "/admin/analytics"
        },
        {
            name: t('navigation.reports'),
            href: "/admin/reports"
        },
        {
            name: t('navigation.admin_profile'),
            href: "/admin/profile"
        },
        {
            name: t('navigation.setup'),
            href: "/admin/setup"
        }
    ];
    const getNavigation = ()=>{
        var _this;
        if (!session) return publicNavigation;
        return ((_this = session === null || session === void 0 ? void 0 : session.user) === null || _this === void 0 ? void 0 : _this.role) === "ADMIN" ? adminNavigation : userNavigation;
    };
    const navigation = getNavigation();
    if (!session) {
        // Public navigation for non-logged-in users
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"], {
            as: "nav",
            className: "bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg",
            children: (param)=>{
                let { open } = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-16 items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    className: "flex items-center text-white font-bold text-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            size: "sm",
                                                            className: "mr-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-300",
                                                            children: "Fin-Agentix"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-10 flex items-baseline space-x-4",
                                                    children: publicNavigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            className: classNames(pathname === item.href ? "bg-blue-700 text-white" : "text-white hover:bg-blue-500 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"),
                                                            children: item.name
                                                        }, item.name, false, {
                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    className: "text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-200",
                                                    children: t('navigation.login')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/register",
                                                    className: "bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200",
                                                    children: t('navigation.apply_now')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "-mr-2 flex md:hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Button, {
                                            className: "inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600",
                                            suppressHydrationWarning: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: "Open main menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this),
                                                open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                                    className: "block h-6 w-6",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__["Bars3Icon"], {
                                                    className: "block h-6 w-6",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navigation.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Panel, {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 px-2 pb-3 pt-2 sm:px-3",
                                children: [
                                    publicNavigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: classNames(pathname === item.href ? "bg-blue-700 text-white" : "text-white hover:bg-blue-500", "block rounded-md px-3 py-2 text-base font-medium"),
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-blue-700 pt-4 pb-3 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "block text-white hover:bg-blue-500 rounded-md px-3 py-2 text-base font-medium",
                                                children: t('navigation.login')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/register",
                                                className: "block bg-yellow-400 text-gray-900 hover:bg-yellow-300 rounded-md px-3 py-2 text-base font-semibold",
                                                children: t('navigation.apply_now')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navigation.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            }
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navigation.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    // Authenticated user navigation
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"], {
        as: "nav",
        className: "bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg",
        children: (param)=>{
            let { open } = param;
            var _session_user_name_, _session_user_name, _session_user, _session_user_email_, _session_user_email, _session_user1, _session_user2, _session_user3, _this, _session_user_name_1, _session_user_name1, _session_user4, _session_user_email_1, _session_user_email1, _session_user5, _session_user6, _session_user7, _this1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-16 items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "flex items-center text-white font-bold text-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        size: "sm",
                                                        className: "mr-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-yellow-300",
                                                        children: "Fin-Agentix"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-10 flex items-baseline space-x-4",
                                                children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: classNames(pathname === item.href ? "bg-blue-700 text-white" : "text-white hover:bg-blue-500 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"),
                                                        children: item.name
                                                    }, item.name, false, {
                                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4 flex items-center md:ml-6 space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
                                                as: "div",
                                                className: "relative ml-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Button, {
                                                            className: "flex max-w-xs items-center rounded-full bg-blue-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 hover:bg-blue-500 transition-colors duration-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: "Open user menu"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-8 w-8 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold",
                                                                    children: (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : (_session_user_name = _session_user.name) === null || _session_user_name === void 0 ? void 0 : (_session_user_name_ = _session_user_name[0]) === null || _session_user_name_ === void 0 ? void 0 : _session_user_name_.toUpperCase()) || (session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : (_session_user_email = _session_user1.email) === null || _session_user_email === void 0 ? void 0 : (_session_user_email_ = _session_user_email[0]) === null || _session_user_email_ === void 0 ? void 0 : _session_user_email_.toUpperCase())
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
                                                        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                                                        enter: "transition ease-out duration-100",
                                                        enterFrom: "transform opacity-0 scale-95",
                                                        enterTo: "transform opacity-100 scale-100",
                                                        leave: "transition ease-in duration-75",
                                                        leaveFrom: "transform opacity-100 scale-100",
                                                        leaveTo: "transform opacity-0 scale-95",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Items, {
                                                            className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-2 text-sm text-gray-900 border-b border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            children: (session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name) || 'User'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500",
                                                                            children: session === null || session === void 0 ? void 0 : (_session_user3 = session.user) === null || _session_user3 === void 0 ? void 0 : _session_user3.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                            lineNumber: 222,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-blue-600 font-medium",
                                                                            children: ((_this = session === null || session === void 0 ? void 0 : session.user) === null || _this === void 0 ? void 0 : _this.role) === 'ADMIN' ? 'Administrator' : 'Customer'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                                                    children: (param)=>{
                                                                        let { active } = param;
                                                                        var _this;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: ((_this = session === null || session === void 0 ? void 0 : session.user) === null || _this === void 0 ? void 0 : _this.role) === 'ADMIN' ? "/admin/profile" : "/profile",
                                                                            className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                            children: t('navigation.profile_settings')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 29
                                                                        }, this);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                                                    children: (param)=>{
                                                                        let { active } = param;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                                                                    callbackUrl: '/'
                                                                                }),
                                                                            className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700 w-full text-left"),
                                                                            children: t('navigation.sign_out')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 29
                                                                        }, this);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Navigation.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-mr-2 flex md:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Button, {
                                        className: "inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600",
                                        suppressHydrationWarning: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this),
                                            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 265,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__["Bars3Icon"], {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 267,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navigation.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navigation.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Panel, {
                        className: "md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 px-2 pb-3 pt-2 sm:px-3",
                                children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: classNames(pathname === item.href ? "bg-blue-700 text-white" : "text-white hover:bg-blue-500", "block rounded-md px-3 py-2 text-base font-medium"),
                                        children: item.name
                                    }, item.name, false, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-blue-700 pb-3 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center px-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold",
                                                    children: (session === null || session === void 0 ? void 0 : (_session_user4 = session.user) === null || _session_user4 === void 0 ? void 0 : (_session_user_name1 = _session_user4.name) === null || _session_user_name1 === void 0 ? void 0 : (_session_user_name_1 = _session_user_name1[0]) === null || _session_user_name_1 === void 0 ? void 0 : _session_user_name_1.toUpperCase()) || (session === null || session === void 0 ? void 0 : (_session_user5 = session.user) === null || _session_user5 === void 0 ? void 0 : (_session_user_email1 = _session_user5.email) === null || _session_user_email1 === void 0 ? void 0 : (_session_user_email_1 = _session_user_email1[0]) === null || _session_user_email_1 === void 0 ? void 0 : _session_user_email_1.toUpperCase())
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base font-medium leading-none text-white",
                                                        children: (session === null || session === void 0 ? void 0 : (_session_user6 = session.user) === null || _session_user6 === void 0 ? void 0 : _session_user6.name) || 'User'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium leading-none text-blue-200",
                                                        children: session === null || session === void 0 ? void 0 : (_session_user7 = session.user) === null || _session_user7 === void 0 ? void 0 : _session_user7.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 space-y-1 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navigation.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: ((_this1 = session === null || session === void 0 ? void 0 : session.user) === null || _this1 === void 0 ? void 0 : _this1.role) === 'ADMIN' ? "/admin/profile" : "/profile",
                                                className: "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500",
                                                children: t('navigation.profile_settings')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                                        callbackUrl: '/'
                                                    }),
                                                className: "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500 w-full text-left",
                                                children: t('navigation.sign_out')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navigation.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navigation.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navigation.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true);
        }
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Navigation.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(Navigation, "5ctXeoOW6sfAuUyHbtOI6KOMQ1o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js [app-client] (ecmascript) <export default as PhoneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js [app-client] (ecmascript) <export default as EnvelopeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js [app-client] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-client] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-client] (ecmascript) <export default as ShieldCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/StarIcon.js [app-client] (ecmascript) <export default as StarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOfficeIcon.js [app-client] (ecmascript) <export default as BuildingOfficeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CreditCardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCardIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js [app-client] (ecmascript) <export default as CreditCardIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-client] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const contactInfo = {
    phone: "1800-123-LOAN (5626)",
    email: "support@fin-agentix.com",
    businessEmail: "business@fin-agentix.com",
    address: "Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100",
    hours: "24/7 Customer Support Available"
};
const offices = [
    {
        city: "Bangalore (Head Office)",
        address: "Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100",
        phone: "+91 80 4567 8900",
        email: "bangalore@fin-agentix.com"
    },
    {
        city: "Mumbai",
        address: "Business Park, Bandra Kurla Complex, Mumbai - 400051",
        phone: "+91 22 6789 0000",
        email: "mumbai@fin-agentix.com"
    },
    {
        city: "Delhi NCR",
        address: "Cyber Hub, DLF Cyber City, Gurgaon - 122002",
        phone: "+91 124 456 7890",
        email: "delhi@fin-agentix.com"
    },
    {
        city: "Hyderabad",
        address: "HITEC City, Madhapur, Hyderabad - 500081",
        phone: "+91 40 2345 6789",
        email: "hyderabad@fin-agentix.com"
    }
];
function Footer() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('common');
    const publicLinks = [
        {
            name: t('navigation.home'),
            href: "/"
        },
        {
            name: t('navigation.all_loans'),
            href: "/loans"
        },
        {
            name: t('navigation.emi_calculator'),
            href: "/loans/calculator"
        },
        {
            name: "Track Application",
            href: "/loans/track"
        },
        {
            name: t('navigation.about'),
            href: "/about"
        },
        {
            name: t('navigation.contact'),
            href: "/contact"
        }
    ];
    const userLinks = [
        {
            name: t('navigation.dashboard'),
            href: "/dashboard"
        },
        {
            name: t('navigation.apply_for_loan'),
            href: "/loans/apply"
        },
        {
            name: t('navigation.my_applications'),
            href: "/loans/my-applications"
        },
        {
            name: t('navigation.kyc_verification'),
            href: "/kyc"
        },
        {
            name: t('navigation.profile'),
            href: "/profile"
        },
        {
            name: t('navigation.emi_calculator'),
            href: "/loans/calculator"
        }
    ];
    const adminLinks = [
        {
            name: t('navigation.admin_dashboard'),
            href: "/admin"
        },
        {
            name: t('navigation.applications'),
            href: "/admin/applications"
        },
        {
            name: t('navigation.users'),
            href: "/admin/users"
        },
        {
            name: t('navigation.analytics'),
            href: "/admin/analytics"
        },
        {
            name: t('navigation.reports'),
            href: "/admin/reports"
        },
        {
            name: t('navigation.admin_profile'),
            href: "/admin/profile"
        }
    ];
    const loanProducts = [
        {
            name: t('loan_sectors.personal.name'),
            href: "/loans/personal"
        },
        {
            name: t('loan_sectors.home.name'),
            href: "/loans/home"
        },
        {
            name: t('loan_sectors.vehicle.name'),
            href: "/loans/vehicle"
        },
        {
            name: t('loan_sectors.business.name'),
            href: "/loans/business"
        },
        {
            name: t('loan_sectors.education.name'),
            href: "/loans/education"
        },
        {
            name: t('loan_sectors.gold.name'),
            href: "/loans/gold"
        }
    ];
    const supportLinks = [
        {
            name: "Help Center",
            href: "/help"
        },
        {
            name: "FAQs",
            href: "/faq"
        },
        {
            name: t('navigation.contact'),
            href: "/contact"
        },
        {
            name: "Grievance Redressal",
            href: "/grievance"
        },
        {
            name: "Privacy Policy",
            href: "/privacy"
        },
        {
            name: "Terms & Conditions",
            href: "/terms"
        }
    ];
    const legalLinks = [
        {
            name: "Privacy Policy",
            href: "/privacy"
        },
        {
            name: "Terms of Service",
            href: "/terms"
        },
        {
            name: "Cookie Policy",
            href: "/cookies"
        },
        {
            name: "Fair Practice Code",
            href: "/fair-practice"
        },
        {
            name: "Grievance Policy",
            href: "/grievance"
        },
        {
            name: "Interest Rate Policy",
            href: "/interest-rates"
        }
    ];
    const getQuickLinks = ()=>{
        var _this;
        if (!session) return publicLinks;
        return ((_this = session === null || session === void 0 ? void 0 : session.user) === null || _this === void 0 ? void 0 : _this.role) === "ADMIN" ? adminLinks : userLinks;
    };
    const quickLinks = getQuickLinks();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gray-900 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "md",
                                            className: "mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-yellow-400",
                                                    children: "Fin-Agentix"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400",
                                                    children: "India's AI-Powered Lending Platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-6 text-sm leading-relaxed",
                                    children: t('home.subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                                                    className: "h-4 w-4 text-green-400 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "RBI Compliant Platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                                                    className: "h-4 w-4 text-green-400 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "ISO 27001 Certified"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__["StarIcon"], {
                                                    className: "h-4 w-4 text-yellow-400 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "4.6/5 Customer Rating"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold mb-6 text-white",
                                    children: t('navigation.quick_links')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: quickLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center",
                                                children: [
                                                    link.name === t('navigation.dashboard') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 65
                                                    }, this),
                                                    link.name === t('navigation.profile') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 63
                                                    }, this),
                                                    link.name === t('navigation.apply_for_loan') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CreditCardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCardIcon$3e$__["CreditCardIcon"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 70
                                                    }, this),
                                                    link.name === t('navigation.my_applications') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 71
                                                    }, this),
                                                    link.href.includes("admin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 53
                                                    }, this),
                                                    link.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        }, link.name, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold mb-6 text-white",
                                    children: t('home.loan_sectors')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: loanProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: product.href,
                                                className: "text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        }, product.name, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-4 bg-gray-800 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-semibold text-yellow-400 mb-2",
                                            children: t('navigation.emi_calculator')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mb-3",
                                            children: t('home.ready_to_start_desc')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/loans/calculator",
                                            className: "inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded text-xs font-semibold hover:bg-yellow-300 transition-colors duration-200",
                                            children: t('home.start_application')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold mb-6 text-white",
                                    children: t('navigation.contact')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__["PhoneIcon"], {
                                                    className: "h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-semibold text-sm",
                                                            children: contactInfo.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: contactInfo.hours
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__["EnvelopeIcon"], {
                                                    className: "h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white text-sm",
                                                            children: contactInfo.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: "Response within 2 hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                                    className: "h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white text-sm font-semibold",
                                                            children: "Head Office - Bangalore"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: contactInfo.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                                    className: "h-5 w-5 text-gray-400 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-300",
                                                    children: "Live Chat Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-sm font-semibold text-gray-200 mb-3",
                                            children: "Support Resources"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: supportLinks.slice(0, 4).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-xs",
                                                        children: link.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                }, link.name, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-800 mt-12 pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-semibold mb-6 text-white text-center",
                            children: "Our Office Locations"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: offices.map((office, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-4 bg-gray-800 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-semibold text-white mb-2 text-sm",
                                            children: office.city
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mb-2",
                                            children: office.address
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: office.phone
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: office.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-800 mt-12 pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center md:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "© 2025 Fin-Agentix India. All rights reserved."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Licensed by Reserve Bank of India | NBFC Registration Number: N-14.03268"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-center md:justify-end space-x-4 text-xs",
                                    children: legalLinks.slice(0, 4).map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "text-gray-400 hover:text-yellow-400 transition-colors duration-200",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this),
                                                index < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600 ml-4",
                                                    children: "|"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, link.name, true, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap justify-center space-x-4 text-xs",
                            children: legalLinks.slice(4).map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "text-gray-400 hover:text-yellow-400 transition-colors duration-200",
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this),
                                        index < legalLinks.slice(4).length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 ml-4",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 318,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block mr-4",
                                        children: "🔒 256-bit SSL Encrypted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block mr-4",
                                        children: "🛡️ PCI DSS Compliant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block mr-4",
                                        children: "📊 Credit Information Bureau Member"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block",
                                        children: "⚡ Instant Loan Approvals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(Footer, "PkqHig3aiSsAmXUA5swQClGQbtQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        // Only log hydration errors in development
        if ("TURBOPACK compile-time truthy", 1) {
            if (error.message.includes('hydration') || error.message.includes('hydrated')) {
                console.warn('Hydration error caught by ErrorBoundary:', error);
                // Don't throw hydration errors in development, just warn
                return;
            }
        }
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            var _this_state_error;
            if (this.props.fallback) {
                const FallbackComponent = this.props.fallback;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallbackComponent, {
                    error: this.state.error,
                    resetError: this.resetError
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                    lineNumber: 46,
                    columnNumber: 16
                }, this);
            }
            // Default fallback UI
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-white shadow-lg rounded-lg p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-8 w-8 text-red-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-gray-800",
                                        children: "Something went wrong"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-sm text-gray-500",
                                        children: ((_this_state_error = this.state.error) === null || _this_state_error === void 0 ? void 0 : _this_state_error.message) || 'An unexpected error occurred'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "bg-red-100 text-red-800 text-sm px-3 py-2 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500",
                                            onClick: this.resetError,
                                            children: "Try again"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ErrorBoundary.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
    constructor(props){
        super(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resetError", ()=>{
            this.setState({
                hasError: false,
                error: undefined
            });
        });
        this.state = {
            hasError: false
        };
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/locales/en/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-Powered Digital Lending Platform\",\"subtitle\":\"Connecting borrowers with the right lenders across 12 loan sectors. Experience instant approvals, competitive rates, and seamless digital processes.\",\"apply_now\":\"Apply for Loan\",\"login_dashboard\":\"Login to Dashboard\",\"loan_sectors\":\"12 Comprehensive Loan Sectors\",\"loan_sectors_desc\":\"From personal needs to business growth, we cover every financial requirement with tailored solutions and competitive rates.\",\"why_choose\":\"Why Choose Fin-Agentix India?\",\"why_choose_desc\":\"Leveraging cutting-edge technology and deep market insights to revolutionize lending in India.\",\"ready_to_start\":\"Ready to Get Started?\",\"ready_to_start_desc\":\"Join millions of satisfied customers who trust Fin-Agentix for their financial needs. Apply now and get instant approval!\",\"start_application\":\"Start Your Application\",\"explore_loans\":\"Explore All Loans\"},\"navigation\":{\"home\":\"Home\",\"all_loans\":\"All Loans\",\"emi_calculator\":\"EMI Calculator\",\"about\":\"About\",\"contact\":\"Contact\",\"dashboard\":\"Dashboard\",\"apply_for_loan\":\"Apply for Loan\",\"my_applications\":\"My Applications\",\"kyc_verification\":\"KYC Verification\",\"profile\":\"Profile\",\"admin_dashboard\":\"Admin Dashboard\",\"applications\":\"Applications\",\"users\":\"Users\",\"analytics\":\"Analytics\",\"reports\":\"Reports\",\"admin_profile\":\"Admin Profile\",\"setup\":\"Setup\",\"login\":\"Login\",\"apply_now\":\"Apply Now\",\"profile_settings\":\"Profile Settings\",\"sign_out\":\"Sign out\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"Personal Loans\",\"description\":\"Quick personal loans with minimal documentation\",\"features\":[\"No Collateral\",\"Quick Approval\",\"Flexible Tenure\"]},\"home\":{\"name\":\"Home Loans\",\"description\":\"Home loan for purchasing residential property\",\"features\":[\"Tax Benefits\",\"Long Tenure\",\"RERA Verified\"]},\"vehicle\":{\"name\":\"Vehicle Loans\",\"description\":\"Car and two-wheeler loans with competitive rates\",\"features\":[\"Instant Approval\",\"Zero Down Payment\",\"Insurance\"]},\"business\":{\"name\":\"Business Loans\",\"description\":\"Working capital and expansion loans for MSMEs\",\"features\":[\"GST Based\",\"Quick Disbursal\",\"Flexible Repayment\"]},\"education\":{\"name\":\"Education Loans\",\"description\":\"Education loan for higher studies in India and abroad\",\"features\":[\"Moratorium Period\",\"Full Coverage\",\"Tax Benefits\"]},\"agriculture\":{\"name\":\"Agriculture Loans\",\"description\":\"Comprehensive agricultural loans for farmers\",\"features\":[\"Weather Insurance\",\"Flexible Repayment\",\"Subsidy\"]},\"gold\":{\"name\":\"Gold Loans\",\"description\":\"Instant loan against gold jewelry\",\"features\":[\"Instant Approval\",\"Safe Storage\",\"Flexible\"]},\"credit-card\":{\"name\":\"Credit Cards\",\"description\":\"Premium credit cards with exclusive rewards\",\"features\":[\"Reward Points\",\"Lounge Access\",\"Cashback\"]},\"two-wheeler\":{\"name\":\"Two Wheeler\",\"description\":\"Quick loan for two-wheeler purchase\",\"features\":[\"Minimal Docs\",\"Same Day\",\"Insurance\"]},\"healthcare\":{\"name\":\"Healthcare Loans\",\"description\":\"Emergency loan for medical expenses\",\"features\":[\"Hospital Network\",\"Quick Approval\",\"EMI Moratorium\"]},\"digital\":{\"name\":\"Digital Loans\",\"description\":\"Completely digital loan with instant approval\",\"features\":[\"100% Digital\",\"Instant Disbursal\",\"Flexible\"]},\"microfinance\":{\"name\":\"Microfinance\",\"description\":\"Small business start-ups and income generation\",\"features\":[\"Group Lending\",\"Financial Literacy\",\"Easy Access\"]}},\"stats\":{\"loans_disbursed\":\"Loans Disbursed\",\"happy_customers\":\"Happy Customers\",\"approval_rate\":\"Approval Rate\",\"cities_covered\":\"Cities Covered\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-Powered Credit Scoring\",\"description\":\"Advanced algorithms analyze 500+ data points for instant credit decisions\"},\"hour_processing\":{\"title\":\"24-Hour Processing\",\"description\":\"From application to disbursal in just 24 hours for most loan types\"},\"government_integration\":{\"title\":\"Government Integration\",\"description\":\"Direct integration with Aadhaar, PAN, GST for seamless verification\"},\"multi_language\":{\"title\":\"Multi-Language Support\",\"description\":\"Available in Hindi and 11 regional languages for rural accessibility\"},\"competitive_rates\":{\"title\":\"Competitive Rates\",\"description\":\"Best-in-market interest rates across all 12 loan sectors\"},\"fraud_prevention\":{\"title\":\"Fraud Prevention\",\"description\":\"Bank-grade security with real-time fraud detection systems\"}}}"));}),
"[project]/public/locales/hi/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"एआई-संचालित डिजिटल ऋण प्लेटफ़ॉर्म\",\"subtitle\":\"12 ऋण क्षेत्रों में उधारकर्ताओं को सही उधारदाताओं के साथ जोड़ना। तुरंत अनुमोदन, प्रतिस्पर्धी दरें और सीमलेस डिजिटल प्रक्रियाओं का अनुभव करें।\",\"apply_now\":\"ऋण के लिए आवेदन करें\",\"login_dashboard\":\"डैशबोर्ड पर लॉगिन करें\",\"loan_sectors\":\"12 व्यापक ऋण क्षेत्र\",\"loan_sectors_desc\":\"व्यक्तिगत आवश्यकताओं से लेकर व्यवसाय के विकास तक, हम हर वित्तीय आवश्यकता को तैयार समाधानों और प्रतिस्पर्धी दरों के साथ कवर करते हैं।\",\"why_choose\":\"फिन-एजेंटिक्स इंडिया क्यों चुनें?\",\"why_choose_desc\":\"भारत में ऋणदान को क्रांतिकारी बनाने के लिए अत्याधुनिक प्रौद्योगिकी और गहन बाजार अंतर्दृष्टि का उपयोग करना।\",\"ready_to_start\":\"आरंभ करने के लिए तैयार हैं?\",\"ready_to_start_desc\":\"उन दस मिलियन संतुष्ट ग्राहकों में शामिल हों जो अपनी वित्तीय आवश्यकताओं के लिए फिन-एजेंटिक्स पर भरोसा करते हैं। अभी आवेदन करें और तुरंत अनुमोदन प्राप्त करें!\",\"start_application\":\"अपना आवेदन शुरू करें\",\"explore_loans\":\"सभी ऋणों का अन्वेषण करें\"},\"navigation\":{\"home\":\"होम\",\"all_loans\":\"सभी ऋण\",\"emi_calculator\":\"ईएमआई कैलकुलेटर\",\"about\":\"हमारे बारे में\",\"contact\":\"संपर्क करें\",\"dashboard\":\"डैशबोर्ड\",\"apply_for_loan\":\"ऋण के लिए आवेदन करें\",\"my_applications\":\"मेरे आवेदन\",\"kyc_verification\":\"KYC सत्यापन\",\"profile\":\"प्रोफ़ाइल\",\"admin_dashboard\":\"व्यवस्थापक डैशबोर्ड\",\"applications\":\"आवेदन\",\"users\":\"उपयोगकर्ता\",\"analytics\":\"विश्लेषण\",\"reports\":\"रिपोर्ट\",\"admin_profile\":\"व्यवस्थापक प्रोफ़ाइल\",\"setup\":\"सेटअप\",\"login\":\"लॉग इन करें\",\"apply_now\":\"अभी आवेदन करें\",\"profile_settings\":\"प्रोफ़ाइल सेटिंग्स\",\"sign_out\":\"साइन आउट\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"व्यक्तिगत ऋण\",\"description\":\"न्यूनतम दस्तावेजीकरण के साथ त्वरित व्यक्तिगत ऋण\",\"features\":[\"कोई गिरवी नहीं\",\"त्वरित अनुमोदन\",\"लचीली अवधि\"]},\"home\":{\"name\":\"गृह ऋण\",\"description\":\"आवासीय संपत्ति खरीदने के लिए गृह ऋण\",\"features\":[\"कर लाभ\",\"लंबी अवधि\",\"RERA सत्यापित\"]},\"vehicle\":{\"name\":\"वाहन ऋण\",\"description\":\"प्रतिस्पर्धी दरों के साथ कार और दो पहिया वाले वाहन ऋण\",\"features\":[\"तत्काल अनुमोदन\",\"शून्य डाउन पेमेंट\",\"बीमा\"]},\"business\":{\"name\":\"व्यवसाय ऋण\",\"description\":\"एमएसएमई के लिए कार्यशील पूंजी और विस्तार ऋण\",\"features\":[\"जीएसटी आधारित\",\"त्वरित वितरण\",\"लचीली पुनर्भुगतान\"]},\"education\":{\"name\":\"शिक्षा ऋण\",\"description\":\"भारत और विदेश में उच्च शिक्षा के लिए शिक्षा ऋण\",\"features\":[\"मोरेटोरियम अवधि\",\"पूर्ण कवरेज\",\"कर लाभ\"]},\"agriculture\":{\"name\":\"कृषि ऋण\",\"description\":\"किसानों के लिए व्यापक कृषि ऋण\",\"features\":[\"मौसम बीमा\",\"लचीली पुनर्भुगतान\",\"सब्सिडी\"]},\"gold\":{\"name\":\"स्वर्ण ऋण\",\"description\":\"स्वर्ण आभूषणों के खिलाफ तत्काल ऋण\",\"features\":[\"तत्काल अनुमोदन\",\"सुरक्षित भंडारण\",\"लचीला\"]},\"credit-card\":{\"name\":\"क्रेडिट कार्ड\",\"description\":\"विशेष पुरस्कारों के साथ प्रीमियम क्रेडिट कार्ड\",\"features\":[\"पुरस्कार अंक\",\"लाउंज पहुंच\",\"कैशबैक\"]},\"two-wheeler\":{\"name\":\"दो पहिया वाला वाहन\",\"description\":\"दो पहिया वाले वाहन की खरीद के लिए त्वरित ऋण\",\"features\":[\"न्यूनतम दस्तावेज\",\"एक ही दिन\",\"बीमा\"]},\"healthcare\":{\"name\":\"स्वास्थ्य देखभाल ऋण\",\"description\":\"चिकित्सा खर्चों के लिए आपातकालीन ऋण\",\"features\":[\"अस्पताल नेटवर्क\",\"त्वरित अनुमोदन\",\"ईएमआई मोरेटोरियम\"]},\"digital\":{\"name\":\"डिजिटल ऋण\",\"description\":\"तत्काल अनुमोदन के साथ पूरी तरह से डिजिटल ऋण\",\"features\":[\"100% डिजिटल\",\"तत्काल वितरण\",\"लचीला\"]},\"microfinance\":{\"name\":\"सूक्ष्म वित्त\",\"description\":\"छोटे व्यवसाय शुरूआत और आय पीढ़ी\",\"features\":[\"समूह ऋणदान\",\"वित्तीय साक्षरता\",\"आसान पहुंच\"]}},\"stats\":{\"loans_disbursed\":\"वितरित ऋण\",\"happy_customers\":\"खुश ग्राहक\",\"approval_rate\":\"अनुमोदन दर\",\"cities_covered\":\"शहर शामिल\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"एआई-संचालित क्रेडिट स्कोरिंग\",\"description\":\"उन्नत एल्गोरिदम 500+ डेटा बिंदुओं का विश्लेषण तत्काल क्रेडिट निर्णयों के लिए करते हैं\"},\"hour_processing\":{\"title\":\"24 घंटे की प्रसंस्करण\",\"description\":\"अधिकांश ऋण प्रकारों के लिए केवल 24 घंटों में आवेदन से वितरण तक\"},\"government_integration\":{\"title\":\"सरकारी एकीकरण\",\"description\":\"सीमलेस सत्यापन के लिए आधार, पैन, जीएसटी के साथ सीधा एकीकरण\"},\"multi_language\":{\"title\":\"बहु-भाषा समर्थन\",\"description\":\"ग्रामीण पहुंच के लिए हिंदी और 11 क्षेत्रीय भाषाओं में उपलब्ध\"},\"competitive_rates\":{\"title\":\"प्रतिस्पर्धी दरें\",\"description\":\"सभी 12 ऋण क्षेत्रों में बाजार में सर्वश्रेष्ठ ब्याज दरें\"},\"fraud_prevention\":{\"title\":\"धोखाधड़ी रोकथाम\",\"description\":\"वास्तविक समय के धोखाधड़ी पहचान प्रणाली के साथ बैंक-ग्रेड सुरक्षा\"}}}"));}),
"[project]/public/locales/ta/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-இயக்கும் டிஜிட்டல் கடன் தளம்\",\"subtitle\":\"12 கடன் துறைகளில் கடன் பெறுவோரை சரியான கடன் வழங்குவோருடன் இணைப்பது. உடனடி அங்கீகாரம், போட்டித்தன்மையான விலைகள் மற்றும் சீரான டிஜிட்டல் செயல்முறைகளை அனுபவிக்கவும்.\",\"apply_now\":\"கடனுக்கு விண்ணப்பிக்கவும்\",\"login_dashboard\":\"டாஷ்போர்ட்டில் உள்நுழைக\",\"loan_sectors\":\"12 விரிவான கடன் துறைகள்\",\"loan_sectors_desc\":\"தனிப்பட்ட தேவைகளிலிருந்து வணிக வளர்ச்சி வரை, தயாரிக்கப்பட்ட தீர்வுகள் மற்றும் போட்டித்தன்மையான விலைகளுடன் எங்கள் ஒவ்வொரு நிதி தேவையையும் பூர்த்தி செய்கிறோம்.\",\"why_choose\":\"ஏன் பின்-ஏஜென்டிக்ஸ் இந்தியாவைத் தேர்வு செய்வது?\",\"why_choose_desc\":\"இந்தியாவில் கடன் தரத்தை புரட்சிகரமாக மாற்ற முனைந்த தொழில்நுட்பம் மற்றும் ஆழமான சந்தை நுண்ணறிவைப் பயன்படுத்துதல்.\",\"ready_to_start\":\"தொடங்க தயாரா?\",\"ready_to_start_desc\":\"அவர்களின் நிதி தேவைகளுக்கு பின்-ஏஜென்டிக்ஸ் மீது நம்பிக்கை கொண்ட மில்லியன் கணக்கான மகிழ்ச்சியான வாடிக்கையாளர்களில் சேருங்கள். இப்போதே விண்ணப்பித்து உடனடி அங்கீகாரம் பெறுங்கள்!\",\"start_application\":\"உங்கள் விண்ணப்பத்தைத் தொடங்கவும்\",\"explore_loans\":\"அனைத்து கடன்களையும் உலாவவும்\"},\"navigation\":{\"home\":\"முகப்பு\",\"all_loans\":\"அனைத்து கடன்கள்\",\"emi_calculator\":\"EMI கால்குலேட்டர்\",\"about\":\"எம்மைப் பற்றி\",\"contact\":\"தொடர்பு கொள்ள\",\"dashboard\":\"டாஷ்போர்ட்\",\"apply_for_loan\":\"கடனுக்கு விண்ணப்பிக்கவும்\",\"my_applications\":\"எனது விண்ணப்பங்கள்\",\"kyc_verification\":\"KYC சரிபார்ப்பு\",\"profile\":\"சுயவிவரம்\",\"admin_dashboard\":\"நிர்வாகி டாஷ்போர்ட்\",\"applications\":\"விண்ணப்பங்கள்\",\"users\":\"பயனர்கள்\",\"analytics\":\"பகுப்பாய்வு\",\"reports\":\"அறிக்கைகள்\",\"admin_profile\":\"நிர்வாகி சுயவிவரம்\",\"setup\":\"அமைப்பு\",\"login\":\"உள்நுழைய\",\"apply_now\":\"இப்போது விண்ணப்பிக்கவும்\",\"profile_settings\":\"சுயவிவர அமைப்புகள்\",\"sign_out\":\"வெளியேறு\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"தனிப்பட்ட கடன்கள்\",\"description\":\"குறைந்த ஆவணங்களுடன் விரைவான தனிப்பட்ட கடன்கள்\",\"features\":[\"அடகு இல்லை\",\"விரைவான அங்கீகாரம்\",\"நெகிழ்வான காலம்\"]},\"home\":{\"name\":\"வீட்டு கடன்கள்\",\"description\":\"குடியிருப்பு சொத்தை வாங்குவதற்கான வீட்டு கடன்\",\"features\":[\"வரி பலன்கள்\",\"நீண்ட காலம்\",\"RERA சரிபார்க்கப்பட்டது\"]},\"vehicle\":{\"name\":\"வாகன கடன்கள்\",\"description\":\"போட்டித்தன்மையான விலைகளுடன் கார் மற்றும் இரு சக்கர வாகன கடன்கள்\",\"features\":[\"உடனடி அங்கீகாரம்\",\"பூஜ்ய முன் கட்டணம்\",\"காப்பீடு\"]},\"business\":{\"name\":\"வணிக கடன்கள்\",\"description\":\"MSMEகளுக்கான நடப்பு மூலதனம் மற்றும் விரிவாக்க கடன்கள்\",\"features\":[\"GST அடிப்படையில்\",\"விரைவான வழங்கல்\",\"நெகிழ்வான திருப்பிச் செலுத்தல்\"]},\"education\":{\"name\":\"கல்வி கடன்கள்\",\"description\":\"இந்தியா மற்றும் வெளிநாடுகளில் உயர்கல்விக்கான கல்வி கடன்\",\"features\":[\"மோரேட்டரியம் காலம்\",\"முழு கவரேஜ்\",\"வரி பலன்கள்\"]},\"agriculture\":{\"name\":\"விவசாய கடன்கள்\",\"description\":\"விவசாயிகளுக்கான விரிவான விவசாய கடன்கள்\",\"features\":[\"வானிலை காப்பீடு\",\"நெகிழ்வான திருப்பிச் செலுத்தல்\",\"துணை\"]},\"gold\":{\"name\":\"தங்க கடன்கள்\",\"description\":\"தங்க நகைகளுக்கு எதிராக உடனடி கடன்\",\"features\":[\"உடனடி அங்கீகாரம்\",\"பாதுகாப்பான சேமிப்பு\",\"நெகிழ்வான\"]},\"credit-card\":{\"name\":\"கிரெடிட் கார்டுகள்\",\"description\":\"பிரத்தியேக வெகுமதிகளுடன் கிரெடிட் கார்டுகள்\",\"features\":[\"வெகுமதி புள்ளிகள்\",\"லவுஞ் அணுகல்\",\"கேஷ்பேக்\"]},\"two-wheeler\":{\"name\":\"இரு சக்கர வாகனம்\",\"description\":\"இரு சக்கர வாகன வாங்குதலுக்கான விரைவான கடன்\",\"features\":[\"குறைந்த ஆவணங்கள்\",\"அதே நாள்\",\"காப்பீடு\"]},\"healthcare\":{\"name\":\"சுகாதார கடன்கள்\",\"description\":\"மருத்துவ செலவுகளுக்கான அவசர கடன்\",\"features\":[\"மருத்துவமனை வலைப்பின்னல்\",\"விரைவான அங்கீகாரம்\",\"EMI மோரேட்டரியம்\"]},\"digital\":{\"name\":\"டிஜிட்டல் கடன்கள்\",\"description\":\"உடனடி அங்கீகாரத்துடன் முழுமையாக டிஜிட்டல் கடன்\",\"features\":[\"100% டிஜிட்டல்\",\"உடனடி வழங்கல்\",\"நெகிழ்வான\"]},\"microfinance\":{\"name\":\"சிறுநிதி\",\"description\":\"சிறிய வணிக தொடக்கம் மற்றும் வருமான உருவாக்கம்\",\"features\":[\"குழு கடன்தருதல்\",\"நிதிக் கல்வியறிவு\",\"எளிதான அணுகல்\"]}},\"stats\":{\"loans_disbursed\":\"வழங்கப்பட்ட கடன்கள்\",\"happy_customers\":\"மகிழ்ச்சியான வாடிக்கையாளர்கள்\",\"approval_rate\":\"அங்கீகார விகிதம்\",\"cities_covered\":\"நகரங்கள் உள்ளடக்கியவை\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-இயக்கும் கிரெடிட் ஸ்கோரிங்\",\"description\":\"மேம்பட்ட அல்காரிதங்கள் 500+ தரவு புள்ளிகளை உடனடி கிரெடிட் முடிவுகளுக்காக பகுக்கின்றன\"},\"hour_processing\":{\"title\":\"24 மணி நேர செயலாக்கம்\",\"description\":\"பெரும்பாலான கடன் வகைகளுக்கு விண்ணப்பத்திலிருந்து வழங்கல் வரை செயலாக்கம் செய்யப்படும்\"},\"government_integration\":{\"title\":\"அரசு ஒருங்கிணைப்பு\",\"description\":\"அடையாளச்சீட்டு, PAN, GST உடன் நேரடி ஒருங்கிணைப்பு\"},\"multi_language\":{\"title\":\"பல மொழி ஆதரவு\",\"description\":\"கிராமிய அணுகலுக்காக ஹிந்தி மற்றும் 11 பிராந்திய மொழிகளில் கிடைக்கிறது\"},\"competitive_rates\":{\"title\":\"போட்டித்தன்மையான விலைகள்\",\"description\":\"அனைத்து 12 கடன் துறைகளிலும் சந்தையில் சிறந்த வட்டி விகிதங்கள்\"},\"fraud_prevention\":{\"title\":\"மோசடி தடுப்பு\",\"description\":\"உண்மையான நேர மோசடி கண்டறிதல் அமைப்புகளுடன் வங்கி தர பாதுகாப்பு\"}}}"));}),
"[project]/public/locales/te/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-ఆధారిత డిజిటల్ రుణ ప్లాట్‌ఫాం\",\"subtitle\":\"12 రుణ రంగాలలో రుణదాతలను సరైన లెండర్‌లతో కలుపుతుంది. తక్షణ ఆమోదాలు, పోటీ ధరలు మరియు సున్నితమైన డిజిటల్ ప్రక్రియలను అనుభవించండి.\",\"apply_now\":\"రుణానికి దరఖాస్తు చేయండి\",\"login_dashboard\":\"డాష్‌బోర్డ్‌కు లాగిన్ అవ్వండి\",\"loan_sectors\":\"12 విస్తృత రుణ రంగాలు\",\"loan_sectors_desc\":\"వ్యక్తిగత అవసరాల నుండి వ్యాపార పెరుగుదల వరకు, మేము ప్రతి ఆర్థిక అవసరాన్ని కొలతలేని పరిష్కారాలు మరియు పోటీ ధరలతో కవర్ చేస్తాము.\",\"why_choose\":\"ఎందుకు ఫిన్-ఏజెంటిక్స్ ఇండియాను ఎంచుకోవాలి?\",\"why_choose_desc\":\"భారతదేశంలో రుణాన్ని విప్లవాత్మకంగా మార్చడానికి అత్యాధునిక సాంకేతికత మరియు లోతైన మార్కెట్ అంతర్దృష్టిని ఉపయోగించడం.\",\"ready_to_start\":\"ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?\",\"ready_to_start_desc\":\"వారి ఆర్థిక అవసరాలకు ఫిన్-ఏజెంటిక్స్‌పై నమ్మకం ఉంచిన మిలియన్ల సంతృప్తి కార్యనిర్వాహకులలో చేరండి. ఇప్పుడే దరఖాస్తు చేసి తక్షణ ఆమోదం పొందండి!\",\"start_application\":\"మీ దరఖాస్తును ప్రారంభించండి\",\"explore_loans\":\"అన్ని రుణాలను అన్వేషించండి\"},\"navigation\":{\"home\":\"హోమ్\",\"all_loans\":\"అన్ని రుణాలు\",\"emi_calculator\":\"EMI లెక్కింపు\",\"about\":\"గురించి\",\"contact\":\"సంప్రదించండి\",\"dashboard\":\"డాష్‌బోర్డ్\",\"apply_for_loan\":\"రుణానికి దరఖాస్తు చేయండి\",\"my_applications\":\"నా దరఖాస్తులు\",\"kyc_verification\":\"KYC ధృవీకరణ\",\"profile\":\"ప్రొఫైల్\",\"admin_dashboard\":\"అడ్మిన్ డాష్‌బోర్డ్\",\"applications\":\"దరఖాస్తులు\",\"users\":\"వినియోగదారులు\",\"analytics\":\"విశ్లేషణ\",\"reports\":\"నివేదికలు\",\"admin_profile\":\"అడ్మిన్ ప్రొఫైల్\",\"setup\":\"సెటప్\",\"login\":\"లాగిన్\",\"apply_now\":\"ఇప్పుడే దరఖాస్తు చేయండి\",\"profile_settings\":\"ప్రొఫైల్ సెట్టింగులు\",\"sign_out\":\"సైన్ అవుట్\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"వ్యక్తిగత రుణాలు\",\"description\":\"కనీసం పత్రాలతో త్వరిత వ్యక్తిగత రుణాలు\",\"features\":[\"సంపాదన లేదు\",\"త్వరిత ఆమోదం\",\"సరళమైన కాలం\"]},\"home\":{\"name\":\"హోమ్ రుణాలు\",\"description\":\"నివాస ఆస్తిని కొనడానికి హోమ్ రుణం\",\"features\":[\"పన్ను ప్రయోజనాలు\",\"దీర్ఘ కాలం\",\"RERA ధృవీకరించబడింది\"]},\"vehicle\":{\"name\":\"వాహన రుణాలు\",\"description\":\"పోటీ ధరలతో కారు మరియు రెండు-వీలర్ రుణాలు\",\"features\":[\"తక్షణ ఆమోదం\",\"సున్నా డౌన్ పేమెంట్\",\"బీమా\"]},\"business\":{\"name\":\"వ్యాపార రుణాలు\",\"description\":\"MSMEల కోసం పని మూలధనం మరియు విస్తరణ రుణాలు\",\"features\":[\"GST ఆధారితం\",\"త్వరిత డిస్బర్సల్\",\"సరళమైన రిపేమెంట్\"]},\"education\":{\"name\":\"విద్య రుణాలు\",\"description\":\"భారతదేశం మరియు విదేశాలలో ఉన్నత చదువు కోసం విద్య రుణం\",\"features\":[\"మోరేటరియం కాలం\",\"పూర్తి కవర్ చేయబడింది\",\"పన్ను ప్రయోజనాలు\"]},\"agriculture\":{\"name\":\"వ్యవసాయ రుణాలు\",\"description\":\"రైతుల కోసం విస్తృత వ్యవసాయ రుణాలు\",\"features\":[\"వాతావరణ బీమా\",\"సరళమైన రిపేమెంట్\",\"సబ్సిడీ\"]},\"gold\":{\"name\":\"బంగారు రుణాలు\",\"description\":\"బంగారు ఆభరణాలకు ఎదురుగా తక్షణ రుణం\",\"features\":[\"తక్షణ ఆమోదం\",\"సురక్షిత నిల్వ\",\"సరళమైన\"]},\"credit-card\":{\"name\":\"క్రెడిట్ కార్డులు\",\"description\":\"ప్రత్యేక బహుమతులతో ప్రీమియం క్రెడిట్ కార్డులు\",\"features\":[\"బహుమతి పాయింట్లు\",\"లౌంజ్ యాక్సెస్\",\"క్యాష్‌బ్యాక్\"]},\"two-wheeler\":{\"name\":\"రెండు వీలర్\",\"description\":\"రెండు వీలర్ కొనడానికి త్వరిత రుణం\",\"features\":[\"కనీసం డాక్స్\",\"అదే రోజు\",\"బీమా\"]},\"healthcare\":{\"name\":\"ఆరోగ్య రుణాలు\",\"description\":\"వైద్య ఖర్చుల కోసం అత్యవసర రుణం\",\"features\":[\"ఆస్పత్రి నెట్‌వర్క్\",\"త్వరిత ఆమోదం\",\"EMI మోరేటరియం\"]},\"digital\":{\"name\":\"డిజిటల్ రుణాలు\",\"description\":\"తక్షణ ఆమోదంతో పూర్తిగా డిజిటల్ రుణం\",\"features\":[\"100% డిజిటల్\",\"తక్షణ డిస్బర్సల్\",\"సరళమైన\"]},\"microfinance\":{\"name\":\"మైక్రోఫైనాన్స్\",\"description\":\"చిన్న వ్యాపార ప్రారంభాలు మరియు ఆదాయం సృష్టించడం\",\"features\":[\"గ్రూప్ లెండింగ్\",\"ఆర్థిక అక్షరాస్యత\",\"సులభమైన యాక్సెస్\"]}},\"stats\":{\"loans_disbursed\":\"రుణాలు డిస్బర్స్ చేయబడ్డాయి\",\"happy_customers\":\"సంతోషంగా ఉన్న కస్టమర్లు\",\"approval_rate\":\"ఆమోద రేటు\",\"cities_covered\":\"కవర్ చేయబడిన నగరాలు\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-ఆధారిత క్రెడిట్ స్కోరింగ్\",\"description\":\"ఉన్నత యాల్గోరిథమ్‌లు తక్షణ క్రెడిట్ నిర్ణయాల కోసం 500+ డేటా పాయింట్‌లను విశ్లేషిస్తాయి\"},\"hour_processing\":{\"title\":\"24 గంటల ప్రాసెసింగ్\",\"description\":\"చాలా రుణ రకాలకు దరఖాస్తు నుండి డిస్బర్సల్ వరకు కేవలం 24 గంటలలో\"},\"government_integration\":{\"title\":\"ప్రభుత్వ ఏకీకరణ\",\"description\":\"సున్నితమైన ధృవీకరణ కోసం ఆధార్, PAN, GST తో నేరుగా ఏకీకరణ\"},\"multi_language\":{\"title\":\"బహుభాషా మద్దతు\",\"description\":\"గ్రామీణ యాక్సెసిబిలిటీ కోసం హిందీ మరియు 11 ప్రాంతీయ భాషలలో అందుబాటులో ఉంది\"},\"competitive_rates\":{\"title\":\"పోటీ ధరలు\",\"description\":\"అన్ని 12 రుణ రంగాలలో మార్కెట్ లో ఉత్తమ వడ్డీ రేట్లు\"},\"fraud_prevention\":{\"title\":\"మోసపూరిత నిరోధం\",\"description\":\"రియల్-టైమ్ మోసపూరిత గుర్తింపు సిస్టమ్‌లతో బ్యాంక్-గ్రేడ్ భద్రత\"}}}"));}),
"[project]/public/locales/ml/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-പവർഡ് ഡിജിറ്റൽ ലോൺ പ്ലാറ്റ്ഫോം\",\"subtitle\":\"12 ലോൺ മേഖലകളിൽ വായ്പക്കാരെ ശരിയായ വായ്പദാതാക്കളുമായി ബന്ധപ്പെടുത്തുന്നു. ഉടനടി അംഗീകാരം, മത്സര നിരക്കുകൾ, മിന്നൽ വേഗത്തിലുള്ള ഡിജിറ്റൽ പ്രക്രിയകൾ എന്നിവ അനുഭവിക്കുക.\",\"apply_now\":\"ലോൺ-നായി അപേക്ഷിക്കുക\",\"login_dashboard\":\"ഡാഷ്ബോർഡിലേക്ക് ലോഗിൻ ചെയ്യുക\",\"loan_sectors\":\"12 വിപുലമായ ലോൺ മേഖലകൾ\",\"loan_sectors_desc\":\"വ്യക്തിഗത ആവശ്യങ്ങളിൽ നിന്ന് ബിസിനസ് വളർച്ച വരെ, ഞങ്ങൾ ഓരോ സാമ്പത്തിക ആവശ്യങ്ങളും ഇഷ്ടാനുർപ്പണ്ണമാക്കിയ പരിഹാരങ്ങളും മത്സര നിരക്കുകളും ഉപയോഗിച്ച് പൂർത്തിയാക്കുന്നു.\",\"why_choose\":\"എന്തുകൊണ്ട് ഫിൻ-ഏജന്റിക്സ് ഇന്ത്യയെ തിരഞ്ഞെടുക്കണം?\",\"why_choose_desc\":\"ഇന്ത്യയിൽ വായ്പദാനം പുതുക്കാൻ അത്യാധുനിക സാങ്കേതികവിദ്യയും ആഴമേറിയ മാർക്കറ്റ് അന്തര്ദൃഷ്ടിയും ഉപയോഗിക്കുന്നു.\",\"ready_to_start\":\"തുടങ്ങാൻ തയ്യാറാണോ?\",\"ready_to_start_desc\":\"അവരുടെ സാമ്പത്തിക ആവശ്യങ്ങൾക്കായി ഫിൻ-ഏജന്റിക്സിൽ വിശ്വസിക്കുന്ന ദശലക്ഷം സംതൃപ്തരായ ഉപഭോക്താക്കളോട് ചേരുക. ഇപ്പോൾ തന്നെ അപേക്ഷിച്ച് ഉടനടി അംഗീകാരം നേടുക!\",\"start_application\":\"നിങ്ങളുടെ അപേക്ഷ തുടങ്ങുക\",\"explore_loans\":\"എല്ലാ ലോണുകളും പര്യവേക്ഷണം ചെയ്യുക\"},\"navigation\":{\"home\":\"ഹോം\",\"all_loans\":\"എല്ലാ ലോണുകളും\",\"emi_calculator\":\"EMI കാൽക്കുലേറ്റർ\",\"about\":\"ഞങ്ങളെക്കുറിച്ച്\",\"contact\":\"ബന്ധപ്പെടുക\",\"dashboard\":\"ഡാഷ്ബോർഡ്\",\"apply_for_loan\":\"ലോൺ-നായി അപേക്ഷിക്കുക\",\"my_applications\":\"എന്റെ അപേക്ഷകൾ\",\"kyc_verification\":\"KYC പരിശോധന\",\"profile\":\"പ്രൊഫൈൽ\",\"admin_dashboard\":\"അഡ്മിൻ ഡാഷ്ബോർഡ്\",\"applications\":\"അപേക്ഷകൾ\",\"users\":\"ഉപയോക്താക്കൾ\",\"analytics\":\"വിശകലനം\",\"reports\":\"റിപ്പോർട്ടുകൾ\",\"admin_profile\":\"അഡ്മിൻ പ്രൊഫൈൽ\",\"setup\":\"സജ്ജീകരണം\",\"login\":\"ലോഗിൻ\",\"apply_now\":\"ഇപ്പോൾ അപേക്ഷിക്കുക\",\"profile_settings\":\"പ്രൊഫൈൽ ക്രമീകരണങ്ങൾ\",\"sign_out\":\"സൈൻ ഔട്ട്\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"വ്യക്തിഗത ലോണുകൾ\",\"description\":\"ഏറ്റവും കുറവ് രേഖപ്പെടുത്തലുകളോടെ വേഗത്തിലുള്ള വ്യക്തിഗത ലോണുകൾ\",\"features\":[\"ആഹരണം ആവശ്യമില്ല\",\"വേഗത്തിലുള്ള അംഗീകാരം\",\"ഫ്ലെക്സിബിൾ കാലാവധി\"]},\"home\":{\"name\":\"ഹോം ലോണുകൾ\",\"description\":\"വാസസ്ഥല ആസ്തി വാങ്ങുന്നതിനുള്ള ഹോം ലോൺ\",\"features\":[\"നികുതി ഗുണങ്ങൾ\",\"ദീർഘകാലാവധി\",\"RERA പരിശോധിച്ചത്\"]},\"vehicle\":{\"name\":\"വാഹന ലോണുകൾ\",\"description\":\"മത്സര നിരക്കുകളോടെ കാർ, രണ്ടു ചക്ര വാഹനങ്ങൾക്കായുള്ള ലോണുകൾ\",\"features\":[\"ഉടനടി അംഗീകാരം\",\"പൂജ്യം ഡൗൺ പേയ്മെന്റ്\",\"ഇൻഷുറൻസ്\"]},\"business\":{\"name\":\"ബിസിനസ് ലോണുകൾ\",\"description\":\"MSME-കൾക്കായുള്ള പ്രവർത്തന മൂലധനവും വിപുലീകരണ ലോണുകളും\",\"features\":[\"GST അടിസ്ഥാനമാക്കിയത്\",\"വേഗത്തിലുള്ള വിതരണം\",\"ഫ്ലെക്സിബിൾ തിരിച്ചടവ്\"]},\"education\":{\"name\":\"വിദ്യാഭ്യാസ ലോണുകൾ\",\"description\":\"ഇന്ത്യയിലും വെളിനാടുകളിലും ഉയർന്ന പഠനത്തിനായുള്ള വിദ്യാഭ്യാസ ലോൺ\",\"features\":[\"മോറേറ്റോറിയം കാലാവധി\",\"പൂർണ്ണ കവറേജ്\",\"നികുതി ഗുണങ്ങൾ\"]},\"agriculture\":{\"name\":\"കാർഷിക ലോണുകൾ\",\"description\":\"കർഷകരുടെ വിപുലമായ കാർഷിക ലോണുകൾ\",\"features\":[\"കാലാവസ്ഥാ ഇൻഷുറൻസ്\",\"ഫ്ലെക്സിബിൾ തിരിച്ചടവ്\",\"സബ്സിഡി\"]},\"gold\":{\"name\":\"സ്വർണ്ണ ലോണുകൾ\",\"description\":\"ചെമ്പടികൾക്കെതിരെ ഉടനടി ലോൺ\",\"features\":[\"ഉടനടി അംഗീകാരം\",\"സുരക്ഷിത സംഭരണം\",\"ഫ്ലെക്സിബിൾ\"]},\"credit-card\":{\"name\":\"ക്രെഡിറ്റ് കാർഡുകൾ\",\"description\":\"പ്രത്യേക ബഹുമതികളുള്ള പ്രീമിയം ക്രെഡിറ്റ് കാർഡുകൾ\",\"features\":[\"ബഹുമതി പോയിന്റുകൾ\",\"ലൗഞ്ച് ആക്സസ്\",\"ക്യാഷ്ബാക്ക്\"]},\"two-wheeler\":{\"name\":\"രണ്ടു ചക്ര വാഹനം\",\"description\":\"രണ്ടു ചക്ര വാഹന വാങ്ങുന്നതിനുള്ള വേഗത്തിലുള്ള ലോൺ\",\"features\":[\"ഏറ്റവും കുറവ് രേഖകൾ\",\"ഒരേ ദിവസം\",\"ഇൻഷുറൻസ്\"]},\"healthcare\":{\"name\":\"ആരോഗ്യ ലോണുകൾ\",\"description\":\"മെഡിക്കൽ ചെലവുകൾക്കായുള്ള അടിയന്തര ലോൺ\",\"features\":[\"ആശുപത്രി നെറ്റ്‌വർക്ക്\",\"വേഗത്തിലുള്ള അംഗീകാരം\",\"EMI മോറേറ്റോറിയം\"]},\"digital\":{\"name\":\"ഡിജിറ്റൽ ലോണുകൾ\",\"description\":\"ഉടനടി അംഗീകാരമുള്ള പൂർണ്ണമായും ഡിജിറ്റൽ ലോൺ\",\"features\":[\"100% ഡിജിറ്റൽ\",\"ഉടനടി വിതരണം\",\"ഫ്ലെക്സിബിൾ\"]},\"microfinance\":{\"name\":\"മൈക്രോഫൈനാൻസ്\",\"description\":\"ചെറിയ ബിസിനസ് ആരംഭങ്ങളും വരുമാന സൃഷ്ടിയും\",\"features\":[\"ഗ്രൂപ്പ് ലെൻഡിംഗ്\",\"ഫൈനാൻഷ്യൽ ലിറ്ററസി\",\"എളുപ്പത്തിലുള്ള ആക്സസ്\"]}},\"stats\":{\"loans_disbursed\":\"വിതരണം ചെയ്ത ലോണുകൾ\",\"happy_customers\":\"സംതൃപ്തരായ ഉപഭോക്താക്കൾ\",\"approval_rate\":\"അംഗീകാര നിരക്ക്\",\"cities_covered\":\"പരിധിയിൽ ഉൾപ്പെട്ട നഗരങ്ങൾ\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-പവർഡ് ക്രെഡിറ്റ് സ്കോറിംഗ്\",\"description\":\"ഉടനടി ക്രെഡിറ്റ് തീരുമാനങ്ങൾക്കായി നൂറ്റിലധികം ഡാറ്റാ പോയിന്റുകൾ വിശകലനം ചെയ്യുന്ന നൂതന അൽഗോരിതങ്ങൾ\"},\"hour_processing\":{\"title\":\"24-മണിക്കൂർ പ്രോസസ്സിംഗ്\",\"description\":\"മിക്ക ലോൺ തരങ്ങൾക്കും അപേക്ഷയിൽ നിന്ന് വിതരണം വരെ മാത്രം 24 മണിക്കൂറിൽ\"},\"government_integration\":{\"title\":\"സർക്കാർ സംയോജനം\",\"description\":\"സുഗമമായ പരിശോധനയ്ക്കായി ആധാർ, PAN, GST-നൊപ്പം നേരിട്ടുള്ള സംയോജനം\"},\"multi_language\":{\"title\":\"ബഹുഭാഷാ പിന്തുണ\",\"description\":\"ഗ്രാമീണ ആക്സസിബിലിറ്റിക്കായി ഹിന്ദിയിലും 11 പ്രാദേശിക ഭാഷകളിലും ലഭ്യം\"},\"competitive_rates\":{\"title\":\"മത്സര നിരക്കുകൾ\",\"description\":\"എല്ലാ 12 ലോൺ മേഖലകളിലും മാർക്കറ്റിൽ ഉത്തമമായ പലിശ നിരക്കുകൾ\"},\"fraud_prevention\":{\"title\":\"വഞ്ചന തടയൽ\",\"description\":\"തൽസമയ വഞ്ചന കണ്ടെത്തൽ സംവിധാനങ്ങളോടെ ബാങ്ക്-ഗ്രേഡ് സുരക്ഷ\"}}}"));}),
"[project]/public/locales/kn/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-ಚಾಲಿತ ಡಿಜಿಟಲ್ ಸಾಲ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್\",\"subtitle\":\"12 ಸಾಲದ ವಲಯಗಳಲ್ಲಿ ಸಾಲಗಾರರನ್ನು ಸರಿಯಾದ ಸಾಲದಾತರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವುದು. ತಕ್ಷಣ ಅನುಮೋದನೆ, ಪೋಟಿಯಾದ ದರಗಳು ಮತ್ತು ಸುಗಮವಾದ ಡಿಜಿಟಲ್ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಅನುಭವಿಸಿ.\",\"apply_now\":\"ಸಾಲಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ\",\"login_dashboard\":\"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ\",\"loan_sectors\":\"12 ವಿಸ್ತೃತ ಸಾಲದ ವಲಯಗಳು\",\"loan_sectors_desc\":\"ವೈಯಕ್ತಿಕ ಅಗತ್ಯಗಳಿಂದ ಹಿಡಿದು ವ್ಯವಹಾರ ಬೆಳವಣಿಗೆಯವರೆಗೆ, ನಾವು ಪ್ರತಿಯೊಂದು ಹಣಕಾಸಿನ ಅಗತ್ಯವನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಪರಿಹಾರಗಳು ಮತ್ತು ಪೋಟಿಯಾದ ದರಗಳೊಂದಿಗೆ ಮುಗಿಸುತ್ತೇವೆ.\",\"why_choose\":\"ಫಿನ್-ಏಜೆಂಟಿಕ್ಸ್ ಇಂಡಿಯಾವನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?\",\"why_choose_desc\":\"ಭಾರತದಲ್ಲಿ ಸಾಲದಾರಿಕೆಯನ್ನು ಪುನರ್ವ್ಯವಸ್ಥಾಪಿಸಲು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಆಳವಾದ ಮಾರುಕಟ್ಟೆ ಅಂತರ್ದೃಷ್ಟಿಯನ್ನು ಬಳಸಿಕೊಳ್ಳುವುದು.\",\"ready_to_start\":\"ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?\",\"ready_to_start_desc\":\"ಅವರ ಹಣಕಾಸಿನ ಅಗತ್ಯಗಳಿಗಾಗಿ ಫಿನ್-ಏಜೆಂಟಿಕ್ಸ್ ಅನ್ನು ನಂಬುವ ದಶಲಕ್ಷ ಸಂತೃಪ್ತ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸೇರಿ. ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಮತ್ತು ತಕ್ಷಣ ಅನುಮೋದನೆ ಪಡೆಯಿರಿ!\",\"start_application\":\"ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಪ್ರಾರಂಭಿಸಿ\",\"explore_loans\":\"ಎಲ್ಲಾ ಸಾಲಗಳನ್ನು ಅನ್ವೇಷಿಸಿ\"},\"navigation\":{\"home\":\"ಮುಖಪುಟ\",\"all_loans\":\"ಎಲ್ಲಾ ಸಾಲಗಳು\",\"emi_calculator\":\"EMI ಕ್ಯಾಲ್ಕುಲೇಟರ್\",\"about\":\"ಬಗ್ಗೆ\",\"contact\":\"ಸಂಪರ್ಕಿಸಿ\",\"dashboard\":\"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್\",\"apply_for_loan\":\"ಸಾಲಕ್ಕಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ\",\"my_applications\":\"ನನ್ನ ಅರ್ಜಿಗಳು\",\"kyc_verification\":\"KYC ಪರಿಶೀಲನೆ\",\"profile\":\"ಪ್ರೊಫೈಲ್\",\"admin_dashboard\":\"ನಿರ್ವಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್\",\"applications\":\"ಅರ್ಜಿಗಳು\",\"users\":\"ಬಳಕೆದಾರರು\",\"analytics\":\"ವಿಶ್ಲೇಷಣೆ\",\"reports\":\"ವರದಿಗಳು\",\"admin_profile\":\"ನಿರ್ವಾಹಕ ಪ್ರೊಫೈಲ್\",\"setup\":\"ಸೆಟಪ್\",\"login\":\"ಲಾಗಿನ್\",\"apply_now\":\"ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ\",\"profile_settings\":\"ಪ್ರೊಫೈಲ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು\",\"sign_out\":\"ಸೈನ್ ಔಟ್\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"ವೈಯಕ್ತಿಕ ಸಾಲಗಳು\",\"description\":\"ಕನಿಷ್ಠ ದಾಖಲೆಗಳೊಂದಿಗೆ ತ್ವರಿತ ವೈಯಕ್ತಿಕ ಸಾಲಗಳು\",\"features\":[\"ಅಡಕವನ್ನು ನೀಡಬೇಕಾಗಿಲ್ಲ\",\"ತ್ವರಿತ ಅನುಮೋದನೆ\",\"ನಮನೀಯ ಅವಧಿ\"]},\"home\":{\"name\":\"ಮನೆ ಸಾಲಗಳು\",\"description\":\"ವಾಸ್ತವ್ಯ ಆಸ್ತಿಯನ್ನು ಖರೀದಿಸಲು ಮನೆ ಸಾಲ\",\"features\":[\"ತೆರಿಗೆ ಪ್ರಯೋಜನಗಳು\",\"ದೀರ್ಘಾವಧಿ\",\"RERA ಪರಿಶೀಲಿಸಲಾಗಿದೆ\"]},\"vehicle\":{\"name\":\"ವಾಹನ ಸಾಲಗಳು\",\"description\":\"ಪೋಟಿಯಾದ ದರಗಳೊಂದಿಗೆ ಕಾರು ಮತ್ತು ಎರಡು-ಚಕ್ರದ ಸಾಲಗಳು\",\"features\":[\"ತಕ್ಷಣ ಅನುಮೋದನೆ\",\"ಶೂನ್ಯ ಮೊದಲ ಪಾವತಿ\",\"ವಿಮೆ\"]},\"business\":{\"name\":\"ವ್ಯವಹಾರ ಸಾಲಗಳು\",\"description\":\"MSMEಗಳಿಗಾಗಿ ಕೆಲಸದ ಮೂಲಧನ ಮತ್ತು ವಿಸ್ತರಣಾ ಸಾಲಗಳು\",\"features\":[\"GST ಆಧಾರಿತ\",\"ತ್ವರಿತ ವಿತರಣೆ\",\"ನಮನೀಯ ಮರುಪಾವತಿ\"]},\"education\":{\"name\":\"ಶಿಕ್ಷಣ ಸಾಲಗಳು\",\"description\":\"ಭಾರತ ಮತ್ತು ಹೊರಗೆ ಉನ್ನತ ಅಧ್ಯಯನಕ್ಕಾಗಿ ಶಿಕ್ಷಣ ಸಾಲ\",\"features\":[\"ಮೋರೇಟರಿಯಮ್ ಅವಧಿ\",\"ಸಂಪೂರ್ಣ ಕವರೇಜ್\",\"ತೆರಿಗೆ ಪ್ರಯೋಜನಗಳು\"]},\"agriculture\":{\"name\":\"ಕೃಷಿ ಸಾಲಗಳು\",\"description\":\"ಕೃಷಿಕರಿಗಾಗಿ ವಿಸ್ತೃತ ಕೃಷಿ ಸಾಲಗಳು\",\"features\":[\"ಹವಾಮಾನ ವಿಮೆ\",\"ನಮನೀಯ ಮರುಪಾವತಿ\",\"ಸಬ್ಸಿಡಿ\"]},\"gold\":{\"name\":\"ಚಿನ್ನದ ಸಾಲಗಳು\",\"description\":\"ಚಿನ್ನದ ಆಭರಣಗಳಿಗೆ ವಿರುದ್ಧ ತಕ್ಷಣ ಸಾಲ\",\"features\":[\"ತಕ್ಷಣ ಅನುಮೋದನೆ\",\"ಸುರಕ್ಷಿತ ಶೇಖರಣೆ\",\"ನಮನೀಯ\"]},\"credit-card\":{\"name\":\"ಕ್ರೆಡಿಟ್ ಕಾರ್ಡುಗಳು\",\"description\":\"ವಿಶೇಷ ಬಹುಮಾನಗಳೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡುಗಳು\",\"features\":[\"ಬಹುಮಾನ ಅಂಕಗಳು\",\"ಲವಂಜ್ ಪ್ರವೇಶ\",\"ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್\"]},\"two-wheeler\":{\"name\":\"ಎರಡು ಚಕ್ರದ ವಾಹನ\",\"description\":\"ಎರಡು-ಚಕ್ರದ ಖರೀದಿಗಾಗಿ ತ್ವರಿತ ಸಾಲ\",\"features\":[\"ಕನಿಷ್ಠ ದಾಖಲೆಗಳು\",\"ಅದೇ ದಿನ\",\"ವಿಮೆ\"]},\"healthcare\":{\"name\":\"ಆರೋಗ್ಯ ಸಾಲಗಳು\",\"description\":\"ವೈದ್ಯಕೀಯ ಖರ್ಚುಗಳಿಗಾಗಿ ತುರ್ತು ಸಾಲ\",\"features\":[\"ಆಸ್ಪತ್ರೆ ಜಾಲಬಂಧ\",\"ತ್ವರಿತ ಅನುಮೋದನೆ\",\"EMI ಮೋರೇಟರಿಯಮ್\"]},\"digital\":{\"name\":\"ಡಿಜಿಟಲ್ ಸಾಲಗಳು\",\"description\":\"ತಕ್ಷಣ ಅನುಮೋದನೆಯೊಂದಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಡಿಜಿಟಲ್ ಸಾಲ\",\"features\":[\"100% ಡಿಜಿಟಲ್\",\"ತಕ್ಷಣ ವಿತರಣೆ\",\"ನಮನೀಯ\"]},\"microfinance\":{\"name\":\"ಸೂಕ್ಷ್ಮ ಹಣಕಾಸು\",\"description\":\"ಸಣ್ಣ ವ್ಯವಹಾರ ಪ್ರಾರಂಭಗಳು ಮತ್ತು ಆದಾಯ ಉತ್ಪಾದನೆ\",\"features\":[\"ಗುಂಪು ಸಾಲದಾರಿಕೆ\",\"ಹಣಕಾಸು ಸಾಕ್ಷರತೆ\",\"ಸುಲಭ ಪ್ರವೇಶ\"]}},\"stats\":{\"loans_disbursed\":\"ವಿತರಿಸಿದ ಸಾಲಗಳು\",\"happy_customers\":\"ಸಂತೃಪ್ತ ಗ್ರಾಹಕರು\",\"approval_rate\":\"ಅನುಮೋದನಾ ದರ\",\"cities_covered\":\"ಒಳಗೊಂಡ ನಗರಗಳು\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-ಚಾಲಿತ ಕ್ರೆಡಿಟ್ ಸ್ಕೋರಿಂಗ್\",\"description\":\"ತಕ್ಷಣ ಕ್ರೆಡಿಟ್ ನಿರ್ಧಾರಗಳಿಗಾಗಿ ಮುಂದುವರಿದ ಅಲ್ಗಾರಿದಮ್‌ಗಳು 500ಕ್ಕೂ ಹೆಚ್ಚು ಡೇಟಾ ಅಂಶಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತವೆ\"},\"hour_processing\":{\"title\":\"24-ಗಂಟೆ ಪ್ರಕ್ರಿಯೆ\",\"description\":\"ಹೆಚ್ಚಿನ ಸಾಲದ ಪ್ರಕಾರಗಳಿಗೆ ಅರ್ಜಿಯಿಂದ ಹಿಡಿದು ವಿತರಣೆಯವರೆಗೆ ಕೇವಲ 24 ಗಂಟೆಗಳಲ್ಲಿ\"},\"government_integration\":{\"title\":\"ಸರ್ಕಾರ ಒಳಸಂಪರ್ಕ\",\"description\":\"ಸುಗಮವಾದ ಪರಿಶೀಲನೆಗಾಗಿ ಆಧಾರ್, PAN, GST ಜೊತೆಗೆ ನೇರ ಸಂಪರ್ಕ\"},\"multi_language\":{\"title\":\"ಬಹುಭಾಷಾ ಬೆಂಬಲ\",\"description\":\"ಗ್ರಾಮೀಣ ಪ್ರವೇಶಕ್ಕಾಗಿ ಹಿಂದಿ ಮತ್ತು 11 ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳಲ್ಲಿ ಲಭ್ಯ\"},\"competitive_rates\":{\"title\":\"ಪೋಟಿಯಾದ ದರಗಳು\",\"description\":\"ಎಲ್ಲಾ 12 ಸಾಲದ ವಲಯಗಳಲ್ಲಿ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಉತ್ತಮ ಬಡ್ಡಿ ದರಗಳು\"},\"fraud_prevention\":{\"title\":\"ವಂಚನೆ ತಡೆಗಟ್ಟಿಕೆ\",\"description\":\"ತಕ್ಷಣದ ವಂಚನೆ ಪತ್ತೆ ಮಾಡುವ ವ್ಯವಸ್ಥೆಗಳೊಂದಿಗೆ ಬ್ಯಾಂಕ್-ಶ್ರೇಣಿಯ ಭದ್ರತೆ\"}}}"));}),
"[project]/public/locales/bn/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"এআই-চালিত ডিজিটাল ধার প্ল্যাটফর্ম\",\"subtitle\":\"12টি ধারের ক্ষেত্রে ধার গ্রহীতাদের সঠিক ধারদাতাদের সাথে সংযুক্ত করা হচ্ছে। তাৎক্ষণিক অনুমোদন, প্রতিদ্বন্দ্বিতামূলক হার এবং নির্বিঘ্ন ডিজিটাল প্রক্রিয়ার অভিজ্ঞতা লাভ করুন।\",\"apply_now\":\"ধারের জন্য আবেদন করুন\",\"login_dashboard\":\"ড্যাশবোর্ডে লগইন করুন\",\"loan_sectors\":\"12টি বিস্তৃত ধারের ক্ষেত্র\",\"loan_sectors_desc\":\"ব্যক্তিগত প্রয়োজনীয়তা থেকে শুরু করে ব্যবসার প্রসার পর্যন্ত, আমরা প্রতিটি আর্থিক প্রয়োজনীয়তা মেটানোর জন্য কাস্টমাইজড সমাধান এবং প্রতিদ্বন্দ্বিতামূলক হার প্রদান করি।\",\"why_choose\":\"কেন ফিন-এজেনটিক্স ইন্ডিয়া বেছে নেবেন?\",\"why_choose_desc\":\"ভারতে ধারদানের ক্ষেত্রে বিপ্লব আনতে অত্যাধুনিক প্রযুক্তি এবং গভীর বাজার অন্তর্দৃষ্টি ব্যবহার করা হচ্ছে।\",\"ready_to_start\":\"শুরু করতে প্রস্তুত?\",\"ready_to_start_desc\":\"তাদের আর্থিক প্রয়োজনের জন্য ফিন-এজেনটিক্সে বিশ্বাস করে এমন দশ লক্ষ সন্তুষ্ট গ্রাহকদের সাথে যোগ দিন। এখনই আবেদন করুন এবং তাৎক্ষণিক অনুমোদন পান!\",\"start_application\":\"আপনার আবেদন শুরু করুন\",\"explore_loans\":\"সমস্ত ধার অনুসন্ধান করুন\"},\"navigation\":{\"home\":\"হোম\",\"all_loans\":\"সমস্ত ধার\",\"emi_calculator\":\"EMI ক্যালকুলেটর\",\"about\":\"আমাদের সম্পর্কে\",\"contact\":\"যোগাযোগ\",\"dashboard\":\"ড্যাশবোর্ড\",\"apply_for_loan\":\"ধারের জন্য আবেদন করুন\",\"my_applications\":\"আমার আবেদনগুলি\",\"kyc_verification\":\"KYC যাচাইকরণ\",\"profile\":\"প্রোফাইল\",\"admin_dashboard\":\"অ্যাডমিন ড্যাশবোর্ড\",\"applications\":\"আবেদনগুলি\",\"users\":\"ব্যবহারকারীরা\",\"analytics\":\"বিশ্লেষণ\",\"reports\":\"প্রতিবেদন\",\"admin_profile\":\"অ্যাডমিন প্রোফাইল\",\"setup\":\"সেটআপ\",\"login\":\"লগইন\",\"apply_now\":\"এখন আবেদন করুন\",\"profile_settings\":\"প্রোফাইল সেটিংস\",\"sign_out\":\"সাইন আউট\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"ব্যক্তিগত ধার\",\"description\":\"সর্বনিম্ন নথিপত্রের মাধ্যমে দ্রুত ব্যক্তিগত ধার\",\"features\":[\"কোনও প্রতিদান প্রয়োজন নেই\",\"দ্রুত অনুমোদন\",\"নমনীয় মেয়াদ\"]},\"home\":{\"name\":\"হোম ধার\",\"description\":\"আবাসিক সম্পত্তি কেনার জন্য হোম ধার\",\"features\":[\"ট্যাক্স সুবিধা\",\"দীর্ঘ মেয়াদ\",\"RERA যাচাইকৃত\"]},\"vehicle\":{\"name\":\"যানবাহন ধার\",\"description\":\"প্রতিদ্বন্দ্বিতামূলক হারে গাড়ি এবং দু-চাকা যানের ধার\",\"features\":[\"তাৎক্ষণিক অনুমোদন\",\"শূন্য ডাউন পেমেন্ট\",\"বীমা\"]},\"business\":{\"name\":\"ব্যবসা ধার\",\"description\":\"MSME-এর জন্য কার্যনির্বাহী মূলধন এবং প্রসারের ধার\",\"features\":[\"GST ভিত্তিক\",\"দ্রুত বিতরণ\",\"নমনীয় পুনর্পরিশোধন\"]},\"education\":{\"name\":\"শিক্ষা ধার\",\"description\":\"ভারত এবং বিদেশে উচ্চ শিক্ষার জন্য শিক্ষা ধার\",\"features\":[\"মোরেটোরিয়াম সময়কাল\",\"সম্পূর্ণ কভারেজ\",\"ট্যাক্স সুবিধা\"]},\"agriculture\":{\"name\":\"কৃষি ধার\",\"description\":\"কৃষকদের জন্য বিস্তৃত কৃষি ধার\",\"features\":[\"আবহাওয়া বীমা\",\"নমনীয় পুনর্পরিশোধন\",\"সাবসিডি\"]},\"gold\":{\"name\":\"স্বর্ণ ধার\",\"description\":\"স্বর্ণ আভূষণের বিপরীতে তাৎক্ষণিক ধার\",\"features\":[\"তাৎক্ষণিক অনুমোদন\",\"নিরাপদ সংরক্ষণ\",\"নমনীয়\"]},\"credit-card\":{\"name\":\"ক্রেডিট কার্ড\",\"description\":\"এক্সক্লুসিভ পুরস্কারসহ প্রিমিয়াম ক্রেডিট কার্ড\",\"features\":[\"পুরস্কার পয়েন্ট\",\"লাউঞ্জ অ্যাক্সেস\",\"ক্যাশব্যাক\"]},\"two-wheeler\":{\"name\":\"দু-চাকা যান\",\"description\":\"দু-চাকা যান কেনার জন্য দ্রুত ধার\",\"features\":[\"সর্বনিম্ন নথিপত্র\",\"একই দিন\",\"বীমা\"]},\"healthcare\":{\"name\":\"স্বাস্থ্যসেবা ধার\",\"description\":\"চিকিৎসা খরচের জন্য জরুরি ধার\",\"features\":[\"হাসপাতাল নেটওয়ার্ক\",\"দ্রুত অনুমোদন\",\"EMI মোরেটোরিয়াম\"]},\"digital\":{\"name\":\"ডিজিটাল ধার\",\"description\":\"তাৎক্ষণিক অনুমোদনসহ সম্পূর্ণ ডিজিটাল ধার\",\"features\":[\"100% ডিজিটাল\",\"তাৎক্ষণিক বিতরণ\",\"নমনীয়\"]},\"microfinance\":{\"name\":\"মাইক্রোফাইন্যান্স\",\"description\":\"ছোট ব্যবসা শুরু এবং আয় সৃষ্টি\",\"features\":[\"গ্রুপ ধারদান\",\"আর্থিক সাক্ষরতা\",\"সহজ অ্যাক্সেস\"]}},\"stats\":{\"loans_disbursed\":\"বিতরণকৃত ধার\",\"happy_customers\":\"সন্তুষ্ট গ্রাহক\",\"approval_rate\":\"অনুমোদনের হার\",\"cities_covered\":\"অন্তর্ভুক্ত শহরগুলি\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"এআই-চালিত ক্রেডিট স্কোরিং\",\"description\":\"তাৎক্ষণিক ক্রেডিট সিদ্ধান্তের জন্য উন্নত অ্যালগরিদম 500টির বেশি ডেটা পয়েন্ট বিশ্লেষণ করে\"},\"hour_processing\":{\"title\":\"24-ঘন্টার প্রক্রিয়াকরণ\",\"description\":\"অধিকাংশ ধারের ধরনের জন্য আবেদন থেকে শুরু করে বিতরণ পর্যন্ত মাত্র 24 ঘন্টায়\"},\"government_integration\":{\"title\":\"সরকারি সংহতি\",\"description\":\"নির্বিঘ্ন যাচাইকরণের জন্য আধার, PAN, GST-এর সাথে সরাসরি সংহতি\"},\"multi_language\":{\"title\":\"বহুভাষিক সমর্থন\",\"description\":\"গ্রামীণ অ্যাক্সেসযোগ্যতার জন্য হিন্দি এবং 11টি অঞ্চলের ভাষায় উপলব্ধ\"},\"competitive_rates\":{\"title\":\"প্রতিদ্বন্দ্বিতামূলক হার\",\"description\":\"সমস্ত 12টি ধারের ক্ষেত্রে মার্কেটের সেরা সুদের হার\"},\"fraud_prevention\":{\"title\":\"প্রতারণা প্রতিরোধ\",\"description\":\"তাৎক্ষণিক প্রতারণা সনাক্তকরণ সিস্টেমসহ ব্যাঙ্ক-গ্রেড নিরাপত্তা\"}}}"));}),
"[project]/public/locales/gu/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-સંચાલિત ડિજિટલ ઉધાર પ્લેટફોર્મ\",\"subtitle\":\"12 ઉધારના ક્ષેત્રોમાં ઉધારનારાઓને યોગ્ય ઉધારદાતાઓ સાથે જોડવું. તાત્કાલિક મંજૂરી, સ્પર્ધાત્મક દરો અને સુગમ ડિજિટલ પ્રક્રિયાઓનો અનુભવ મેળવો.\",\"apply_now\":\"ઉધાર માટે અરજી કરો\",\"login_dashboard\":\"ડેશબોર્ડ પર લૉગિન કરો\",\"loan_sectors\":\"12 વિસ્તૃત ઉધારના ક્ષેત્રો\",\"loan_sectors_desc\":\"વ્યક્તિગત જરૂરિયાતોથી લઈને વ્યવસાયની વૃદ્ધિ સુધી, અમે દરેક આર્થિક જરૂરિયાતને કસ્ટમાઇઝ્ડ ઉકેલો અને સ્પર્ધાત્મક દરો સાથે આવરી લઈએ છીએ.\",\"why_choose\":\"શા માટે ફિન-એજન્ટિક્સ ઇન્ડિયા પસંદ કરવું?\",\"why_choose_desc\":\"ભારતમાં ઉધારદારીને ક્રાંતિકારક બનાવવા માટે અત્યાધુનિક તકનીક અને ઊંડી બજારની અંતર્દૃષ્ટિનો ઉપયોગ કરવો.\",\"ready_to_start\":\"શરૂ કરવા માટે તૈયાર છો?\",\"ready_to_start_desc\":\"તેમની આર્થિક જરૂરિયાતો માટે ફિન-એજન્ટિક્સ પર વિશ્વાસ કરનારા દસ લાખથી વધુ સંતૃપ્ત ગ્રાહકો સાથે જોડાઓ. હવે જ અરજી કરો અને તાત્કાલિક મંજૂરી મેળવો!\",\"start_application\":\"તમારી અરજી શરૂ કરો\",\"explore_loans\":\"બધા ઉધારોની શોધ કરો\"},\"navigation\":{\"home\":\"હોમ\",\"all_loans\":\"બધા ઉધારો\",\"emi_calculator\":\"EMI કેલ્ક્યુલેટર\",\"about\":\"અમારા વિશે\",\"contact\":\"સંપર્ક કરો\",\"dashboard\":\"ડેશબોર્ડ\",\"apply_for_loan\":\"ઉધાર માટે અરજી કરો\",\"my_applications\":\"મારી અરજીઓ\",\"kyc_verification\":\"KYC ચકાસણી\",\"profile\":\"પ્રોફાઇલ\",\"admin_dashboard\":\"એડમિન ડેશબોર્ડ\",\"applications\":\"અરજીઓ\",\"users\":\"વપરાશકર્તાઓ\",\"analytics\":\"વિશ્લેષણ\",\"reports\":\"રિપોર્ટ્સ\",\"admin_profile\":\"એડમિન પ્રોફાઇલ\",\"setup\":\"સેટઅપ\",\"login\":\"લૉગિન\",\"apply_now\":\"હવે અરજી કરો\",\"profile_settings\":\"પ્રોફાઇલ સેટિંગ્સ\",\"sign_out\":\"સાઇન આઉટ\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"વ્યક્તિગત ઉધારો\",\"description\":\"ન્યૂનતમ દસ્તાવેજીકરણ સાથે ઝડપી વ્યક્તિગત ઉધારો\",\"features\":[\"કોઈ ગિરવી નહીં\",\"ઝડપી મંજૂરી\",\"લવચિક સમયગાળો\"]},\"home\":{\"name\":\"ઘરના ઉધારો\",\"description\":\"રહેશનીય સંપત્તિ ખરીદવા માટે ઘરનો ઉધાર\",\"features\":[\"કર લાભો\",\"લાંબો સમયગાળો\",\"RERA ચકાસાયેલ\"]},\"vehicle\":{\"name\":\"વાહન ઉધારો\",\"description\":\"સ્પર્ધાત્મક દરો સાથે કાર અને બે-પહિયાવાળા વાહનના ઉધારો\",\"features\":[\"તાત્કાલિક મંજૂરી\",\"શૂન્ય ડાઉન ચૂકવણી\",\"વીમો\"]},\"business\":{\"name\":\"વ્યવસાયના ઉધારો\",\"description\":\"MSME માટે કાર્યરત મૂડી અને વિસ્તરણના ઉધારો\",\"features\":[\"GST આધારિત\",\"ઝડપી વિતરણ\",\"લવચિક પુનઃચૂકવણી\"]},\"education\":{\"name\":\"શિક્ષણ ઉધારો\",\"description\":\"ભારત અને વિદેશમાં ઉચ્ચ અભ્યાસ માટે શિક્ષણ ઉધાર\",\"features\":[\"મોરેટોરિયમ સમયગાળો\",\"સંપૂર્ણ આવરણ\",\"કર લાભો\"]},\"agriculture\":{\"name\":\"કૃષિ ઉધારો\",\"description\":\"ખેડૂતો માટે વિસ્તૃત કૃષિ ઉધારો\",\"features\":[\"હવામાન વીમો\",\"લવચિક પુનઃચૂકવણી\",\"સબસિડી\"]},\"gold\":{\"name\":\"સોનાના ઉધારો\",\"description\":\"સોનાના આભૂષણો માટે તાત્કાલિક ઉધાર\",\"features\":[\"તાત્કાલિક મંજૂરી\",\"સુરક્ષિત સંગ્રહ\",\"લવચિક\"]},\"credit-card\":{\"name\":\"ક્રેડિટ કાર્ડ્સ\",\"description\":\"વિશેષ ઇનામો સાથે પ્રીમિયમ ક્રેડિટ કાર્ડ્સ\",\"features\":[\"ઇનામ મુદ્દો\",\"લાઉન્જ ઍક્સેસ\",\"કેશબેક\"]},\"two-wheeler\":{\"name\":\"બે પહિયાવાળા વાહન\",\"description\":\"બે-પહિયાવાળા વાહન ખરીદવા માટે ઝડપી ઉધાર\",\"features\":[\"ન્યૂનતમ દસ્તાવેજો\",\"જ દિવસ\",\"વીમો\"]},\"healthcare\":{\"name\":\"સ્વાસ્થ્ય ઉધારો\",\"description\":\"તાત્કાલિક ઉધાર તબીબી ખર્ચા માટે\",\"features\":[\"હોસ્પિટલ નેટવર્ક\",\"ઝડપી મંજૂરી\",\"EMI મોરેટોરિયમ\"]},\"digital\":{\"name\":\"ડિજિટલ ઉધારો\",\"description\":\"તાત્કાલિક મંજૂરી સાથે સંપૂર્ણપણે ડિજિટલ ઉધાર\",\"features\":[\"100% ડિજિટલ\",\"તાત્કાલિક વિતરણ\",\"લવચિક\"]},\"microfinance\":{\"name\":\"માઇક્રોફાઇનાન્સ\",\"description\":\"નાના વ્યવસાયની શરૂઆત અને આવક પેદા કરવી\",\"features\":[\"જૂથ ઉધારદારી\",\"આર્થિક સાક્ષરતા\",\"સરળ ઍક્સેસ\"]}},\"stats\":{\"loans_disbursed\":\"વિતરિત ઉધારો\",\"happy_customers\":\"સંતૃપ્ત ગ્રાહકો\",\"approval_rate\":\"મંજૂરીનો દર\",\"cities_covered\":\"આવરેલા શહેરો\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-સંચાલિત ક્રેડિટ સ્કોરિંગ\",\"description\":\"તાત્કાલિક ક્રેડિટ નિર્ણયો માટે ઉન્નત એલ્ગોરિધમ 500થી વધુ ડેટા મુદ્દાઓનું વિશ્લેષણ કરે છે\"},\"hour_processing\":{\"title\":\"24-કલાકની પ્રક્રિયા\",\"description\":\"મોટાભાગના ઉધારના પ્રકારો માટે અરજીથી શરૂ કરીને વિતરણ સુધી માત્ર 24 કલાકમાં\"},\"government_integration\":{\"title\":\"સરકારી એકીકરણ\",\"description\":\"સુગમ ચકાસણી માટે આધાર, PAN, GST સાથે સીધું એકીકરણ\"},\"multi_language\":{\"title\":\"બહુભાષા આધાર\",\"description\":\"ગ્રામીણ ઍક્સેસિબિલિટી માટે હિન્દી અને 11 ક્ષેત્રીય ભાષાઓમાં ઉપલબ્ધ\"},\"competitive_rates\":{\"title\":\"સ્પર્ધાત્મક દરો\",\"description\":\"બધા 12 ઉધારના ક્ષેત્રોમાં માર્કેટમાં શ્રેષ્ઠ વ્યાજના દરો\"},\"fraud_prevention\":{\"title\":\"ધોરણધોરી ટાળવી\",\"description\":\"તાત્કાલિક ધોરણધોરી શોધ સિસ્ટમ્સ સાથે બેન્ક-ગ્રેડ સુરક્ષા\"}}}"));}),
"[project]/public/locales/or/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-ସଂଚାଳିତ ଡିଜିଟାଲ୍ ଋଣ ପ୍ଲାଟଫର୍ମ\",\"subtitle\":\"12ଟି ଋଣ କ୍ଷେତ୍ରରେ ଋଣଗ୍ରହୀତାଙ୍କୁ ସଠିକ୍ ଋଣଦାତାଙ୍କ ସହିତ ସଂଯୋଗ କରନ୍ତି। ତୁରନ୍ତ ଅନୁମୋଦନ, ପ୍ରତିଦ୍ୱନ୍ଦ୍ୱିତାମୂଳକ ହାର ଏବଂ ସହଜ ଡିଜିଟାଲ୍ ପ୍ରକ୍ରିୟାର ଅନୁଭୂତି ନିଅନ୍ତୁ।\",\"apply_now\":\"ଋଣ ପାଇଁ ଆବେଦନ କରନ୍ତୁ\",\"login_dashboard\":\"ଡ୍ୟାସବୋର୍ଡକୁ ଲଗଇନ୍ କରନ୍ତୁ\",\"loan_sectors\":\"12ଟି ବିସ୍ତୃତ ଋଣ କ୍ଷେତ୍ର\",\"loan_sectors_desc\":\"ବ୍ୟକ୍ତିଗତ ଆବଶ୍ୟକତାରୁ ଆରମ୍ଭ କରି ବ୍ୟବସାୟ ବୃଦ୍ଧି ପର୍ଯ୍ୟନ୍ତ, ଆମେ ପ୍ରତ୍ୟେକ ଆର୍ଥିକ ଆବଶ୍ୟକତାକୁ କଷ୍ଟମାଇଜ୍ଡ୍ ସମାଧାନ ଏବଂ ପ୍ରତିଦ୍ୱନ୍ଦ୍ୱିତାମୂଳକ ହାର ସହିତ କଭର୍ କରୁ।\",\"why_choose\":\"କାହିଁକି ଫିନ୍-ଏଜେଣ୍ଟିକ୍ସ ଇଣ୍ଡିଆ ବାଛନ୍ତି?\",\"why_choose_desc\":\"ଭାରତରେ ଋଣଦାନକୁ କ୍ରାନ୍ତିକରଣ କରିବା ପାଇଁ ଅତ୍ୟାଧୁନିକ ପ୍ରଯୁକ୍ତି ଏବଂ ଗଭୀର ବଜାର ଅନ୍ତର୍ଦୃଷ୍ଟିର ଉପଯୋଗ କରନ୍ତି।\",\"ready_to_start\":\"ଆରମ୍ଭ କରିବାକୁ ପ୍ରସ୍ତୁତ?\",\"ready_to_start_desc\":\"ତାଙ୍କର ଆର୍ଥିକ ଆବଶ୍ୟକତା ପାଇଁ ଫିନ୍-ଏଜେଣ୍ଟିକ୍ସରେ ବିଶ୍ୱାସ କରୁଥିବା ନିୟୁତ ନିରାଳା ଗ୍ରାହକଙ୍କ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ। ବର୍ତ୍ତମାନ ଆବେଦନ କରନ୍ତୁ ଏବଂ ତୁରନ୍ତ ଅନୁମୋଦନ ପାଆନ୍ତୁ!\",\"start_application\":\"ଆପଣଙ୍କର ଆବେଦନ ଆରମ୍ଭ କରନ୍ତୁ\",\"explore_loans\":\"ସମସ୍ତ ଋଣର ଅନୁସନ୍ଧାନ କରନ୍ତୁ\"},\"navigation\":{\"home\":\"ହୋମ୍\",\"all_loans\":\"ସମସ୍ତ ଋଣ\",\"emi_calculator\":\"EMI କାଲକୁଲେଟର୍\",\"about\":\"ଆମ ବିଷୟରେ\",\"contact\":\"ସମ୍ପର୍କ\",\"dashboard\":\"ଡ୍ୟାସବୋର୍ଡ୍\",\"apply_for_loan\":\"ଋଣ ପାଇଁ ଆବେଦନ କରନ୍ତୁ\",\"my_applications\":\"ମୋର ଆବେଦନଗୁଡ଼ିକ\",\"kyc_verification\":\"KYC ଯାଞ୍ଚ\",\"profile\":\"ପ୍ରୋଫାଇଲ୍\",\"admin_dashboard\":\"ପ୍ରଶାସକ ଡ୍ୟାସବୋର୍ଡ୍\",\"applications\":\"ଆବେଦନଗୁଡ଼ିକ\",\"users\":\"ବ୍ୟବହାରକାରୀମାନେ\",\"analytics\":\"ବିଶ୍ଳେଷଣ\",\"reports\":\"ପ୍ରତିବେଦନ\",\"admin_profile\":\"ପ୍ରଶାସକ ପ୍ରୋଫାଇଲ୍\",\"setup\":\"ସେଟଅପ୍\",\"login\":\"ଲଗଇନ୍\",\"apply_now\":\"ବର୍ତ୍ତମାନ ଆବେଦନ କରନ୍ତୁ\",\"profile_settings\":\"ପ୍ରୋଫାଇଲ୍ ସେଟିଂସ୍\",\"sign_out\":\"ସାଇନ୍ ଆଉଟ୍\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"ବ୍ୟକ୍ତିଗତ ଋଣ\",\"description\":\"ସର୍ବନିମ୍ନ ଦଲିଲୀକରଣ ସହିତ ତୁରନ୍ତ ବ୍ୟକ୍ତିଗତ ଋଣ\",\"features\":[\"କୌଣସି ପ୍ରତିଦାନ ନାହିଁ\",\"ତୁରନ୍ତ ଅନୁମୋଦନ\",\"ଲଚ୍ଛିଳା ମେୟାଦ\"]},\"home\":{\"name\":\"ଗୃହ ଋଣ\",\"description\":\"ଆବାସୀୟ ସମ୍ପତ୍ତି କିଣିବା ପାଇଁ ଗୃହ ଋଣ\",\"features\":[\"କର ସୁବିଧା\",\"ଦୀର୍ଘ ମେୟାଦ\",\"RERA ଯାଞ୍ଚିତ\"]},\"vehicle\":{\"name\":\"ଯାନବାହନ ଋଣ\",\"description\":\"ପ୍ରତିଦ୍ୱନ୍ଦ୍ୱିତାମୂଳକ ହାର ସହିତ କାର୍ ଏବଂ ଦୁଇ-ଚକ୍ର ଯାନର ଋଣ\",\"features\":[\"ତୁରନ୍ତ ଅନୁମୋଦନ\",\"ଶୂନ୍ୟ ଡାଉନ୍ ପେମେଣ୍ଟ୍\",\"ବୀମା\"]},\"business\":{\"name\":\"ବ୍ୟବସାୟ ଋଣ\",\"description\":\"MSME ପାଇଁ କାର୍ଯ୍ୟନିର୍ବାହୀ ମୂଳଧନ ଏବଂ ବିସ୍ତାରର ଋଣ\",\"features\":[\"GST ଆଧାରିତ\",\"ତୁରନ୍ତ ବିତରଣ\",\"ଲଚ୍ଛିଳା ପୁନଃପେମେଣ୍ଟ୍\"]},\"education\":{\"name\":\"ଶିକ୍ଷା ଋଣ\",\"description\":\"ଭାରତ ଏବଂ ବିଦେଶରେ ଉଚ୍ଚ ଶିକ୍ଷା ପାଇଁ ଶିକ୍ଷା ଋଣ\",\"features\":[\"ମୋରେଟୋରିୟମ୍ ସମୟକାଳ\",\"ସମ୍ପୂର୍ଣ୍ଣ କଭରେଜ୍\",\"କର ସୁବିଧା\"]},\"agriculture\":{\"name\":\"କୃଷି ଋଣ\",\"description\":\"କୃଷକମାନଙ୍କ ପାଇଁ ବିସ୍ତୃତ କୃଷି ଋଣ\",\"features\":[\"ଆବହାୱା ବୀମା\",\"ଲଚ୍ଛିଳା ପୁନଃପେମେଣ୍ଟ୍\",\"ଅନୁଦାନ\"]},\"gold\":{\"name\":\"ସ୍ୱର୍ଣ୍ଣ ଋଣ\",\"description\":\"ସ୍ୱର୍ଣ୍ଣ ଆଭୂଷଣ ବିପରୀତରେ ତୁରନ୍ତ ଋଣ\",\"features\":[\"ତୁରନ୍ତ ଅନୁମୋଦନ\",\"ସୁରକ୍ଷିତ ସଂରକ୍ଷଣ\",\"ଲଚ୍ଛିଳା\"]},\"credit-card\":{\"name\":\"କ୍ରେଡିଟ୍ କାର୍ଡ୍\",\"description\":\"ବିଶେଷ ପୁରସ୍କାର ସହିତ ପ୍ରିମିୟମ୍ କ୍ରେଡିଟ୍ କାର୍ଡ୍\",\"features\":[\"ପୁରସ୍କାର ପଏଣ୍ଟ୍\",\"ଲାଉଞ୍ଜ ପ୍ରବେଶ\",\"କ୍ୟାସବ୍ୟାକ୍\"]},\"two-wheeler\":{\"name\":\"ଦୁଇ-ଚକ୍ର ଯାନ\",\"description\":\"ଦୁଇ-ଚକ୍ର ଯାନ କିଣିବା ପାଇଁ ତୁରନ୍ତ ଋଣ\",\"features\":[\"ସର୍ବନିମ୍ନ ଦଲିଲ\",\"ଏକ ଦିନ\",\"ବୀମା\"]},\"healthcare\":{\"name\":\"ସ୍ୱାସ୍ଥ୍ୟ ଋଣ\",\"description\":\"ଚିକିତ୍ସା ଖର୍ଚ୍ଚ ପାଇଁ ଜରୁରୀକାଳୀନ ଋଣ\",\"features\":[\"ହସ୍ପିଟାଲ୍ ନେଟୱାର୍କ୍\",\"ତୁରନ୍ତ ଅନୁମୋଦନ\",\"EMI ମୋରେଟୋରିୟମ୍\"]},\"digital\":{\"name\":\"ଡିଜିଟାଲ୍ ଋଣ\",\"description\":\"ତୁରନ୍ତ ଅନୁମୋଦନ ସହିତ ସମ୍ପୂର୍ଣ୍ଣଭାବରେ ଡିଜିଟାଲ୍ ଋଣ\",\"features\":[\"100% ଡିଜିଟାଲ୍\",\"ତୁରନ୍ତ ବିତରଣ\",\"ଲଚ୍ଛିଳା\"]},\"microfinance\":{\"name\":\"ମାଇକ୍ରୋଫାଇନାନ୍ସ୍\",\"description\":\"ଛୋଟ ବ୍ୟବସାୟ ଆରମ୍ଭ ଏବଂ ଆୟ ସୃଷ୍ଟି\",\"features\":[\"ଗ୍ରୁପ୍ ଲେଣ୍ଡିଂ\",\"ଆର୍ଥିକ ସାକ୍ଷରତା\",\"ସହଜ ପ୍ରବେଶ\"]}},\"stats\":{\"loans_disbursed\":\"ବିତରଣ କରାଯାଇଥିବା ଋଣ\",\"happy_customers\":\"ନିରାଳା ଗ୍ରାହକ\",\"approval_rate\":\"ଅନୁମୋଦନ ହାର\",\"cities_covered\":\"କଭର୍ କରାଯାଇଥିବା ସହରଗୁଡ଼ିକ\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-ସଂଚାଳିତ କ୍ରେଡିଟ୍ ସ୍କୋରିଂ\",\"description\":\"ତୁରନ୍ତ କ୍ରେଡିଟ୍ ନିର୍ଣ୍ଣୟ ପାଇଁ ଅଗ୍ରୀମ ଏଲ୍ଗୋରିଦମ୍ 500ରୁ ଅଧିକ ଡେଟା ପଏଣ୍ଟ୍ ବିଶ୍ଳେଷଣ କରନ୍ତି\"},\"hour_processing\":{\"title\":\"24-ଘଣ୍ଟାର ପ୍ରକ୍ରିୟା\",\"description\":\"ଅଧିକାଂଶ ଋଣର ପ୍ରକାର ପାଇଁ ଆବେଦନରୁ ଆରମ୍ଭ କରି ବିତରଣ ପର୍ଯ୍ୟନ୍ତ କେବଳ 24 ଘଣ୍ଟାରେ\"},\"government_integration\":{\"title\":\"ସରକାରୀ ସଂହତି\",\"description\":\"ସହଜ ଯାଞ୍ଚ ପାଇଁ ଆଧାର୍, PAN, GST ସହିତ ସିଧା ସଂହତି\"},\"multi_language\":{\"title\":\"ବହୁଭାଷା ସମର୍ଥନ\",\"description\":\"ଗ୍ରାମ୍ୟ ପ୍ରବେଶଯୋଗ୍ୟତା ପାଇଁ ହିନ୍ଦୀ ଏବଂ 11ଟି କ୍ଷେତ୍ରୀୟ ଭାଷାରେ ଉପଲବ୍ଧ\"},\"competitive_rates\":{\"title\":\"ପ୍ରତିଦ୍ୱନ୍ଦ୍ୱିତାମୂଳକ ହାର\",\"description\":\"ସମସ୍ତ 12ଟି ଋଣ କ୍ଷେତ୍ରରେ ମାର୍କେଟର ସର୍ବୋତ୍ତମ ସୁଦୃଢ ହାର\"},\"fraud_prevention\":{\"title\":\"ଧୋକା ପ୍ରତିରୋଧ\",\"description\":\"ତୁରନ୍ତ ଧୋକା ସନାକ୍ତ ପ୍ରଣାଳୀ ସହିତ ବ୍ୟାଙ୍କ-ଶ୍ରେଣୀର ସୁରକ୍ଷା\"}}}"));}),
"[project]/public/locales/pa/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-ਸੰਚਾਲਿਤ ਡਿਜਿਟਲ ਉਧਾਰ ਪਲੇਟਫਾਰਮ\",\"subtitle\":\"12 ਉਧਾਰ ਖੇਤਰਾਂ ਵਿੱਚ ਉਧਾਰਕਰਤਾਵਾਂ ਨੂੰ ਸਹੀ ਉਧਾਰਦਾਤਾਵਾਂ ਨਾਲ ਜੋੜਨਾ। ਤੁਰੰਤ ਮਨਜ਼ੂਰੀਆਂ, ਪ੍ਰਤਿਯੋਗੀ ਦਰਾਂ ਅਤੇ ਸੁਚਾਰੂ ਡਿਜਿਟਲ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦਾ ਅਨੁਭਵ ਕਰੋ।\",\"apply_now\":\"ਉਧਾਰ ਲਈ ਅਰਜ਼ੀ ਦਿਓ\",\"login_dashboard\":\"ਡੈਸ਼ਬੋਰਡ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ\",\"loan_sectors\":\"12 ਵਿਆਪਕ ਉਧਾਰ ਖੇਤਰ\",\"loan_sectors_desc\":\"ਨਿੱਜੀ ਲੋੜਾਂ ਤੋਂ ਲੈ ਕੇ ਵਪਾਰਕ ਵਿਕਾਸ ਤੱਕ, ਅਸੀਂ ਹਰ ਵਿੱਤੀ ਲੋੜ ਨੂੰ ਖੁਦ ਦੇ ਹੱਲਾਂ ਅਤੇ ਪ੍ਰਤਿਯੋਗੀ ਦਰਾਂ ਨਾਲ ਪੂਰਾ ਕਰਦੇ ਹਾਂ।\",\"why_choose\":\"ਫਿਨ-ਐਜੰਟਿਕਸ ਇੰਡੀਆ ਕਿਉਂ ਚੁਣੋ?\",\"why_choose_desc\":\"ਭਾਰਤ ਵਿੱਚ ਉਧਾਰਦਾਤੀ ਨੂੰ ਬਦਲਣ ਲਈ ਅਤਿਆਧੁਨਿਕ ਤਕਨੀਕ ਅਤੇ ਡੂੰਘੀ ਬਾਜ਼ਾਰ ਅੰਦਰੂਨੀ ਜਾਣਕਾਰੀ ਨੂੰ ਵਰਤਣਾ।\",\"ready_to_start\":\"ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?\",\"ready_to_start_desc\":\"ਉਹਨਾਂ ਲੱਖਾਂ ਸੰਤੁਸ਼ਟ ਗਾਹਕਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ ਜੋ ਆਪਣੀਆਂ ਵਿੱਤੀ ਲੋੜਾਂ ਲਈ ਫਿਨ-ਐਜੰਟਿਕਸ ਉੱਤੇ ਭਰੋਸਾ ਕਰਦੇ ਹਨ। ਹੁਣੇ ਅਰਜ਼ੀ ਦਿਓ ਅਤੇ ਤੁਰੰਤ ਮਨਜ਼ੂਰੀ ਪ੍ਰਾਪਤ ਕਰੋ!\",\"start_application\":\"ਆਪਣੀ ਅਰਜ਼ੀ ਸ਼ੁਰੂ ਕਰੋ\",\"explore_loans\":\"ਸਾਰੇ ਉਧਾਰਾਂ ਦੀ ਖੋਜ ਕਰੋ\"},\"navigation\":{\"home\":\"ਘਰ\",\"all_loans\":\"ਸਾਰੇ ਉਧਾਰ\",\"emi_calculator\":\"EMI ਕੈਲਕੁਲੇਟਰ\",\"about\":\"ਬਾਰੇ\",\"contact\":\"ਸੰਪਰਕ\",\"dashboard\":\"ਡੈਸ਼ਬੋਰਡ\",\"apply_for_loan\":\"ਉਧਾਰ ਲਈ ਅਰਜ਼ੀ ਦਿਓ\",\"my_applications\":\"ਮੇਰੀਆਂ ਅਰਜ਼ੀਆਂ\",\"kyc_verification\":\"KYC ਤਸਦੀਕ\",\"profile\":\"ਪ੍ਰੋਫਾਈਲ\",\"admin_dashboard\":\"ਐਡਮਿਨ ਡੈਸ਼ਬੋਰਡ\",\"applications\":\"ਅਰਜ਼ੀਆਂ\",\"users\":\"ਵਰਤੋਂਕਾਰ\",\"analytics\":\"ਐਨਲਿਟਿਕਸ\",\"reports\":\"ਰਿਪੋਰਟਾਂ\",\"admin_profile\":\"ਐਡਮਿਨ ਪ੍ਰੋਫਾਈਲ\",\"setup\":\"ਸੈਟਅੱਪ\",\"login\":\"ਲਾਗਇਨ\",\"apply_now\":\"ਹੁਣੇ ਅਰਜ਼ੀ ਦਿਓ\",\"profile_settings\":\"ਪ੍ਰੋਫਾਈਲ ਸੈਟਿੰਗਾਂ\",\"sign_out\":\"ਸਾਈਨ ਆਊਟ\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"ਨਿੱਜੀ ਉਧਾਰ\",\"description\":\"ਘੱਟ ਦਸਤਾਵੇਜ਼ਾਂ ਨਾਲ ਤੁਰੰਤ ਨਿੱਜੀ ਉਧਾਰ\",\"features\":[\"ਕੋਈ ਧਿਰਵਣ ਨਹੀਂ\",\"ਤੁਰੰਤ ਮਨਜ਼ੂਰੀ\",\"ਲਚੀਲੀ ਮਿਆਦ\"]},\"home\":{\"name\":\"ਘਰੇਲੂ ਉਧਾਰ\",\"description\":\"ਰਹਿਵਾਸੀ ਸੰਪਤੀ ਖਰੀਦਣ ਲਈ ਘਰੇਲੂ ਉਧਾਰ\",\"features\":[\"ਟੈਕਸ ਲਾਭ\",\"ਲੰਬੀ ਮਿਆਦ\",\"RERA ਤਸਦੀਕ\"]},\"vehicle\":{\"name\":\"ਵਾਹਨ ਉਧਾਰ\",\"description\":\"ਪ੍ਰਤਿਯੋਗੀ ਦਰਾਂ ਨਾਲ ਕਾਰ ਅਤੇ ਦੋ-ਪਹੀਏ ਵਾਲੇ ਵਾਹਨ ਉਧਾਰ\",\"features\":[\"ਤੁਰੰਤ ਮਨਜ਼ੂਰੀ\",\"ਸਿਫ਼ਰ ਡਾਊਨ ਭੁਗਤਾਨ\",\"ਬੀਮਾ\"]},\"business\":{\"name\":\"ਵਪਾਰਕ ਉਧਾਰ\",\"description\":\"MSME ਲਈ ਕਾਰਜਧਾਰਾ ਅਤੇ ਵਿਸਤਾਰ ਉਧਾਰ\",\"features\":[\"GST ਆਧਾਰਿਤ\",\"ਤੁਰੰਤ ਭੁਗਤਾਨ\",\"ਲਚੀਲੀ ਵਾਪਸੀ\"]},\"education\":{\"name\":\"ਸਿੱਖਿਆ ਉਧਾਰ\",\"description\":\"ਭਾਰਤ ਅਤੇ ਵਿਦੇਸ਼ਾਂ ਵਿੱਚ ਉੱਚ ਸਿੱਖਿਆ ਲਈ ਸਿੱਖਿਆ ਉਧਾਰ\",\"features\":[\"ਮੋਰੇਟੋਰੀਅਮ ਮਿਆਦ\",\"ਪੂਰੀ ਕਵਰੇਜ\",\"ਟੈਕਸ ਲਾਭ\"]},\"agriculture\":{\"name\":\"ਖੇਤੀਬਾੜੀ ਉਧਾਰ\",\"description\":\"ਕਿਸਾਨਾਂ ਲਈ ਵਿਆਪਕ ਖੇਤੀਬਾੜੀ ਉਧਾਰ\",\"features\":[\"ਮੌਸਮ ਬੀਮਾ\",\"ਲਚੀਲੀ ਵਾਪਸੀ\",\"ਸਬਸਿਡੀ\"]},\"gold\":{\"name\":\"ਸੋਨੇ ਦੇ ਉਧਾਰ\",\"description\":\"ਸੋਨੇ ਦੇ ਜੇਵਰਾਂ ਦੇ ਖਿਲਾਫ ਤੁਰੰਤ ਉਧਾਰ\",\"features\":[\"ਤੁਰੰਤ ਮਨਜ਼ੂਰੀ\",\"ਸੁਰੱਖਿਅਤ ਭੰਡਾਰਣ\",\"ਲਚੀਲਾ\"]},\"credit-card\":{\"name\":\"ਕ੍ਰੈਡਿਟ ਕਾਰਡ\",\"description\":\"ਖਾਸ ਇਨਾਮਾਂ ਨਾਲ ਪ੍ਰੀਮੀਅਮ ਕ੍ਰੈਡਿਟ ਕਾਰਡ\",\"features\":[\"ਇਨਾਮ ਅੰਕ\",\"ਲਾਊਂਜ ਪਹੁੰਚ\",\"ਕੈਸ਼ਬੈਕ\"]},\"two-wheeler\":{\"name\":\"ਦੋ ਪਹੀਏ ਵਾਲਾ\",\"description\":\"ਦੋ-ਪਹੀਏ ਵਾਲੇ ਵਾਹਨ ਦੀ ਖਰੀਦ ਲਈ ਤੁਰੰਤ ਉਧਾਰ\",\"features\":[\"ਘੱਟ ਡਾਕਸ\",\"ਉਸੇ ਦਿਨ\",\"ਬੀਮਾ\"]},\"healthcare\":{\"name\":\"ਸਿਹਤ ਉਧਾਰ\",\"description\":\"ਵੈਦਿਕ ਖਰਚਿਆਂ ਲਈ ਐਮਰਜੈਂਸੀ ਉਧਾਰ\",\"features\":[\"ਹਸਪਤਾਲ ਨੈੱਟਵਰਕ\",\"ਤੁਰੰਤ ਮਨਜ਼ੂਰੀ\",\"EMI ਮੋਰੇਟੋਰੀਅਮ\"]},\"digital\":{\"name\":\"ਡਿਜਿਟਲ ਉਧਾਰ\",\"description\":\"ਤੁਰੰਤ ਮਨਜ਼ੂਰੀ ਨਾਲ ਪੂਰੀ ਤਰ੍ਹਾਂ ਡਿਜਿਟਲ ਉਧਾਰ\",\"features\":[\"100% ਡਿਜਿਟਲ\",\"ਤੁਰੰਤ ਭੁਗਤਾਨ\",\"ਲਚੀਲਾ\"]},\"microfinance\":{\"name\":\"ਮਾਈਕਰੋਫਾਈਨੈਂਸ\",\"description\":\"ਛੋਟੇ ਵਪਾਰ ਸ਼ੁਰੂਆਤ ਅਤੇ ਆਮਦਨ ਪੈਦਾਵਾਰ\",\"features\":[\"ਗਰੁੱਪ ਉਧਾਰ\",\"ਵਿੱਤੀ ਸਾਖਰ\",\"ਸੌਖੀ ਪਹੁੰਚ\"]}},\"stats\":{\"loans_disbursed\":\"ਉਧਾਰ ਭੁਗਤਾਨ\",\"happy_customers\":\"ਖੁਸ਼ ਗਾਹਕ\",\"approval_rate\":\"ਮਨਜ਼ੂਰੀ ਦਰ\",\"cities_covered\":\"ਸ਼ਹਿਰ ਸ਼ਾਮਲ\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-ਸੰਚਾਲਿਤ ਕ੍ਰੈਡਿਟ ਸਕੋਰਿੰਗ\",\"description\":\"ਉੱਨਤ ਐਲਗੋਰਿਦਮ 500+ ਡੇਟਾ ਪੁਆਇੰਟਾਂ ਨੂੰ ਤੁਰੰਤ ਕ੍ਰੈਡਿਟ ਫੈਸਲਿਆਂ ਲਈ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦੇ ਹਨ\"},\"hour_processing\":{\"title\":\"24-ਘੰਟੇ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ\",\"description\":\"ਜ਼ਿਆਦਾਤਰ ਉਧਾਰ ਪ੍ਰਕਾਰਾਂ ਲਈ ਸਿਰਫ 24 ਘੰਟਿਆਂ ਵਿੱਚ ਅਰਜ਼ੀ ਤੋਂ ਭੁਗਤਾਨ ਤੱਕ\"},\"government_integration\":{\"title\":\"ਸਰਕਾਰੀ ਏਕੀਕਰਣ\",\"description\":\"ਸੁਚਾਰੂ ਤਸਦੀਕ ਲਈ ਆਧਾਰ, PAN, GST ਨਾਲ ਸਿੱਧਾ ਏਕੀਕਰਣ\"},\"multi_language\":{\"title\":\"ਬਹੁ-ਭਾਸ਼ਾ ਸਮਰਥਨ\",\"description\":\"ਗ੍ਰਾਮੀਣ ਪਹੁੰਚ ਲਈ ਹਿੰਦੀ ਅਤੇ 11 ਖੇਤਰੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲਬਧ\"},\"competitive_rates\":{\"title\":\"ਪ੍ਰਤਿਯੋਗੀ ਦਰਾਂ\",\"description\":\"ਸਾਰੇ 12 ਉਧਾਰ ਖੇਤਰਾਂ ਵਿੱਚ ਸਭ ਤੋਂ ਵਧੀਆ ਬਾਜ਼ਾਰ ਵਿਆਜ ਦਰਾਂ\"},\"fraud_prevention\":{\"title\":\"ਧੋਖਾਧੜੀ ਰੋਕਥਾਮ\",\"description\":\"ਰਿਅਲ-ਟਾਈਮ ਧੋਖਾਧੜੀ ਖੋਜ ਸਿਸਟਮਾਂ ਨਾਲ ਬੈਂਕ-ਗ੍ਰੇਡ ਸੁਰੱਖਿਆ\"}}}"));}),
"[project]/public/locales/mr/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-चालित डिजिटल कर्ज प्लॅटफॉर्म\",\"subtitle\":\"12 कर्ज क्षेत्रांमध्ये कर्ज घेणाऱ्यांना योग्य कर्जदात्यांशी जोडणे. तात्काळ मंजूरी, स्पर्धात्मक दर आणि सुगम डिजिटल प्रक्रियांचा अनुभव घ्या.\",\"apply_now\":\"कर्जासाठी अर्ज करा\",\"login_dashboard\":\"डॅशबोर्डवर लॉग इन करा\",\"loan_sectors\":\"12 विस्तृत कर्ज क्षेत्रे\",\"loan_sectors_desc\":\"वैयक्तिक गरजा ते व्यवसाय वाढ पर्यंत, आम्ही प्रत्येक आर्थिक आवश्यकता वैयक्तिकृत उपाय आणि स्पर्धात्मक दरांसह कव्हर करतो.\",\"why_choose\":\"मी फिन-एजंटिक्स इंडिया का निवडायचे?\",\"why_choose_desc\":\"भारतात कर्जदारी क्रांतिकरणासाठी अत्याधुनिक तंत्रज्ञान आणि खोल बाजार अंतर्दृष्टीचा वापर करणे.\",\"ready_to_start\":\"सुरू करण्यासाठी तयार आहात?\",\"ready_to_start_desc\":\"त्यांच्या आर्थिक गरजांसाठी फिन-एजंटिक्सवर विश्वास ठेवणारे दशलक्ष निराळे ग्राहक येथे सामील व्हा. आता अर्ज करा आणि तात्काळ मंजूरी मिळवा!\",\"start_application\":\"तुमचा अर्ज सुरू करा\",\"explore_loans\":\"सर्व कर्जांचा शोध घ्या\"},\"navigation\":{\"home\":\"होम\",\"all_loans\":\"सर्व कर्जे\",\"emi_calculator\":\"EMI कॅलक्युलेटर\",\"about\":\"आमच्याबद्दल\",\"contact\":\"संपर्क साधा\",\"dashboard\":\"डॅशबोर्ड\",\"apply_for_loan\":\"कर्जासाठी अर्ज करा\",\"my_applications\":\"माझे अर्ज\",\"kyc_verification\":\"KYC सत्यापन\",\"profile\":\"प्रोफाइल\",\"admin_dashboard\":\"प्रशासक डॅशबोर्ड\",\"applications\":\"अर्ज\",\"users\":\"वापरकर्ते\",\"analytics\":\"विश्लेषण\",\"reports\":\"अहवाल\",\"admin_profile\":\"प्रशासक प्रोफाइल\",\"setup\":\"सेटअप\",\"login\":\"लॉग इन करा\",\"apply_now\":\"आता अर्ज करा\",\"profile_settings\":\"प्रोफाइल सेटिंग्ज\",\"sign_out\":\"साइन आउट करा\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"वैयक्तिक कर्जे\",\"description\":\"किमान दस्तऐवजीकरणासह जलद वैयक्तिक कर्जे\",\"features\":[\"काहीही गिरवी नाही\",\"जलद मंजूरी\",\"लवचिक कालावधी\"]},\"home\":{\"name\":\"गृह कर्जे\",\"description\":\"रहिवासीय मालमत्ता खरेदीसाठी गृह कर्ज\",\"features\":[\"कर फायदे\",\"दीर्घ कालावधी\",\"RERA सत्यापित\"]},\"vehicle\":{\"name\":\"वाहन कर्जे\",\"description\":\"स्पर्धात्मक दरांसह कार आणि दुचाकी कर्जे\",\"features\":[\"तात्काळ मंजूरी\",\"शून्य डाउन पेमेंट\",\"विमा\"]},\"business\":{\"name\":\"व्यवसाय कर्जे\",\"description\":\"MSME साठी कार्यरत मूलभूत भांडवल आणि विस्तार कर्जे\",\"features\":[\"GST आधारित\",\"जलद वितरण\",\"लवचिक पुनर्पेमेंट\"]},\"education\":{\"name\":\"शिक्षण कर्जे\",\"description\":\"भारत आणि परदेशात उच्च शिक्षणासाठी शिक्षण कर्ज\",\"features\":[\"मोरेटोरियम कालावधी\",\"संपूर्ण कव्हरेज\",\"कर फायदे\"]},\"agriculture\":{\"name\":\"कृषी कर्जे\",\"description\":\"शेतकऱ्यांसाठी विस्तृत कृषी कर्जे\",\"features\":[\"हवामान विमा\",\"लवचिक पुनर्पेमेंट\",\"अनुदान\"]},\"gold\":{\"name\":\"सोन्याचे कर्जे\",\"description\":\"सोन्याच्या आभूषणांविरुद्ध तात्काळ कर्ज\",\"features\":[\"तात्काळ मंजूरी\",\"सुरक्षित साठवण\",\"लवचिक\"]},\"credit-card\":{\"name\":\"क्रेडिट कार्डे\",\"description\":\"विशेष बक्षिसांसह प्रीमियम क्रेडिट कार्डे\",\"features\":[\"बक्षिस गुण\",\"लाऊंज प्रवेश\",\"कॅशबॅक\"]},\"two-wheeler\":{\"name\":\"दुचाकी\",\"description\":\"दुचाकी खरेदीसाठी जलद कर्ज\",\"features\":[\"किमान दस्तऐवज\",\"त्याच दिवशी\",\"विमा\"]},\"healthcare\":{\"name\":\"आरोग्य कर्जे\",\"description\":\"तात्काळ कर्ज वैद्यकीय खर्चासाठी\",\"features\":[\"हॉस्पिटल नेटवर्क\",\"जलद मंजूरी\",\"EMI मोरेटोरियम\"]},\"digital\":{\"name\":\"डिजिटल कर्जे\",\"description\":\"तात्काळ मंजूरीसह पूर्णपणे डिजिटल कर्ज\",\"features\":[\"100% डिजिटल\",\"तात्काळ वितरण\",\"लवचिक\"]},\"microfinance\":{\"name\":\"माइक्रोफायनन्स\",\"description\":\"लहान व्यवसाय सुरू करणे आणि उत्पन्न निर्माण\",\"features\":[\"गट कर्जदारी\",\"आर्थिक साक्षरता\",\"सोपा प्रवेश\"]}},\"stats\":{\"loans_disbursed\":\"वितरित कर्जे\",\"happy_customers\":\"निराळे ग्राहक\",\"approval_rate\":\"मंजूरी दर\",\"cities_covered\":\"कव्हर केलेली शहरे\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-चालित क्रेडिट स्कोअरिंग\",\"description\":\"तात्काळ क्रेडिट निर्णयांसाठी प्रगत अल्गोरिदम 500+ डेटा बिंदूंचे विश्लेषण करतात\"},\"hour_processing\":{\"title\":\"24-तास प्रक्रिया\",\"description\":\"अधिकांश कर्ज प्रकारांसाठी अर्जापासून वितरणापर्यंत फक्त 24 तासांत\"},\"government_integration\":{\"title\":\"सरकारी एकीकरण\",\"description\":\"सुगम सत्यापनासाठी आधार, PAN, GST शी थेट एकीकरण\"},\"multi_language\":{\"title\":\"बहुभाषिक समर्थन\",\"description\":\"ग्रामीण प्रवेशक्षमतेसाठी हिंदी आणि 11 प्रादेशिक भाषांमध्ये उपलब्ध\"},\"competitive_rates\":{\"title\":\"स्पर्धात्मक दर\",\"description\":\"सर्व 12 कर्ज क्षेत्रांमध्ये मार्केटमध्ये सर्वोत्तम व्याज दर\"},\"fraud_prevention\":{\"title\":\"धोखेबाजी प्रतिबंध\",\"description\":\"तात्काळ धोखेबाजी शोध प्रणालींसह बँक-ग्रेड सुरक्षा\"}}}"));}),
"[project]/public/locales/ur/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"home\":{\"title\":\"AI-چلنے والی ڈیجیٹل قرض دینے کا پلیٹ فارم\",\"subtitle\":\"12 قرض کے شعبوں میں قرض لینے والوں کو صحیح قرض دینے والوں سے جوڑنا۔ فوری منظوری، مقابلہ کرنے والی شرحیں، اور ہموار ڈیجیٹل عمل درآمد کا تجربہ کریں۔\",\"apply_now\":\"قرض کے لیے درخواست دیں\",\"login_dashboard\":\"ڈیش بورڈ میں لاگ ان کریں\",\"loan_sectors\":\"12 جامع قرض کے شعبے\",\"loan_sectors_desc\":\"ذاتی ضروریات سے لے کر کاروباری توسیع تک، ہم ہر مالی ضرورت کو مخصوص حل اور مقابلہ کرنے والی شرحیں فراہم کرتے ہیں۔\",\"why_choose\":\"فائن-ایجنٹکس انڈیا کیوں منتخب کریں؟\",\"why_choose_desc\":\"ہندوستان میں قرض دینے کو انقلابی بنانے کے لیے تیز ترین ٹیکنالوجی اور گہری مارکیٹ کی بصیرت استعمال کرنا۔\",\"ready_to_start\":\"شروع کرنے کے لیے تیار ہیں؟\",\"ready_to_start_desc\":\"ان ملینوں مفتئی صارفین میں شامل ہوں جو اپنی مالی ضروریات کے لیے فائن-ایجنٹکس پر بھروسہ کرتے ہیں۔ ابھی درخواست دیں اور فوری منظوری حاصل کریں!\",\"start_application\":\"اپنا درخواست نامہ شروع کریں\",\"explore_loans\":\"تمام قرضوں کی دریافت کریں\"},\"navigation\":{\"home\":\"ہوم\",\"all_loans\":\"تمام قرض\",\"emi_calculator\":\"EMI کیلکولیٹر\",\"about\":\"ہمارے بارے میں\",\"contact\":\"رابطہ کریں\",\"dashboard\":\"ڈیش بورڈ\",\"apply_for_loan\":\"قرض کے لیے درخواست دیں\",\"my_applications\":\"میرے درخواست نامے\",\"kyc_verification\":\"KYC کی تصدیق\",\"profile\":\"پروفائل\",\"admin_dashboard\":\"ایڈمن ڈیش بورڈ\",\"applications\":\"درخواست نامے\",\"users\":\"صارفین\",\"analytics\":\"تجزیات\",\"reports\":\"رپورٹس\",\"admin_profile\":\"ایڈمن پروفائل\",\"setup\":\"سیٹ اپ\",\"login\":\"لاگ ان\",\"apply_now\":\"ابھی درخواست دیں\",\"profile_settings\":\"پروفائل کی ترتیبات\",\"sign_out\":\"سائن آؤٹ\"},\"languages\":{\"en\":\"English\",\"hi\":\"हिंदी\",\"ta\":\"தமிழ்\",\"te\":\"తెలుగు\",\"ml\":\"മലയാളം\",\"kn\":\"ಕನ್ನಡ\",\"bn\":\"বাংলা\",\"gu\":\"ગુજરાતી\",\"or\":\"ଓଡ଼ିଆ\",\"pa\":\"ਪੰਜਾਬੀ\",\"mr\":\"मराठी\",\"ur\":\"اردو\"},\"loan_sectors\":{\"personal\":{\"name\":\"ذاتی قرض\",\"description\":\"کم دستاویزات کے ساتھ فوری ذاتی قرض\",\"features\":[\"کوئی ضمانت نہیں\",\"فوری منظوری\",\"لچکدار مدت\"]},\"home\":{\"name\":\"ہوم قرض\",\"description\":\"رہائشی جائیداد خریدنے کے لیے ہوم قرض\",\"features\":[\"ٹیکس فوائد\",\"طویل مدت\",\"RERA کی تصدیق\"]},\"vehicle\":{\"name\":\"گاڑی کے قرض\",\"description\":\"مقابلہ کرنے والی شرحیں کے ساتھ کار اور دو پہیہ والی گاڑی کے قرض\",\"features\":[\"فوری منظوری\",\"صفر ڈاؤن پیمنٹ\",\"بیمہ\"]},\"business\":{\"name\":\"کاروباری قرض\",\"description\":\"MSME کے لیے کاروباری رونق اور توسیع کے قرض\",\"features\":[\"GST پر مبنی\",\"فوری ادائیگی\",\"لچکدار واپسی\"]},\"education\":{\"name\":\"تعلیمی قرض\",\"description\":\"ہندوستان اور بیرون ملک اعلی تعلیم کے لیے تعلیمی قرض\",\"features\":[\"وقفہ کی مدت\",\"مکمل کوریج\",\"ٹیکس فوائد\"]},\"agriculture\":{\"name\":\"زراعتی قرض\",\"description\":\"کسانوں کے لیے جامع زراعتی قرض\",\"features\":[\"موسم کا بیمہ\",\"لچکدار واپسی\",\"رعایت\"]},\"gold\":{\"name\":\"سونے کے قرض\",\"description\":\"سونے کے جیوہر کے خلاف فوری قرض\",\"features\":[\"فوری منظوری\",\"محفوظ ذخیرہ\",\"لچکدار\"]},\"credit-card\":{\"name\":\"کریڈٹ کارڈ\",\"description\":\"خصوصی انعامات کے ساتھ پریمیم کریڈٹ کارڈ\",\"features\":[\"انعامی پوائنٹس\",\"لاؤنجز تک رسائی\",\"کیش بیک\"]},\"two-wheeler\":{\"name\":\"دو پہیہ والی گاڑی\",\"description\":\"دو پہیہ والی گاڑی خریدنے کے لیے فوری قرض\",\"features\":[\"کم دستاویزات\",\"اسی دن\",\"بیمہ\"]},\"healthcare\":{\"name\":\"ہیلتھ کیئر قرض\",\"description\":\"طبی اخراجات کے لیے ہنگامی قرض\",\"features\":[\"ہسپتال کا نیٹ ورک\",\"فوری منظوری\",\"EMI وقفہ\"]},\"digital\":{\"name\":\"ڈیجیٹل قرض\",\"description\":\"فوری منظوری کے ساتھ مکمل طور پر ڈیجیٹل قرض\",\"features\":[\"100% ڈیجیٹل\",\"فوری ادائیگی\",\"لچکدار\"]},\"microfinance\":{\"name\":\"میکرو فائننس\",\"description\":\"چھوٹے کاروبار کی شروعات اور آمدنی پیدا کرنا\",\"features\":[\"گروپ لنڈنگ\",\"مالیاتی ساکھرت\",\"آسان رسائی\"]}},\"stats\":{\"loans_disbursed\":\"قرض جاری کیے گئے\",\"happy_customers\":\"مفتئی صارفین\",\"approval_rate\":\"منظوری کی شرح\",\"cities_covered\":\"شہروں کو شامل کیا گیا\"},\"features\":{\"ai_credit_scoring\":{\"title\":\"AI-چلنے والی کریڈٹ اسکورنگ\",\"description\":\"اعلی درجے کے الگورتھم 500+ ڈیٹا پوائنٹس کا تجزیہ فوری کریڈٹ فیصلوں کے لیے کرتے ہیں\"},\"hour_processing\":{\"title\":\"24-گھنٹے کی پروسیسنگ\",\"description\":\"زیادہ تر قرض کی اقسام کے لیے صرف 24 گھنٹوں میں درخواست سے لے کر ادائیگی تک\"},\"government_integration\":{\"title\":\"حکومتی انضمام\",\"description\":\"ہموار تصدیق کے لیے آدھار، PAN، GST کے ساتھ براہ راست انضمام\"},\"multi_language\":{\"title\":\"کثیر لسانی معاونت\",\"description\":\"دیہی رسائی کے لیے ہندی اور 11 علاقائی زبانوں میں دستیاب\"},\"competitive_rates\":{\"title\":\"مقابلہ کرنے والی شرحیں\",\"description\":\"تمام 12 قرض کے شعبوں میں بہترین مارکیٹ کی سود کی شرحیں\"},\"fraud_prevention\":{\"title\":\"دھوکہ دہی کی روک تھام\",\"description\":\"حقیقی وقت کی دھوکہ دہی کی شناخت کے نظاموں کے ساتھ بینک درجے کی حفاظت\"}}}"));}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)");
// Import translation files using relative paths
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$en$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/en/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$hi$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/hi/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ta$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/ta/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$te$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/te/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ml$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/ml/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$kn$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/kn/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$bn$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/bn/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$gu$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/gu/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$or$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/or/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$pa$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/pa/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$mr$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/mr/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ur$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/ur/common.json (json)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const resources = {
    en: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$en$2f$common$2e$json__$28$json$29$__["default"]
    },
    hi: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$hi$2f$common$2e$json__$28$json$29$__["default"]
    },
    ta: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ta$2f$common$2e$json__$28$json$29$__["default"]
    },
    te: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$te$2f$common$2e$json__$28$json$29$__["default"]
    },
    ml: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ml$2f$common$2e$json__$28$json$29$__["default"]
    },
    kn: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$kn$2f$common$2e$json__$28$json$29$__["default"]
    },
    bn: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$bn$2f$common$2e$json__$28$json$29$__["default"]
    },
    gu: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$gu$2f$common$2e$json__$28$json$29$__["default"]
    },
    or: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$or$2f$common$2e$json__$28$json$29$__["default"]
    },
    pa: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$pa$2f$common$2e$json__$28$json$29$__["default"]
    },
    mr: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$mr$2f$common$2e$json__$28$json$29$__["default"]
    },
    ur: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ur$2f$common$2e$json__$28$json$29$__["default"]
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
    resources,
    fallbackLng: 'en',
    debug: ("TURBOPACK compile-time value", "development") === 'development',
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: [
            'querystring',
            'cookie',
            'localStorage',
            'navigator',
            'htmlTag'
        ],
        caches: [
            'cookie'
        ]
    },
    react: {
        useSuspense: false
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/I18nProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>I18nProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/I18nextProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function I18nProvider(param) {
    let { children } = param;
    _s();
    // Initialize i18n
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            // Check for saved language preference in localStorage
            const savedLanguage = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('selectedLanguage') : "TURBOPACK unreachable";
            if (savedLanguage && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasResourceBundle(savedLanguage, 'common')) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].changeLanguage(savedLanguage);
            }
        }
    }["I18nProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nextProvider"], {
        i18n: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/I18nProvider.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(I18nProvider, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = I18nProvider;
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_614d153d._.js.map