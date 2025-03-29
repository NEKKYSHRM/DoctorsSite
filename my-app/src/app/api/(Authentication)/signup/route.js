import { registerUser } from "@/controllers/user.controller";

export async function POST(req) {
  return registerUser(req);
}
