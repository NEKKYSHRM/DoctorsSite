import mongoose from "mongoose";
import { verify } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["doctor", "patient"],
      default: "patient",
    },
    phone: { type: String },
    location: { type: String },
    profileImage: { type: String, default: "" },
    pinCode: { type: Number },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);


// userSchema.methods.isPasswordCorrect = async function (password) {
//     return await bcrypt.compare(password, this.password);
// }

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            role: this.role,
            email: this.email,
            username: this.userName,

        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}

const User = mongoose.models.users || mongoose.model("User", userSchema);

export {User};
