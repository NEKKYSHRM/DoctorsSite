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
      enum: ["Doctor", "Patient"],
      default: "Patient",
    },
    phone: { type: String },
    location: { type: String },
    profileImage: { type: String, default: "" },
    pinCode: { type: Number },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);


const User = mongoose.models.users || mongoose.model("User", userSchema);

export {User};
