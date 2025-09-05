"use client";
import { useSignIn, useSignUp, useUser } from "@clerk/nextjs";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ClerkAPIError } from "@clerk/types";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
export type FormFields = {
  username: string;
  password: string;
  email?: string;
};
export default function Authentication() {
  const { isLoaded, setActive } = useSignUp();
  const { isSignedIn } = useUser();
  const { signIn } = useSignIn();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();
  const [errors, setErrors] = React.useState<ClerkAPIError[]>();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors(undefined);
    console.log("Test auth route");
    if (!isLoaded || !signIn) return;
    try {
      const signInAttempt = await signIn.create({
        identifier: username,
        password,
      });
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        console.log("logged in");
        router.replace("/dashboard");
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    }
  }
  useEffect(() => {
    if (isLoaded) {
      router.replace("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);
  if (!isLoaded || isSignedIn) {
    return null;
  }
  return (
    <div className=" bg-no-repeat bg-cover bg-[url(/images/bg.png)]  h-full">
      <div className="flex flex-col w-[70%] mx-auto h-full ">
        <nav className="px-2 my-10   flex items-center justify-center ">
          <Image
            src={"/images/logo.png"}
            height={100}
            width={100}
            alt=""
          ></Image>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            Expenzo
          </p>
        </nav>
        <main className=" p-3 my-20 mx-auto w-1/2">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center"
          >
            <div className="w-3/4 flex flex-col  mx-auto justify-center">
              <div aria-label="username" className="flex h-22">
                <div className="w-full  flex flex-col justify-center">
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder=""
                    className="bg-[rgb(60,60,60)] w-full py-3 rounded-lg px-2"
                  />
                </div>
              </div>
              <div aria-label="password" className="flex h-22">
                <div className="w-full  flex flex-col justify-center  relative">
                  <label htmlFor="password">password</label>
                  <input
                    type={!showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder=""
                    required
                    className="bg-[rgb(60,60,60)] w-full py-3 rounded-lg px-2"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-2 top-1/2 "
                  >
                    {!showPassword ? (
                      <Eye className="h-4 w-4 text-gray-400 mt-auto" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-gray-400 mt-auto" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <button
              className="bg-[#00dac6] w-32  py-2 mb-4 mt-10 active:bg-blue-300  text-black rounded-2xl"
              type="submit"
            >
              SIGN IN
            </button>
            <p>
              Don&apos;t have an account? &nbsp;
              <Link href="/registration" className="underline">
                Sign up
              </Link>
            </p>
          </form>
          {errors && (
            <ul>
              {errors.map((el, index) => (
                <li key={index}>{el.longMessage}</li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}
