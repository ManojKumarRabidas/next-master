// app/profile/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();

    // Guard: If someone sneaks past middleware, this is our second line of defense
    if (!session?.user) {
        redirect("/login");
    }

    const { user } = session;

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header/Banner Area */}
                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                <div className="px-8 pb-8">
                    <div className="relative -mt-12 mb-6">
                        <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl font-bold text-blue-600 border-4 border-white">
                            {user.name?.charAt(0).toUpperCase()}
                        </div>
                    </div>

                    <h1 className="text-3xl font-extrabold text-gray-900">{user.name}</h1>
                    <p className="text-gray-500 mb-6">Verified System User</p>

                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</span>
                            <p className="text-gray-700 font-medium">{user.email}</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">User ID</span>
                            <p className="text-gray-700 font-mono text-sm">{user.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}