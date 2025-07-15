"use client";
import React, { useEffect, useState } from "react";
import TransactionFilter from "./TransactionFilter";
import MonthContainer from "./MonthNavigator";
import { DateProvider } from "@/app/context/DateContext";
import TransactionsContainer from "./TransactionsContainer";
import { createPortal } from "react-dom";
import AddTransactionButtons from "./dashboard/AddTransaction";

export default function MainTransactions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <DateProvider>
      {mounted && createPortal(<AddTransactionButtons />, document.body)}

      <div className="p-4 flex flex-col gap-8 h-full overflow-x-hidden overflow-y-auto  w-full ">
        <div className="container w-full mx-auto flex gap-6 items-start ">
          <TransactionFilter />
          <div className="flex flex-col flex-1 rounded-2xl">
            <MonthContainer />
            <TransactionsContainer />
          </div>
        </div>
      </div>
    </DateProvider>
  );
}
