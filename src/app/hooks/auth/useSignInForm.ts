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
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    if (signIn.status === "complete") {
      const { error: finalizeError } = await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.error("Session task required:", session.currentTask);
            return;
          }

          const dashboardUrl = decorateUrl("/dashboard");

          if (dashboardUrl.startsWith("http")) {
            window.location.href = dashboardUrl;
          } else {
            router.replace(dashboardUrl);
          }
        },
      });

      if (finalizeError) {
        console.error(JSON.stringify(finalizeError, null, 2));
      }

      return;
    }

    if (signIn.status === "needs_second_factor") {
      console.error("Two-factor authentication is required.");
      return;
    }

    if (signIn.status === "needs_client_trust") {
      console.error("Client verification is required.");
      return;
    }

    console.error("Sign-in attempt was not completed:", signIn.status);
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
