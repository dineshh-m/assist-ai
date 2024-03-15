"use server";
import { cookies } from "next/headers";
import { createUser, getUser } from "./server-data";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { redirect } from "next/navigation";
import { SignJWT } from "jose";
import { getAuthSecretKey } from "./util";

export async function authenticate(prevState: any, formData: FormData) {
    const userEmail = formData.get('email');
    const password = String(formData.get('password'));
    const user = await getUser(userEmail);
    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const payload = {
                userId: user.id,
                userEmail: user.email,
            };
            const token = await new SignJWT(payload).setProtectedHeader({ alg: 'HS256'}).sign(new TextEncoder().encode(getAuthSecretKey()));
            const cookiesStore = cookies();
            const threeDays = 72 * 60 * 60 * 1000;
            cookiesStore.set('auth_token', token, { expires: Date.now() + threeDays, httpOnly: true });
            redirect("/chat");
        }
        return 'Invalid Credentials';
    }
    return 'Something went wrong';
}

export async function register(prevState: any, formData: FormData) {
    const username = String(formData.get('firstname') + ' ' + formData.get('lastname')),
          email = String(formData.get('email')),
          password = String(formData.get('password'));
    const isCreated = await createUser({ username, email, password});
    if (isCreated) {
        redirect('/signin');
    }
    return 'Failed to create a user';
}