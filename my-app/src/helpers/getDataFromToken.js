import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return null;
    }
    const data = jwt.verify(token, process.env.SECRET_KEY);
    return data;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};
