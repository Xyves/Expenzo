"use client";
import { useUser } from "@clerk/nextjs";
import {
  CalendarDays,
  ChartPie,
  CreditCard,
  LayoutDashboard,
  Logs,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {
  const [isDropDownHidden, setIsDropDownHidden] = useState(false);
  const { user } = useUser();

  return (
    <aside className="  bg-[#1a1a1a] row-span-8  col-span-2 flex flex-col">
      <ul className="flex flex-col px-6 my-4 gap-4">
        <li aria-label="Overview" className="flex flex-col ">
          <Image
            height={100}
            width={100}
            src={"/images/logo.png"}
            alt="user profile"
            className="mx-auto"
          />
          <p className="text-2xl text-center">{user?.username}</p>
        </li>
        <li className="px-2 py-3 rounded-xl text-xl flex items-center">
          <LayoutDashboard className="mr-2" />
          <p>Dashboard</p>
        </li>
        <Link href="/transactions">
          <li
            aria-label="Transactions"
            className="px-2 py-3 rounded-xl text-xl bg-blue-700 flex items-center"
          >
            <Logs className="mr-2" />
            <p>Transactions</p>
          </li>
        </Link>
        <Link href="expenses">
          <li
            aria-label="Transactions"
            className="px-2 py-3 rounded-xl text-xl flex items-center"
          >
            <CreditCard className="mr-2" />
            <p>Expenses</p>
          </li>
        </Link>

        <li
          aria-label="Charts"
          className="px-2 py-3 rounded-xl text-xl flex justify-center flex-col"
          onClick={() => setIsDropDownHidden(!isDropDownHidden)}
        >
          <div className="flex">
            <ChartPie className="mr-2" />
            <p>Charts</p>
          </div>
          <ul className={`${!isDropDownHidden ? "hidden" : "inline"}`}>
            <Link href="/chart/categories">
              <li className="px-2 py-3 rounded-xl text-xl">Categories</li>
            </Link>
            <Link href="/chart/time">
              <li className="px-2 py-3 rounded-xl text-xl">Time</li>
            </Link>
            <Link href="/chart/calendar">
              <li className="px-2 py-3 rounded-xl text-xl">Calendar</li>
            </Link>
          </ul>
        </li>

        <Link href="/calendar">
          <li
            aria-label="Calendar"
            className="px-2 py-3 rounded-xl text-xl flex items-center"
          >
            <CalendarDays className="mr-2" />
            <p>Calendar</p>
          </li>
        </Link>
        <li aria-label="Settings" className="px-2 py-3 rounded-xl text-xl flex">
          <Settings className="mr-2" />
          <span>Settings</span>
        </li>
      </ul>
      <ul className="mt-auto">
        <li aria-label="theme" className="px-2 py-3 rounded-xl text-xl ">
          Logout
        </li>
      </ul>
    </aside>
  );
}
