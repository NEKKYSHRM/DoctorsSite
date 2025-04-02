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
          username: savedUser.userName,
          email: savedUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("User creation failed:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function loginUser(req) {
  try {
    //db connection
    await dbConnect();

    //parse body
    const { email, password } = await req.json();

    //check all fields
    if (!email?.trim() || !password?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    //validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    //Create token data
    const tokenData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
    };

    //create token
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successfully",
      success: true,
    });

    response.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    return response;
  } catch (error) {
    console.log("Database connection error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function logout(req) {
  try {
    const response = NextResponse.json({
      message: "Logged out successfully",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error) {
    console.log("Logout error: ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function updateProfile(req) {
  try {
    //db connection
    await dbConnect();

    //parse req body
    const { fullName, email, phone, location } = await req.json();

    //validate all fields
    if (!fullName?.trim() || !phone?.trim() || !location?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 500 }
      );
    }

    //find user by id
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    //update user
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        fullName,
        phone,
        location,
      }, // Only update these fields
      { new: true, runValidators: true, omitUndefined: true } // Prevent required errors
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    //return
    return NextResponse.json(
      {
        message: "User updated successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("User creation failed:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
