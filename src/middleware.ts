import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const publicPaths = [
  "/",
  "/login",
  "/register",
  "/admin/setup",
  "/api/auth/register",
  "/api/admin/setup",
  "/api/marketplace/offers",  // Make marketplace offers publicly accessible
  "/locales"  // Allow access to translation files
];

export default withAuth(
  function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;

    console.log("[MIDDLEWARE] Processing request for path:", path);
    console.log("[MIDDLEWARE] Token present:", !!token);

    // Allow public paths and static assets
    if (publicPaths.includes(path) || 
        path.startsWith("/_next") || 
        path.startsWith("/api/auth") ||
        path.startsWith("/api/marketplace/offers") ||
        path.startsWith("/locales")) {
      console.log("[MIDDLEWARE] Allowing public path");
      return NextResponse.next();
    }

    // Special case for admin setup
    if (path === "/admin/setup" || path === "/api/admin/setup") {
      console.log("[MIDDLEWARE] Allowing admin setup path");
      return NextResponse.next();
    }

    // If no token and not on a public path, redirect to login
    if (!token) {
      console.log("[MIDDLEWARE] No token, redirecting to login");
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(loginUrl);
    }

    // Protected admin routes (except setup)
    if (path.startsWith("/admin") && path !== "/admin/setup" && token?.role !== "ADMIN") {
      console.log("[MIDDLEWARE] Admin route access denied");
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Allow access for authenticated users
    console.log("[MIDDLEWARE] Allowing authenticated access");
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const path = req.nextUrl.pathname;
        console.log("[MIDDLEWARE_AUTH] Checking authorization for path:", path);
        console.log("[MIDDLEWARE_AUTH] Token present:", !!token);
        
        // Allow public paths without authentication
        if (publicPaths.includes(path) || 
            path.startsWith("/_next") || 
            path.startsWith("/api/auth") ||
            path.startsWith("/api/marketplace/offers") ||
            path.startsWith("/locales")) {
          console.log("[MIDDLEWARE_AUTH] Public path, authorized");
          return true;
        }
        
        // Require authentication for all other routes
        const isAuthorized = !!token;
        console.log("[MIDDLEWARE_AUTH] Protected path, authorized:", isAuthorized);
        return isAuthorized;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};