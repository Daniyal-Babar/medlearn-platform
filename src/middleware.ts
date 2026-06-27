import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    // 1. Detect if Next.js is attempting a client-side background fetch for RSC data
    const isRscRequest = req.headers.get("Rsc") === "1" || req.headers.get("Next-Url") !== null;

    // 2. If it's a background fetch and the user isn't authenticated, short-circuit
    // with a 401 instead of letting Clerk issue a CORS-breaking 307 redirect.
    if (isRscRequest && !(await auth()).userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 3. Otherwise, apply normal Clerk route protection
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};