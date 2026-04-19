// 'use client';

// import { useState } from 'react';
// import { IUser } from '@/models/User';

// // We pass the user data as a "prop" from the Server Page to this Client Modal
// export default function EditUserModal({ user }: { user: IUser }) {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             <button onClick={() => setIsOpen(true)} className="text-blue-600 hover:underline font-medium">Edit</button>

//             {isOpen && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                     <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
//                         <h2 className="text-xl font-bold mb-4">Edit User: {user.name}</h2>

//                         {/* Form logic will go here */}

//                         <button onClick={() => setIsOpen(false)} className="mt-4 text-gray-500 underline">Cancel</button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

'use client';

import { useState } from 'react';
import { IUser } from '@/models/User';
import { updateUserAction } from './actions'; // Ensure the path matches your actions file

export default function EditUserModal({ user }: { user: IUser }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-blue-600 hover:underline font-medium"
            >
                Edit
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Edit User: {user.name}</h2>

                        {/* 1. We link the form to the Server Action */}
                        {/* 2. We close the modal when the user clicks save */}
                        <form
                            action={updateUserAction}
                            onSubmit={() => setIsOpen(false)}
                            className="space-y-4"
                        >
                            <input type="hidden" name="_id" value={user._id} />
                            <div>
                                <label className="block text-sm font-medium">Code : {user.code}</label>

                            </div>

                            <div>
                                <label className="block text-sm font-medium">Full Name</label>
                                <input
                                    name="name"
                                    defaultValue={user.name}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Email Address</label>
                                <input
                                    name="email"
                                    defaultValue={user.email}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Phone</label>
                                <input
                                    name="phone"
                                    defaultValue={user.phone}
                                    className="w-full p-2 border rounded"
                                />
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-bold"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 border py-2 rounded-lg text-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}