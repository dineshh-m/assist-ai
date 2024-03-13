import { cookies } from "next/headers";
import { getUser } from "./server-data";

export async function login(prevState: any, formData: FormData) {
    const userEmail = formData.get('email');
    const password = formData.get('password');
    const user = await getUser(userEmail);
    if (user) {
    }
}