"use client";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import {
  CalendarDays,
  ChartColumn,
  ChartPie,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SidebarItem from "@/app/components/shared/SidebarItem";
export default function Sidebar() {
  const { signOut } = useClerk();
  const [isDropDownHidden, setIsDropDownHidden] = useState(false);
  const { user } = useUser();

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/authentication" });
  };

  return (
    <aside className="bg-primary-dark flex flex-col w-full">
      <div
        aria-label="Dashboard"
        className="flex flex-col items-center mb-10 pt-7"
      >
        <Image
          height={100}
          width={100}
          src={"/images/logo.png"}
          alt="user profile"
        />
        <p className="text-2xl text-center">{user?.username}</p>
      </div>
      <ul className="flex  flex-col">
        <SidebarItem
          icon={LayoutDashboard}
          label="Dashboard"
          href="dashboard"
          collapsed="false"
        />
        <SidebarItem
          icon={CreditCard}
          label="Transactions"
          href="transactions"
          collapsed="false"
        />
        <SidebarItem
          icon={LayoutDashboard}
          label="Reports"
          href="reports"
          collapsed="false"
        />
        <SidebarItem
          icon={ChartPie}
          label="Budgets"
          href="budgets"
          collapsed="false"
        />

        <li
          aria-label="Charts"
          className="rounded-sm text-xl flex justify-center flex-col "
        >
          <li
            className="flex py-5 px-3 hover:bg-[#5c85e7] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Parent clicked!");
              setIsDropDownHidden(!isDropDownHidden);
            }}
          >
            <ChartColumn className="mr-2" />
            <p>Charts</p>
          </li>
          <ul className={`${!isDropDownHidden ? "hidden" : "inline"} pl-5`}>
            <SidebarItem
              icon={ChartPie}
              label="Categories"
              href="chart/categories"
              collapsed="false"
            />
            <SidebarItem
              icon={ChartPie}
              label="Time"
              href="chart/time"
              collapsed="false"
            />
            <SidebarItem
              icon={ChartPie}
              label="Calendar"
              href="chart/calendar"
              collapsed="false"
            />
          </ul>
        </li>

        <SidebarItem
          icon={CalendarDays}
          label="Calendar"
          href="calendar"
          collapsed="false"
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          href="settings"
          collapsed="false"
        />
      </ul>
      <div className="mt-auto items-center px-3 py-5 rounded-sm text-xl flex hover:bg-[#5c85e7] cursor-pointer">
        <LogOut className="mr-2" />
        <button className="your-custom-class" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </aside>
  );
}
