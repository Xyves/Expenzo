"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import TopCategory from "./TopCategory";
import ExpensesTable from "./ExpensesTable";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import { createPortal } from "react-dom";
import AddTransactionButtons from "../transaction/dashboard/AddTransaction";
import IncomeExpenseSettings from "../transaction/dashboard/IncomeExpenseSettings";
import BudgetItem from "../budgets/BudgetItem";
import Link from "next/link";
import { getToken, verifyToken } from "@clerk/clerk-sdk-node";

export default function MainDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <div className="p-4 flex flex-col gap-8 h-full overflow-x-hidden overflow-y-auto ">
      {mounted && createPortal(<AddTransactionButtons />, document.body)}
      {mounted && createPortal(<IncomeExpenseSettings />, document.body)}
      <div className="container w-5/6 mx-auto flex flex-col gap-6 ">
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
          <div className=" w-1/2   border-1 border-[#252525] bg-[#0c1b32] rounded-xl p-2">
            <ExpensesTable />
          </div>
          <div className="  flex-1 border-1 border-[#252525] rounded-xl bg-[#0c1b32]   py-4">
            <TopCategory />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 border-1 w-3/4 border-[#252525] rounded-xl bg-[#0c1b32]  ">
            <IncomeExpenseSummary />
          </div>
          <div className="flex-1 border-1 w-1/4 border- rounded-xl bg-[#0c1b32] hover:bg-[#0a1d43] active:bg-[#0a1d48] border-[#2c2c2c]">
            <Link href="/budgets">
              <h3 className="py-4 px-4 text-2xl border-b-2  border-[#2c2c2c] ">
                Budgets
              </h3>
              <BudgetItem />
              <BudgetItem />
              <BudgetItem />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
