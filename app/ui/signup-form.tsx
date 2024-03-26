"use client";
import React from "react";
import { Label } from "@/app/ui/label";
import { Input } from "@/app/ui/input";
import { cn } from "@/app/ui/cn";
import { TextGenerateEffect } from "@/app/ui/text-generate-effect";
import { useFormState } from "react-dom";
import { register } from "../lib/actions";
import SignupSubmit from "./signup-submit";
import AuthMessage from "./auth-message";
const words =
  "Your Virtual Gateway to Seamless Interaction, Efficient Services, and Informed Governance";

export default function SignupForm() {
  const [state, dispatch] = useFormState(register, null);
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-white shadow-xl">
      <h2 className="font-bold text-xl text-neutral-800 ">
        {" "}
        Welcome to Assist AI
      </h2>

      <div className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-800 mb-4">
        <TextGenerateEffect words={words} />
      </div>

      <form action={dispatch} className="my-8 ">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <span className="font-bold text-xl text-neutral-800 ">
              First Name
            </span>
            <Label htmlFor="firstname"></Label>
            <Input name="firstname" id="firstname" placeholder="first name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <span className="font-bold text-xl text-neutral-800 ">
              Last Name
            </span>
            <Label htmlFor="lastname"></Label>
            <Input name="lastname" id="lastname" placeholder="last name" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4 ">
          <span className="font-bold text-xl text-neutral-800 ">
            Email Address
          </span>
          <Label htmlFor="email" className=""></Label>
          <Input name="email" id="email" placeholder="example123@gmail.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4 ">
          <span className="font-bold text-xl text-neutral-800 ">Password</span>
          <Label htmlFor="password"></Label>
          <Input name="password" id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4 ">
          <span className="font-bold text-xl text-neutral-800 ">
            Re-enter Password
          </span>
          <Label htmlFor="password1"></Label>
          <Input name="confirmpassword" id="password1" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <SignupSubmit />
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <a className="text-blue-400 underline" href="/signin">
            Login
          </a>{" "}
          here
        </p>
      </form>
      {state && <AuthMessage state={state} />}
    </div>
  );
}

function BottomGradient() {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
}

function LabelInputContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
}
