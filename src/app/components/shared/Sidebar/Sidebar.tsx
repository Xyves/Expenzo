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
    <div className="flex h-screen overflow-hidden">
      <div className="w-16 md:w-72 h-full flex flex-col">
        <aside className="bg-primary-dark w-full h-full flex flex-col">
          <div className="flex-1 min-h-0">
            <div className="hidden md:flex h-full">
              <DesktopSidebar
                isDropDownHidden={isDropDownHidden}
                setIsDropDownHidden={setIsDropDownHidden}
                handleSignOut={handleSignOut}
                username={user?.username}
              />
            </div>

            <div className="md:hidden h-full">
              <MobileSidebar
                isDropDownHidden={isDropDownHidden}
                setIsDropDownHidden={setIsDropDownHidden}
                handleSignOut={handleSignOut}
                username={user?.username}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
