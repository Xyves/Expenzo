"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import {
  CalendarDays,
  ChartColumn,
  ChartPie,
  CreditCard,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
export default function Sidebar() {
  const [isDropDownHidden, setIsDropDownHidden] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <aside className="  bg-[#0c1b32] row-span-8  col-span-2 flex flex-col">
      <ul className="flex flex-col   ">
        <li aria-label="Dashboard" className="flex flex-col mb-10 pt-7">
          <Image
            height={100}
            width={100}
            src={"/images/logo.png"}
            alt="user profile"
            className="mx-auto"
          />
          <p className="text-2xl text-center">{user?.username}</p>
        </li>
      </ul>
      <ul className="">
        <Link href={"/dashboard"}>
          <li
            className={`${
              pathname.startsWith("/dashboard") ? "text-[#00ffff]" : ""
            } px-3 py-5 rounded-sm text-xl flex items-center hover:bg-[#5c85e7] cursor-pointer`}
          >
            <LayoutDashboard className="mr-2" />
            <p className="">Dashboard</p>
          </li>
        </Link>
        <Link href="/transactions">
          <li
            aria-label="Transactions"
            className={`${
              pathname.startsWith("/transactions") ? "text-[#00ffff]" : ""
            } px-3 py-5 rounded-sm text-xl  flex items-center hover:bg-[#5c85e7] cursor-pointer`}
          >
            <CreditCard className="mr-2" />

            <p className="">Transactions</p>
          </li>
        </Link>
        <Link href={"/dashboard"}>
          <li
            className={`${
              pathname.startsWith("/reports") ? "text-[#00ffff]" : ""
            } px-3 py-5 rounded-sm text-xl flex items-center hover:bg-[#5c85e7] cursor-pointer`}
          >
            <LayoutDashboard className="mr-2" />
            <p className="">Reports</p>
          </li>
        </Link>
        <Link href={"/budget"}>
          <li
            className={`${
              pathname.startsWith("/budget") ? "text-[#00ffff]" : ""
            } px-3 py-5 rounded-sm text-xl flex items-center hover:bg-[#5c85e7] cursor-pointer`}
          >
            <ChartPie className="mr-2" />
            <p className="">Budget</p>
          </li>
        </Link>
        <li
          aria-label="Charts"
          className="rounded-sm text-xl flex justify-center flex-col "
          onClick={() => setIsDropDownHidden(!isDropDownHidden)}
        >
          <li className="flex py-5 px-3 hover:bg-[#5c85e7] cursor-pointer">
            <ChartColumn className="mr-2" />
            <p>Charts</p>
          </li>
          <ul className={`${!isDropDownHidden ? "hidden" : "inline"} `}>
            <Link href="/chart/categories">
              <li
                className={`  ${
                  pathname.startsWith("/chart/categories")
                    ? "text-[#00ffff]"
                    : ""
                } px-3 py-5 rounded-sm text-xl hover:bg-[#5c85e7] cursor-pointer pl-7`}
              >
                Categories
              </li>
            </Link>
            <Link href="/chart/time">
              <li
                className={` ${
                  pathname.startsWith("/chart/time") ? "text-[#00ffff]" : ""
                } px-3 py-5 rounded-sm text-xl hover:bg-[#5c85e7] cursor-pointer pl-7`}
              >
                Time
              </li>
            </Link>
            <Link href="/chart/calendar">
              <li
                className={` ${
                  pathname.startsWith("/chart/calendar") ? "text-[#00ffff]" : ""
                } px-3 py-5 rounded-sm text-xl hover:bg-[#5c85e7] cursor-pointer pl-7`}
              >
                Calendar
              </li>
            </Link>
          </ul>
        </li>

        <Link href="/calendar">
          <li
            aria-label="Calendar"
            className={` ${
              pathname.startsWith("/calendar") ? "text-[#00ffff]" : ""
            } px-3 py-5 rounded-sm text-xl flex items-center hover:bg-[#5c85e7] cursor-pointer`}
          >
            <CalendarDays className="mr-2" />
            <p>Calendar</p>
          </li>
        </Link>
        <Link href="/settings">
          <li
            aria-label="Settings"
            className={`${
              pathname.startsWith("/settings") ? "text-[#00ffff]" : ""
            } px-3 py-5 rounded-sm text-xl flex hover:bg-[#5c85e7] cursor-pointer`}
          >
            <Settings className="mr-2" />
            <span>Settings</span>
          </li>
        </Link>
      </ul>
      <ul className="mt-auto">
        <SignOutButton
          onSignOut={() => {
            router.push("/authentication");
          }}
        >
          <li aria-label="theme" className="px-3 py-3 rounded-xl text-xl ">
            Logout
          </li>
        </SignOutButton>
      </ul>
    </aside>
  );
}
