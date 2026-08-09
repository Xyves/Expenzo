"use client";

import FormInput from "@/app/components/auth/FormInput";
import FormErrors from "@/app/components/auth/FormErrors";
import useSignInForm from "@/app/hooks/auth/useSignInForm";
import Link from "/next/link";
import React from "react";
import AuthLayout from "@/app/layout/AuthLayout";
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
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2 className=" text-3xl md:text-5xl my-2 lg:my-5">Login</h2>
        <h3 className=" text-md md:text-xl">
          Enter your credentials to access your account
        </h3>
        <div className=" flex flex-col  w-full gap-3 md:gap-6 my-4 md:my-10">
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

          <FormErrors globalErrors={errors.global} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mb-4 mt-10 py-4 px-4 w-full rounded-xl bg-primary-button font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "SIGNING IN..." : "Login"}
          </button>

          <p className="flex justify-center text-sm md:text-md">
            Not a member? &nbsp;
            <Link
              href="/registration"
              className="underline text-primary-button"
            >
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
