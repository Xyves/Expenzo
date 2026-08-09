import type { ReactNode } from "react";
import LogoWithText from "@/app/components/auth/LogoWithText";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <div className="hidden w-1/2 rounded-2xl bg-[url('/images/bg.png')] bg-cover bg-no-repeat xl:flex" />

      <div className="flex flex-1 flex-col bg-[#121824]">
        <LogoWithText />

        <main className="mx-auto my-4 w-5/6 p-3 md:my-6 md:w-auto lg:my-4 xl:my-8 2xl:my-10">
          {children}
        </main>
      </div>
    </div>
  );
}
