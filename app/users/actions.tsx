'use server' // This directive tells Next.js this file runs ONLY on the server

import { userService } from "@/services/userService";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUserAction(formData: FormData) {
    // 1. Extract data from the form
    const rawData = {
        code: formData.get("code") as string,
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        password: formData.get("phone") as string,
        isActive: true,
    };

    // 2. Call our service layer to save to MongoDB
    await userService.createUser(rawData);

    // 3. Clear the cache for the users page so the new user shows up immediately
    revalidatePath("/users");

    // 4. Send the user back to the list
    redirect("/users");
}

export async function deleteUserAction(_id: string) {
    // Call the service to remove the user
    await userService.deleteUser(_id);

    // Tell Next.js to refresh the user list data
    revalidatePath("/users");
}

export async function updateUserAction(formData: FormData) {
    const _id = formData.get("_id") as string;

    const updatedData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
    };

    await userService.updateUser(_id, updatedData); // We'll add this to the service

    revalidatePath("/users");
}