"use client";
import MainLayout from "@/app/layout/MainLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FormFields } from "../authentication/page";
import { SignUpButton, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Registration() {
  const { register, handleSubmit } = useForm<FormFields>();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  const router = useRouter();
  if (!isLoaded) {
    return null;
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({ emailAddress, username, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  async function onPressVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignup = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignup.status !== "complete") {
        console.log(JSON.stringify(completeSignup, null, 2));
      }
      if (completeSignup.status === "complete") {
        await setActive({ session: completeSignup.createdSessionId });
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
    }
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
          {!pendingVerification ? (
            <form
              action=""
              onSubmit={submit}
              className="flex flex-col items-center"
            >
              <div className="w-3/4 flex flex-col  mx-auto justify-center">
                <div aria-label="username" className="flex h-22">
                  <div className="w-full  flex flex-col justify-center">
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      {...register("username")}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder=""
                      className="bg-[rgb(60,60,60)] w-full py-3 rounded-lg px-2"
                    />
                  </div>
                </div>
                <div aria-label="email" className="flex h-22">
                  <div className="w-full  flex flex-col justify-center">
                    <label htmlFor="emailAddress">email</label>
                    <input
                      type="text"
                      // {...register("emailAddress")}
                      value={emailAddress}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=""
                      className="bg-[rgb(60,60,60)] w-full py-3 rounded-lg px-2"
                    />
                  </div>
                </div>
                <div aria-label="password" className="flex h-22">
                  <div className="w-full  flex flex-col justify-center  relative">
                    <label htmlFor="password">password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder=""
                      required
                      className="bg-[rgb(60,60,60)] w-full py-3 rounded-lg px-2"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                    >
                      {!showPassword ? (
                        <Eye className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div id="clerk-captcha" className="my-4">
                <button
                  className="bg-[#00dac6] w-32  py-2 mb-4 mt-10 active:bg-blue-300  text-black rounded-2xl"
                  type="submit"
                >
                  SIGN IN
                </button>
              </div>
              <p>
                Already have account? &nbsp;
                <Link href="/authentication" className="underline">
                  Log in
                </Link>
              </p>
            </form>
          ) : (
            <form onSubmit={onPressVerify}>
              <div className="space-y-2">
                <label htmlFor="code">Verification code</label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter verification code"
                  required
                />
              </div>
              <button type="submit">Verify Email</button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
