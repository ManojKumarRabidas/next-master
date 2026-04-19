// auth.config.ts
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard") ||
                nextUrl.pathname.startsWith("/profile");

            if (isProtectedRoute) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated profile to login page
            }
            return true;
        },
    },
    providers: [], // We leave this empty here
} satisfies NextAuthConfig;