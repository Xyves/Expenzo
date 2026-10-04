"use client";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import React, { useState } from "react";
import DesktopSidebar from "@/app/components/shared/Sidebar/DesktopSidebar";
import MobileSidebar from "@/app/components/shared/Sidebar/MobileSidebar";

export default function Sidebar() {
  const { signOut } = useClerk();
  const [isDropDownHidden, setIsDropDownHidden] = useState(true);
  const { user } = useUser();

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/authentication" });
  };

  return (
    <aside className="bg-primary-dark  md:flex flex flex-col w-16 md:w-full w-16">
      <div className="hidden md:flex flex-col w-full min-h-screen">
        <DesktopSidebar
          isDropDownHidden={isDropDownHidden}
          setIsDropDownHidden={setIsDropDownHidden}
          handleSignOut={handleSignOut}
          username={user?.username}
        />
      </div>
      <div className="md:hidden flex flex-col min-h-screen">
        <MobileSidebar
          isDropDownHidden={isDropDownHidden}
          setIsDropDownHidden={setIsDropDownHidden}
          handleSignOut={handleSignOut}
          username={user?.username}
        />
      </div>
    </aside>
  );
}
