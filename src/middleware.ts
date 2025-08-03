import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // protect all routes except static files
    "/",                          // homepage
    "/api/(.*)",                  // API routes
  ],
};