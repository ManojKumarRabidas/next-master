import mongoose, { Schema, model, models } from 'mongoose';

// 1. The Interface: This protects our code during development.
export interface IUser {
    _id?: string;
    code: string;    // e.g., "USR-001"
    name: string;
    phone: string;
    email: string;
    password?: string;
    isActive: boolean;
}

// 2. The Schema: This defines the rules for the MongoDB database.
const UserSchema = new Schema<IUser>({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    isActive: { type: Boolean, default: true },
}, {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true
});

// 3. The Model Export
// In Next.js, we check if the model already exists to prevent re-compilation errors.
const User = models.User || model<IUser>('User', UserSchema);

export default User;