"use client";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useSignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { registerSchema } from "@/app/types/zod";
// import { useMutation } from "@apollo/client";
import { registerUser } from "@/services/userServices";
import LogoWithText from "@/app/components/auth/LogoWithText";
import FormInput from "@/app/components/auth/FormInput";
import FormErrors from "@/app/components/auth/FormErrors";
import { useSignUpHook } from "@/app/features/auth/hooks/useSignUp";
import useSignUpForm from "@/app/hooks/auth/useSignUpForm";
import AuthLayout from "@/app/layout/AuthLayout";
// import { REGISTER_USER } from "@/api/services/userServices.js";
export default function Registration() {
  // const { fetchStatus, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  // const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

  const {
    username,
    setUsername,
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    code,
    setCode,
    passwordConfirm,
    setPasswordConfirm,
    errors,
    isSubmitting,
    handleSubmit,
    formErrors,
    verifyOTPCode,
  } = useSignUpForm();
  const { signUp, fetchStatus } = useSignUp();

  // const router = useRouter();
  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     router.replace("/dashboard");
  //   }
  // }, [fetchStatus, isSignedIn, router]);
  // if (!fetchStatus) {
  //   return null;
  // }

  const needsEmailVerification =
    signUp.status === "missing_requirements" &&
    signUp.unverifiedFields.includes("email_address") &&
    signUp.missingFields.length === 0;

  return (
    <AuthLayout>
      {needsEmailVerification ? (
        <form onSubmit={verifyOTPCode} className="flex flex-col items-center">
          <FormInput
            name="code"
            label="Verification code"
            value={code}
            onValueChange={setCode}
            error={formErrors.code || errors.fields.code?.message}
            autoComplete="one-time-code"
            inputMode="numeric"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mb-4 mt-6 w-32 rounded-2xl bg-primary-button py-2 text-black disabled:opacity-50"
          >
            {isSubmitting ? "VERIFYING..." : "VERIFY"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2 className="text-5xl my-5">Register</h2>
          <div className=" flex flex-col  w-full gap-4 my-6">
            <FormInput
              name="username"
              label="Username"
              type="text"
              value={username}
              onValueChange={setUsername}
              autoComplete="username"
              required
              error={formErrors.username || errors.fields.username?.message}
            />

            <FormInput
              name="emailAddress"
              label="Email"
              type="email"
              value={emailAddress}
              onValueChange={setEmailAddress}
              autoComplete="email"
              required
              error={
                formErrors.emailAddress || errors.fields.emailAddress?.message
              }
            />

            <FormInput
              name="password"
              label="Password"
              type="password"
              value={password}
              onValueChange={setPassword}
              autoComplete="new-password"
              required
              error={formErrors.password || errors.fields.password?.message}
            />

            <FormInput
              name="confirmPassword"
              label="Confirm password"
              type="password"
              value={passwordConfirm}
              onValueChange={setPasswordConfirm}
              autoComplete="new-password"
              required
              error={formErrors.passwordConfirm}
            />

            {/*<div id="clerk-captcha" className="my-4" />*/}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mb-4 py-4 px-4 w-full rounded-xl bg-primary-button font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "SIGNING UP..." : "SIGN UP"}
            </button>

            <p className="flex justify-center">
              Already have an account? &nbsp;
              <Link
                href="/authentication"
                className="underline text-primary-button"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}
