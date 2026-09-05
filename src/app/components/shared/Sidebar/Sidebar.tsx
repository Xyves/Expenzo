"use client";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import DesktopSidebar from "@/app/components/shared/Sidebar/DesktopSidebar";
import MobileSidebar from "@/app/components/shared/Sidebar/MobileSidebar";
export default function Sidebar() {
  const { signOut } = useClerk();
  const [isDropDownHidden, setIsDropDownHidden] = useState(false);
  const { user } = useUser();

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/authentication" });
  };

  return (
    <aside className="bg-primary-dark  md:flex flex flex-col w-full ">
      <div className="hidden md:flex flex-col w-full min-h-screen">
        <DesktopSidebar
          isDropDownHidden={isDropDownHidden}
          setIsDropDownHidden={setIsDropDownHidden}
          handleSignOut={handleSignOut}
          username={user?.username}
        />
      </div>
      <div className="md:hidden flex flex-col w-full min-h-screen">
        <MobileSidebar />
      </div>
      <ChevronLeft
        strokeWidth={2}
        className="absolute md:hidden right-3 top-3 text-white"
      />
    </aside>
  );
}
