import type { ClerkAPIError } from "@clerk/types";

interface FormErrorsProps {
  globalErrors: ClerkAPIError[] | null | undefined;
}

export default function FormErrors({ globalErrors }: FormErrorsProps) {
  return globalErrors?.length ? (
    <ul className="text-red-500">
      {globalErrors?.map((error, index) => (
        <li key={`${index}`}>{error.longMessage ?? error.message}</li>
      ))}
    </ul>
  ) : null;
}
