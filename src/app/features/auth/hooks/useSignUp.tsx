import React, { useEffect, useState } from "react";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useSignUp, useUser } from "@clerk/nextjs";
import { registerSchema } from "@/app/types/zod";
import { registerUser } from "@/services/userServices";
import { z } from "zod";
import { REGISTER_USER } from "@/graphql/mutations";
import { useMutation } from "@apollo/client/react";

export function useSignUpHook() {
  const { signUp } = useSignUp();
  const [emailAddress, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoaded, isSignedIn, fetchStatus } = useUser();

  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    emailAddress: "",
  });
  const emptyUser = { username: "", password: "", emailAddress: "" };

  async function submit(e: React.FormEvent) {
    setFormErrors(emptyUser);

    if (!fetchStatus) {
      return;
    }

    const result = registerSchema.safeParse({
      username,
      emailAddress,
      password,
    });

    if (!result.success) {
      setZodErrors(result.error);
      return;
    }

    try {
      const { error: createError } = await signUp.create({
        username,
        emailAddress,
        password,
      });

      if (createError) {
        return;
      }

      const { error: verificationError } =
        await signUp.verifications.sendEmailCode();

      if (verificationError) {
        return;
      }
      const { error } = await signUp.verifications.verifyEmailCode({
        code,
      });
      setPendingVerification(true);
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
  //   Private
  function setZodErrors(error: z.ZodError<RegisterInput>) {
    const { fieldErrors } = result.flattenError(error);

    setFormErrors({
      emailAddress: fieldErrors.emailAddress?.[0] ?? "",
      username: fieldErrors.username?.[0] ?? "",
      password: fieldErrors.password?.[0] ?? "",
    });
  }
}
