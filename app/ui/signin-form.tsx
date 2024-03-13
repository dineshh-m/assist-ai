"use client";
import { Label } from "@/app/ui/label";
import { Input } from "@/app/ui/input";
import { cn } from "@/app/ui/cn";
import { TextGenerateEffect } from "@/app/ui/text-generate-effect";

const words =
  "Your Virtual Gateway to Seamless Interaction, Efficient Services, and Informed Governance";

export default function SigninForm() {
  return (
    <div className="max-w-md w-full mx-auto mt-28 rounded-none md:rounded-2xl p-4 md:p-8 bg-white shadow-xl">
      <h2 className="font-bold text-xl text-neutral-800 ">
        {" "}
        Welcome to Assist AI
      </h2>

      <div className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-800 mb-4">
        <TextGenerateEffect words={words} />
      </div>

      <form className="my-8">
        <LabelInputContainer className="mb-4 ">
          <span className="font-bold text-xl text-neutral-800 ">
            Email Address
          </span>
          <Label htmlFor="email" className=""></Label>
          <Input id="email" placeholder="example123@gmail.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4 ">
          <span className="font-bold text-xl text-neutral-800 ">Password</span>
          <Label htmlFor="password"></Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="my-10 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log in &rarr;
          <BottomGradient />
        </button>
        <p className="text-gray-500 text-center">
          New to AssistAI?{" "}
          <a className="text-blue-400 hover:underline" href="/signup">
            Create an account
          </a>{" "}
        </p>
      </form>
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
