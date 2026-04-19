'use client'; // This makes it a Client Component

import { deleteUserAction } from './actions';

export default function DeleteUserButton({ _id }: { _id: string }) {
    const handleDelete = async () => {
        if (window.confirm("Are you sure?")) {
            await deleteUserAction(_id);
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="text-red-600 hover:underline"
        >
            Delete
        </button>
    );
}