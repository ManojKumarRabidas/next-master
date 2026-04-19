"use client"
import { useActionState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="w-full max-w-md p-8 bg-white border rounded-2xl shadow-xl">
                <h1 className="text-3xl font-extrabold text-center mb-6">Welcome Back</h1>

                <form action={loginAction} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="name@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Password (Phone Number)</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}