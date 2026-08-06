import LogoWithText from "@/app/components/auth/LogoWithText";
import FormInput from "@/app/components/auth/FormInput";
import FormErrors from "@/app/components/auth/FormErrors";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

export default function useSignInForm() {
  const { signIn, errors, fetchStatus } = useSignIn();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const isSubmitting = fetchStatus === "fetching";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { error } = await signIn.password({
      identifier: username,
      password,
    });

    if (error) {
      console.error(error);
      return;
    }

    if (signIn.status === "complete") {
      await finalizeSignIn();
      return;
    }

    console.error("Additional authentication required:", signIn.status);
  }

  async function finalizeSignIn() {
    const { error } = await signIn.finalize({
      navigate: ({ session, decorateUrl }) => {
        if (session?.currentTask) {
          console.error("Session task required:", session.currentTask);
          return;
        }

        window.location.href = decorateUrl("/dashboard");
      },
    });

    if (error) {
      console.error(error);
    }
  }
  return {
    username,
    setUsername,
    password,
    setPassword,
    errors,
    isSubmitting,
    handleSubmit,
  };
}
