// app/users/page.tsx
import { userService } from "@/services/userService";
import Link from "next/link";
import EditUserModal from "./EditUserModal";
import DeleteUserButton from "./DeleteUserButton";

export default async function UsersPage() {
    // We fetch the data directly on the server!
    const users = await userService.getAllUsers();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">User Management</h1>
                <Link href="/users/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    + Add User
                </Link>
            </div>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Code</th>
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold">Email</th>
                            <th className="p-4 font-semibold">Status</th>
                            <th className="p-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.code} className="border-b last:border-0 hover:bg-gray-50 transition">
                                <td className="p-4">{user.code}</td>
                                <td className="p-4 font-medium">{user.name}</td>
                                <td className="p-4 text-gray-600">{user.email}</td>
                                <td className="p-4">
                                    {user.isActive ? (
                                        <span className="text-green-700 bg-green-100 px-2 py-1 rounded text-xs font-bold">Active</span>
                                    ) : (
                                        <span className="text-red-700 bg-red-100 px-2 py-1 rounded text-xs font-bold">Inactive</span>
                                    )}
                                </td>
                                <td className="p-4 space-x-2">
                                    <EditUserModal user={user} />
                                    <DeleteUserButton _id={user._id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}