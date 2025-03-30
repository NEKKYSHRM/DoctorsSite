import { loginUser } from "@/controllers/user.controller";

export async function POST(req) {
    return loginUser(req);
}