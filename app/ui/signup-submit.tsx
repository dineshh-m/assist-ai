import { useFormStatus } from "react-dom";

export default function SignupSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      className="my-10 w-full bg-black disabled:bg-gray-300 disabled:border-solid disabled:border-2 disabled:border-gray-400 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      type="submit"
      disabled={pending}
    >
      {pending ? "Registering...": <span>Register &rarr;</span>}
    </button>
  );
}
