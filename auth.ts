// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { userService } from "@/services/userService";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await userService.findUserByEmail(credentials.email as string);
                if (user && user.isActive) {
                    // Compare the entered password with the hashed password from DB
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password as string,
                        user.password // The hashed version
                    );

                    if (isPasswordCorrect) {
                        return { id: user._id, name: user.name, email: user.email };
                    }
                }
                return null;
            },
        }),
    ],
});