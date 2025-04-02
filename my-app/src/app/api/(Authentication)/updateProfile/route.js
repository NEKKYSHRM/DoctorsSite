import { updateProfile } from "@/controllers/user.controller";

export async function POST(req) {
  return updateProfile(req);
}
