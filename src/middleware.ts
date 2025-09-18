import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const publicPaths = [
  "/",
  "/login",
  "/register",
  "/admin/setup",
  "/api/auth/register",
  "/api/admin/setup"
];

export default withAuth(
  function middleware(req) {
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;

    // Allow public paths and static assets
    if (publicPaths.includes(path) || 
        path.startsWith("/_next") || 
        path.startsWith("/api/auth")) {
      return NextResponse.next();
    }

    // Special case for admin setup
    if (path === "/admin/setup" || path === "/api/admin/setup") {
      return NextResponse.next();
    }

    // If no token and not on a public path, redirect to login
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(loginUrl);
    }

    // Protected admin routes (except setup)
    if (path.startsWith("/admin") && path !== "/admin/setup" && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Allow access for authenticated users
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const path = req.nextUrl.pathname;
        // Allow public paths without authentication
        if (publicPaths.includes(path) || 
            path.startsWith("/_next") || 
            path.startsWith("/api/auth")) {
          return true;
        }
        // Require authentication for all other routes
        return !!token;
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