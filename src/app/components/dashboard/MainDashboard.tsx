"use client";
import React, { useEffect, useState } from "react";
import TopCategory from "./TopCategory/TopCategory";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import { createPortal } from "react-dom";
import AddTransactionButtons from "../transaction/dashboard/AddTransaction";
import IncomeExpenseSettings from "../transaction/dashboard/IncomeExpenseSettings";
import RecentExpensesTable from "./RecentExpensesTable";
import DashboardBalanceCards from "@/app/components/dashboard/DashboardBalanceCards";
import BudgetItems from "@/app/components/budgets/BudgetItems";

export default function MainDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="p-4 flex flex-col gap-8 h-full overflow-x-hidden overflow-y-auto ">
      {mounted && createPortal(<AddTransactionButtons />, document.body)}
      {mounted && createPortal(<IncomeExpenseSettings />, document.body)}
      <div className="container w-5/6 mx-auto flex flex-col gap-6 ">
        <div className="py-4   border-primary-gray  rounded-xl">
          <div className="flex flex-1 h-auto gap-4 pt-4 ">
            <DashboardBalanceCards />
          </div>
        </div>
        <div className="flex 2xl:flex-row gap-6 flex-col h-full">
          <RecentExpensesTable />
          <TopCategory />
        </div>
        <div className="flex gap-4 xl:flex-row flex-col">
          <IncomeExpenseSummary />
          <BudgetItems />
        </div>
      </div>
    </div>
  );
}
