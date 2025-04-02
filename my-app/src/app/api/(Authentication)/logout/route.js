import { logout } from "@/controllers/user.controller";

export async function GET(req) {
  return logout(req);
}