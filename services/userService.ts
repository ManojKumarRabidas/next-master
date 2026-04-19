import connectDB from "@/lib/mongodb";
import User, { IUser } from "@/models/User";
import bcrypt from "bcryptjs";

export const userService = {
    // services/userService.ts

    async getAllUsers() {
        try {
            await connectDB();
            const users = await User.find({}).lean();

            // We "clean" the data so it's a plain object for the browser
            return users.map(user => ({
                ...user,
                _id: user._id.toString(), // Convert ObjectID to String
                createdAt: user.createdAt?.toISOString(), // Convert Date to String
                updatedAt: user.updatedAt?.toISOString(), // Convert Date to String
            }));
        } catch (error) {
            console.error("Failed to fetch users:", error);
            return [];
        }
    },

    async createUser(data: IUser) {
        try {
            await connectDB();

            // 1. Generate a "Salt" (random noise added to the hash)
            const salt = await bcrypt.genSalt(10);

            // 2. Hash the phone number to create the password
            const hashedPassword = await bcrypt.hash(data.phone, salt);

            // 3. Create the user with the new password field
            const newUser = new User({
                ...data,
                password: hashedPassword
            });

            return await newUser.save();
        } catch (error) {
            console.error("Failed to create user:", error);
            throw error;
        }
    },

    async deleteUser(_id: string) {
        try {
            await connectDB();
            // findOneAndDelete is safer than deleteOne because it returns the deleted doc if needed
            return await User.findOneAndDelete({ _id });
        } catch (error) {
            console.error("Failed to delete user:", error);
            throw new Error("Could not delete user.");
        }
    },

    async updateUser(_id: string, data: Partial<IUser>) {
        try {
            await connectDB();
            // { new: true } returns the updated document instead of the old one
            return await User.findOneAndUpdate({ _id }, data, { returnDocument: 'after' });
        } catch (error) {
            console.error("Failed to update user:", error);
            throw new Error("Could not update user.");
        }
    },

    async findUserByEmail(email: string) {
        try {
            await connectDB();
            // We search for a case-insensitive email match
            const user = await User.findOne({
                email: { $regex: new RegExp(`^${email}$`, "i") }
            }).lean();

            if (!user) return null;

            // We "clean" the object just like we did in getAllUsers
            // to prevent serialization errors in the future
            return {
                ...user,
                _id: user._id.toString(),
                createdAt: user.createdAt?.toISOString(),
                updatedAt: user.updatedAt?.toISOString(),
            };
        } catch (error) {
            console.error("Error finding user by email:", error);
            return null;
        }
    },
};