import { useSignUp } from "@clerk/nextjs";
import { type SubmitEvent, useState } from "react";
import { registerSchema } from "@/app/types/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

type FormErrorsType = {
  username?: string;
  emailAddress?: string;
  password?: string;
  passwordConfirm?: string;
  code?: string;
};

export default function useSignUpForm() {
  const { signUp, errors, fetchStatus } = useSignUp();

  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");
  const isSubmitting = fetchStatus === "fetching";
  const [formErrors, setFormErrors] = useState<FormErrorsType>({});

  const router = useRouter();

  async function verifyOTPCode(
    event: SubmitEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (fetchStatus === "fetching") {
      return;
    }

    const validatedCode = getValidatedCode();

    if (!validatedCode) {
      return;
    }

    try {
      const { error } = await signUp.verifications.verifyEmailCode({
        code: validatedCode,
      });

      if (error) {
        return;
      }

      if (!canFinalizeSignUp()) {
        return;
      }

      await finalizeSignUp();
    } catch (error: unknown) {
      console.error("Unexpected OTP verification error:", error);
    }
  }
  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!handleZodValidation()) return;

    const { error } = await signUp.create({
      emailAddress,
      username,
      password,
    });

    if (error) {
      console.error(error);
      return;
    }

    const { error: emailError } = await signUp.verifications.sendEmailCode();

    if (emailError) {
      console.error(error);
      return;
    }

    console.error("Additional authentication required:", error);
  }

  function getValidatedCode(): string | null {
    const trimmedCode = code.trim();

    setFormErrors((current) => ({
      ...current,
      code: trimmedCode ? "" : "Enter the verification code",
    }));

    return trimmedCode || null;
  }

  function canFinalizeSignUp(): boolean {
    switch (signUp.status) {
      case "complete":
        return true;

      case "missing_requirements":
        console.error("Sign-up has missing requirements", {
          missingFields: signUp.missingFields,
          unverifiedFields: signUp.unverifiedFields,
        });

        return false;

      case "abandoned":
        console.error("The sign-up attempt has expired");
        return false;

      default:
        return false;
    }
  }

  async function finalizeSignUp(): Promise<void> {
    const { error } = await signUp.finalize({
      navigate: ({ decorateUrl }) => {
        const url = decorateUrl("/dashboard");

        if (url.startsWith("http")) {
          window.location.href = url;
        } else {
          router.replace(url);
        }
      },
    });

    if (error) {
      console.error("Could not finalize sign-up:", error);
    }
  }

  function handleZodValidation(): boolean {
    const result = registerSchema.safeParse({
      username,
      emailAddress,
      password,
      passwordConfirm,
    });

    if (!result.success) {
      const { fieldErrors } = z.flattenError(result.error);

      setFormErrors({
        emailAddress: fieldErrors.emailAddress?.[0] ?? "",
        username: fieldErrors.username?.[0] ?? "",
        password: fieldErrors.password?.[0] ?? "",
        passwordConfirm: fieldErrors.passwordConfirm?.[0] ?? "",
      });
      return false;
    }
    setFormErrors({});
    return true;
  }

  return {
    username,
    setUsername,
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    errors,
    formErrors,
    isSubmitting,
    handleSubmit,
    verifyOTPCode,
    code,
    setCode,
  };
}
