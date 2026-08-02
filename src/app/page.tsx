"use client";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
export default function Home() {
  const { user } = useUser();

  if (user) {
    redirect("/dashboard");
  } else {
    redirect("/authentication");
  }
}
