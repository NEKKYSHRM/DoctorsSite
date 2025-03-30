import { dbConnect } from "@/db";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse, NextRequest } from "next/server";
import { User } from "@/models/user.model";

export async function GET(request) {
  try {
    await dbConnect();
    const userData = getDataFromToken(request); //returns raw decoded data
    const user = await User.findOne({ _id: userData.id }).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({
      message: "User data fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
