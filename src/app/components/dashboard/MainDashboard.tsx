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

export default function MainDashboard() {
  const { user } = useUser();

  return (
    <div className="p-4 flex flex-col gap-8 h-full overflow-x-hidden overflow-y-auto pr-10 ">
      <div className="container mx-6 flex flex-col gap-6 ">
        {/* <div className="loader h-[14px] bg-[repeating-linear-gradient(-45deg,#93c5fd_0_15px,#1e3a8a_0_20px)] bg-left bg-[length:200%_100%] animate-diagonal w-full bg-green-50 text-red-400"></div> */}
        <div className="py-4  border-1 border-[#252525] bg-[#1b1b1b] rounded-xl">
          <p className="ml-2 pt-1 text-2xl">Summary</p>
          <div className="flex flex-1 h-auto gap-4 mx-4 pt-4 ">
            <div className="bg-emerald-300 flex-1 rounded-xl pl-3 pt-1 flex flex-col">
              <p className="text-base">Total Balance</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
            <div className="bg-emerald-400 flex-1 rounded-xl flex flex-col pl-3 pt-1">
              <p className="text-base">Total Income This Month</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
            <div className="bg-emerald-500 flex-1 rounded-xl pl-3 pt-1 flex flex-col">
              <p className="text-base">Total Expenses This Month</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
            <div className="bg-emerald-600 flex-1 rounded-xl pl-3 pt-1 flex flex-col">
              <p className="text-base">Net Balance</p>
              <p className="mt-auto text-3xl">$499</p>
            </div>
          </div>
        </div>
        <div className="  flex gap-6 h-auto">
          <div className=" w-2/4   border-1 border-[#252525] bg-[#1b1b1b] rounded-xl p-2">
            <ExpensesTable />
          </div>
          <div className="flex-1  border-1 border-[#252525] bg-[#1b1b1b] rounded-xl">
            <IncomeExpenseSummary />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="  w-3/6 border-1 border-[#252525] rounded-xl bg-[#1b1b1b]   py-2">
            <TopCategory />
          </div>
          <div className="flex-1 border-1 border-[#252525] rounded-xl bg-[#1b1b1b] w-auto">
            <p className="text-white">Quick Access</p>
          </div>
        </div>
      </div>
    </div>
  );
}
