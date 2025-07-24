"use client";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useSignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { registerSchema } from "@/app/types/zod";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "@/services/userServices.js";
export default function Registration() {
  const { isSignedIn } = useUser();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    emailAddress: "",
  });
  const { user } = useUser();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);
  if (!isLoaded) {
    return null;
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setFormErrors({ username: "", password: "", emailAddress: "" });
    if (!isLoaded) {
      return;
    }
    const result = registerSchema.safeParse({
      username,
      emailAddress,
      password,
    });
    if (!result.success) {
      const zodErrors = result.error.flatten().fieldErrors;
      setFormErrors({
        emailAddress: zodErrors.emailAddress?.[0] || "",
        username: zodErrors.username?.[0] || "",
        password: zodErrors.password?.[0] || "",
      });
      console.log("formErrors:", formErrors);

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
        const result = await registerUser({
          variables: {
            clerkId: completeSignup.createdUserId,
            email: emailAddress,
            username: username,
          },
        });
        await setActive({ session: completeSignup.createdSessionId });
        console.log(completeSignup);
        console.log("trying to register user");
        if (result.data.registerNewUser.success) {
          router.push("/dashboard");
        } else {
          console.error("error with inserting to db");
          // Handle error
        }
        console.log("end of register");
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) {
        // ✅ Handle Clerk-specific API errors
        setClerkError(err.errors?.[0]?.message || "Something went wrong");
        console.error("Clerk API Error:", JSON.stringify(err, null, 2));
      } else {
        // ❌ Fallback for unknown errors
        setClerkError("An unexpected error occurred");
        console.error("Unknown error:", err);
      }
    }
  }
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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder=""
                      className="bg-[rgb(60,60,60)] w-full py-3 rounded-lg px-2"
                    />
                    {formErrors.username && (
                      <p className="text-red-700">{formErrors.username}</p>
                    )}
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
                    {formErrors.emailAddress && (
                      <p className="text-red-700">{formErrors.emailAddress}</p>
                    )}
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
                    {formErrors.password &&
                      typeof formErrors.password === "string" && (
                        <p className="text-red-700">{formErrors.password}</p>
                      )}
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
              <div className="space-y-2 bg-gray-500 flex flex-col justify-center">
                <label htmlFor="code">Verification code:</label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter verification code"
                  required
                  className="bg-gray-600 py-4 px-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 my-5 mx-auto flex justify-center"
              >
                Verify Email
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
