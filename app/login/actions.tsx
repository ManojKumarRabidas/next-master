// app/login/actions.ts
'use server';

import { signIn } from "@/auth";

export async function loginAction(formData: FormData) {
    try {
        // This calls the 'authorize' function we wrote in auth.ts
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/dashboard", // Where to go after a successful login
        });
    } catch (error) {
        if (error instanceof Error) {
            // We check the specific error message from Auth.js
            if (error.message === "CredentialsSignin") {
                return "Invalid email or password. Please try again.";
            }
            return "Something went wrong. Please try again later.";
        }

        // IMPORTANT: Re-throw the error if it's not an AuthError
        // This allows Next.js to handle the redirect properly
        throw error; // Essential for Next.js redirects to work
    }
}