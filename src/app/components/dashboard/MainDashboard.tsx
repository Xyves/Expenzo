"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { getLast7Days } from "@/lib/dateUtils";
import { BarChart } from "@mui/x-charts/BarChart";
import { EllipsisVertical, Settings } from "lucide-react";
import { PieChart } from "@mui/x-charts";
import TopCategory from "./TopCategory";
import ExpensesTable from "./ExpensesTable";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import QuickAccess from "./QuickAccess";

export default function MainDashboard() {
  const { user } = useUser();

  return (
    <div className="p-4 flex flex-col gap-8 h-full overflow-x-hidden overflow-y-auto pr-10 ">
      <div className="container mx-6 flex flex-col gap-6 ">
        {/* <div className="loader h-[14px] bg-[repeating-linear-gradient(-45deg,#93c5fd_0_15px,#1e3a8a_0_20px)] bg-left bg-[length:200%_100%] animate-diagonal w-full bg-green-50 text-red-400"></div> */}
        <div className="py-4   border-[#252525]  rounded-xl">
          <div className="flex flex-1 h-auto gap-4 mx-4 pt-4 ">
            <div className="bg-[#0c1b32] flex-1 rounded-xl pl-3 pt-1 flex flex-col">
              <p className="text-base">Total Balance</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
            <div className="bg-[#0c1b32] flex-1 rounded-xl flex flex-col pl-3 pt-1">
              <p className="text-base">Total Income This Month</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
            <div className="bg-[#0c1b32] flex-1 rounded-xl pl-3 pt-1 flex flex-col">
              <p className="text-base">Total Expenses This Month</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
            <div className="bg-[#0c1b32] flex-1 rounded-xl pl-3 pt-1 flex flex-col">
              <p className="text-base">Net Balance</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
          </div>
        </div>
        <div className="  flex gap-6 h-auto">
          <div className=" w-3/4   border-1 border-[#252525] bg-[#0c1b32] rounded-xl p-2">
            <ExpensesTable />
          </div>
          <div className="flex-1  border-1 border-[#252525] bg-[#0c1b32] rounded-xl ">
            <QuickAccess />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="  w-3/6 border-1 border-[#252525] rounded-xl bg-[#0c1b32]   py-4">
            <TopCategory />
          </div>
          <div className="flex-1 border-1  border-[#252525] rounded-xl bg-[#0c1b32]  px-6 py-4">
            <IncomeExpenseSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
