import { useSignIn } from "@clerk/nextjs";
import { type SubmitEvent, useState } from "react";

export default function useSignInForm() {
  const { signIn, errors, fetchStatus } = useSignIn();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isSubmitting = fetchStatus === "fetching";

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
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
