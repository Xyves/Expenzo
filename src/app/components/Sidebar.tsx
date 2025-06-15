"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {
  const [isDropDownHidden, setIsDropDownHidden] = useState(false);
  const { user } = useUser();

  return (
    <aside className="  bg-[#1a1a1a] row-span-8  col-span-2">
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
        <li className="px-2 py-3 rounded-xl text-xl">Dashboard</li>
        <Link href="/transactions">
          <li
            aria-label="Transactions"
            className="px-2 py-3 rounded-xl text-xl bg-blue-700 "
          >
            Transactions
          </li>
        </Link>
        <Link href="expenses">
          <li
            aria-label="Transactions"
            className="px-2 py-3 rounded-xl text-xl"
          >
            Expenses
          </li>
        </Link>

        <li
          aria-label="Charts"
          className="px-2 py-3 rounded-xl text-xl"
          onClick={() => setIsDropDownHidden(!isDropDownHidden)}
        >
          Charts
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
        <Link href="/categories">
          <li aria-label="Categories" className="px-2 py-3 rounded-xl text-xl">
            Categories
          </li>
        </Link>
      </ul>
      <div>
        <ul>
          <li
            aria-label="Settings"
            className="px-2 py-3 rounded-xl text-xl"
          ></li>
          <li aria-label="theme" className="px-2 py-3 rounded-xl text-xl"></li>
        </ul>
      </div>
    </aside>
  );
}
