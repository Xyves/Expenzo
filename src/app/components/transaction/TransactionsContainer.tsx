"use client";
import React, { ReactEventHandler, useState } from "react";
import SingleTransaction from "./SingleTransaction";
import { useDate } from "@/app/context/DateContext";
import { parseDMY } from "@/lib/dateUtils";

export default function TransactionsContainer() {
  const { date, startDate, endDate } = useDate();
  const [transactions, setTransactions] = useState([
    { id: 1, amount: 100, checked: false, date: "30.06.2025" },
    { id: 2, amount: -50, checked: false, date: "27.06.2025" },
    { id: 2, amount: -50, checked: false, date: "27.05.2025" },
    { id: 3, amount: 80, checked: false, date: "25.06.2025" },
  ]);

  const filtered = transactions.filter((tx) => {
    const txDate = parseDMY(tx.date);

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
      return txDate >= start && txDate <= end;
    }

    return (
      txDate.getMonth() === date.getMonth() &&
      txDate.getFullYear() === date.getFullYear()
    );
  });
  const allChecked = transactions.every((tx) => tx.checked);
  const sum = filtered
    .filter((tx) => tx.checked)
    .reduce((acc, tx) => acc + tx.amount, 0);
  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setTransactions(transactions.map((tx) => ({ ...tx, checked })));
  };
  const handleCheckOne = (id: number) => {
    setTransactions(
      transactions.map((tx) =>
        tx.id === id ? { ...tx, checked: !tx.checked } : tx
      )
    );
  };
  return (
    <div>
      <div className="flex w-full h-auto bg-gray-700 py-3 px-4 ">
        {filtered.length > 0 ? (
          <>
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-2 "
              checked={allChecked}
              onChange={handleCheckAll}
            />
            <span>Transactions: {filtered.length}</span>
          </>
        ) : (
          ""
        )}
        <div className="flex ml-auto">
          <span>Total:</span>
          <p
            className={`${
              sum > 0
                ? "text-green-600"
                : sum < 0
                ? "text-red-700"
                : "text-white"
            } `}
          >
            {sum} $
          </p>
        </div>
      </div>
      {filtered.length > 0 ? (
        filtered.map((tx) => (
          <div key={tx.id}>
            <SingleTransaction
              handleCheckOne={handleCheckOne}
              id={tx.id}
              amount={tx.amount}
              checked={tx.checked}
              date={tx.date}
            />
          </div>
        ))
      ) : (
        <div className="bg-[#0c1b32] py-12 w-full">
          <p className="text-center">No transactions found</p>
        </div>
      )}
    </div>
  );
}
