import SigninForm from "@/app/ui/signin-form"
import { cookies } from "next/headers";

export default function Signin() {
  console.log("Client side", cookies().getAll());
  return (
    <SigninForm />
  );
}