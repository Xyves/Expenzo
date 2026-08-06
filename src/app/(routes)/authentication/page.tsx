"use client";

import LogoWithText from "@/app/components/auth/LogoWithText";
import FormInput from "@/app/components/auth/FormInput";
import FormErrors from "@/app/components/auth/FormErrors";
import useSignInForm from "@/app/hooks/auth/useSignInForm";
export default function Authentication() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    errors,
    isSubmitting,
    handleSubmit,
  } = useSignInForm();

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

            <FormErrors globalErrors={errors.global} />

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
