import { createUserAction } from "../actions";
import Link from "next/link";

export default function AddUserPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Add New User</h1>
                <Link href="/users" className="text-gray-500 hover:underline">← Back to List</Link>
            </div>

            <form action={createUserAction} className="bg-white p-8 border rounded-xl shadow-sm space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">User Code</label>
                    <input name="code" type="text" placeholder="e.g. USR-001" required className="w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input name="name" type="text" placeholder="John Doe" required className="w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input name="email" type="email" placeholder="john@example.com" required className="w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input name="phone" type="text" placeholder="+1 234 567 890" required className="w-full p-2 border rounded-md" />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Save User
                </button>
            </form>
        </div>
    );
}