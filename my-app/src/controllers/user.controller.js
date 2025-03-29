import { NextRequest, NextResponse } from "next/server.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/db/index.js";
import { use } from "react";
import bcrypt from "bcryptjs";

export async function registerUser(req) {
  try {
    // Ensure DB connection
    await dbConnect();

    // Parse request body
    const { userName, email, password } = await req.json();

    // Validate the request
    if (!userName?.trim() || !email?.trim() || !password?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ userName }, { email }],
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      userName: userName.toLowerCase(),
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          _id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("User creation failed:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}


// const generateAccessAndRefreshToken = async (userId) => {
//   try {
//     const user = await User.findById(userId);
//     const accessToken = user.generateAccessToken();
//     const refreshToken = user.generateRefreshToken();

//     user.refreshToken = refreshToken;
//     await user.save({ validateBeforeSave: true });
//     return { accessToken, refreshToken };
//   } catch (error) {
//     throw new ApiError(500, "Something went wrong while generating tokens");
//   }
// };

// const refreshAccessToken = AsyncHandler(async (req, res) => {
//   return dbConnect()
//     .then(async () => {
//       const incomingRefreshToken =
//         req.body.refreshToken || req.cookies.refreshToken;

//       if (!incomingRefreshToken) {
//         throw new ApiError(400, "Refresh token is required");
//       }

//       const decodedToken = jwt.verify(
//         incomingRefreshToken,
//         process.env.REFRESH_TOKEN_SECRET
//       );
//       const user = await User.findById(decodedToken?._id);

//       if (!user) {
//         throw new ApiError(404, "User not found");
//       }
//       if (incomingRefreshToken !== user?.refreshToken) {
//         throw new ApiError(401, "Invalid refresh token");
//       }

//       const options = {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//       };

//       const { accessToken, refreshToken: newRefreshToken } =
//         await generateAccessAndRefreshToken(user._id);

//       return res
//         .status(200)
//         .cookie("accessToken", accessToken, options)
//         .cookie("refreshToken", newRefreshToken, options)
//         .json(
//           new ApiResponse(200, "Access token refreshed successfully", {
//             accessToken,
//             refreshToken: newRefreshToken,
//           })
//         );
//     })
//     .catch((error) => {
//       throw new ApiError(
//         500,
//         "Something went wrong while refreshing token",
//         "error:" + error
//       );
//     });
// });

export { refreshAccessToken };
