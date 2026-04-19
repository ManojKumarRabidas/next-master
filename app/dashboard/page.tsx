// app/dashboard/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth();

    // 1. Protection Gatekeeper
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">User Dashboard</h1>
            <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl">
                <p className="text-lg">Welcome back, <span className="font-bold">{session.user?.name}</span>!</p>
                <p className="text-gray-600">Email: {session.user?.email}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <h2 className="font-bold mb-2">Account Security</h2>
                    <p className="text-sm text-gray-500">Your session is secured with an HttpOnly cookie.</p>
                </div>
            </div>
        </div>
    );
}