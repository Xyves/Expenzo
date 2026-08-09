"use client";

import { type ComponentPropsWithoutRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type FormInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "name" | "value" | "onChange"
> & {
  name: string;
  label: string;
  value: string;
  error?: string;
  onValueChange: (value: string) => void;
};

export default function FormInput({
  name,
  id,
  label,
  value,
  error,
  type = "text",
  className = "",
  onValueChange,
  ...inputProps
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputId = id ?? name;
  const errorId = `${inputId}-error`;
  const isPassword = type === "password";
  const visibleType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex min-h-22 w-full flex-col justify-center">
      <label htmlFor={inputId}>{label}</label>

      <div className="relative">
        <input
          {...inputProps}
          id={inputId}
          name={name}
          type={visibleType}
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={[
            "w-full rounded-lg bg-[#222C3D]  px-2 py-3 focus:ring-[#C98BBB]  border border-[#3A3444]",
            isPassword ? "pr-10" : "",
            className,
          ].join(" ")}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => {
              setShowPassword((current) => !current);
            }}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <Eye aria-hidden="true" className="h-4 w-4 text-gray-400" />
            ) : (
              <EyeOff aria-hidden="true" className="h-4 w-4 text-gray-400" />
            )}
          </button>
        )}
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
