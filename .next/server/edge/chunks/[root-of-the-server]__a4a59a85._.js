(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__a4a59a85._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'path', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`path`));
}),
"[project]/next-i18next.config.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

const path = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'path', ecmascript)");
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: [
            'en',
            'hi',
            'ta',
            'te',
            'ml',
            'kn',
            'bn',
            'gu',
            'or',
            'pa',
            'mr',
            'ur'
        ]
    },
    localePath: path.resolve('./public/locales'),
    reloadOnPrerender: ("TURBOPACK compile-time value", "development") === 'development'
};
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$i18next$2e$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-i18next.config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/accept-language/Build/Source/AcceptLanguage.js [middleware-edge] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].languages(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$i18next$2e$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].locales);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["withAuth"])(function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;
    // Allow public paths and static assets
    if (path.startsWith("/_next") || path.startsWith("/api/auth")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // If no token and not on a public path, redirect to login
    if (!token && path.startsWith("/admin")) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", req.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    // Protected admin routes (except setup)
    if (path.startsWith("/admin") && token?.role !== "ADMIN") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/dashboard", req.url));
    }
    // Allow access for authenticated users
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}, {
    callbacks: {
        authorized: ({ req, token })=>{
            const path = req.nextUrl.pathname;
            // Allow public paths without authentication
            if (path.startsWith("/_next") || path.startsWith("/api/auth")) {
                return true;
            }
            // Require authentication for admin routes
            if (path.startsWith("/admin")) {
                return !!token && token.role === "ADMIN";
            }
            // Allow all other routes
            return true;
        }
    }
});
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api/auth routes (handled by NextAuth)
     */ "/((?!_next/static|_next/image|favicon.ico|public/|api/auth).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__a4a59a85._.js.map