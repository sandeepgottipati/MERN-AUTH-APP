import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "please provide a unique userName"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "please provide a password"],
        unique: false
    },
    email: {
        type: String,
        required: [true, "please provide a unique  email"],
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String }


})
export default mongoose.model.Users || mongoose.model('User', UserSchema);