import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Match all routes except static files and _next
    '/',                      // Include root route
    '/(api|trpc)(.*)'         // Include API and tRPC routes
  ],
};