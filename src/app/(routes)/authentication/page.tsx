"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import LogoWithText from "@/app/components/auth/LogoWithText";
import FormInput from "@/app/components/auth/FormInput";
export default function Authentication() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const globalErrors = errors.global ?? [];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <div className="h-full bg-[url(/images/bg.png)] bg-cover bg-no-repeat">
      <div className="mx-auto flex h-full sm:70% w-full flex-col">
        <LogoWithText />

        <main className="mx-auto my-20  p-3 bg-black/(--bg-opacity) [--bg-opacity:90%] hover:[--bg-opacity:100%]">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="mx-auto flex flex-col justify-center">
              <FormInput
                name="username"
                label="Username"
                type="text"
                value={username}
                onValueChange={setUsername}
                autoComplete="username"
                required
                error={errors.fields.identifier?.message}
              />

              <FormInput
                name="password"
                label="Password"
                type="password"
                value={password}
                onValueChange={setPassword}
                autoComplete="current-password"
                required
                error={errors.fields.password?.message}
              />
            </div>

            {globalErrors.length > 0 && (
              <ul className="text-red-500">
                {globalErrors.map((error, index) => (
                  <li key={`${error.code}-${index}`}>
                    {error.longMessage ?? error.message}
                  </li>
                ))}
              </ul>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mb-4 mt-10 w-full rounded-xl bg-orange-button py-2 font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "SIGNING IN..." : "Login"}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
