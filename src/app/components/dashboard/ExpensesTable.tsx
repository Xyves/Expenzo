import Link from "next/link";
import React from "react";

export default function ExpensesTable() {
  const data = [
    {
      amount: "213$",
      category: "Grocery",
      date: "01-01-2024",
      notes: "",
    },
    {
      amount: "243$",
      category: "Transport",
      date: "05-01-2023",
      notes: "",
    },
    {
      amount: "632$",
      category: "Rent",
      date: "21-03-2025",
      notes: "",
    },
    {
      amount: "167$",
      category: "Restaurant",
      date: "31-01-2018",
      notes: "",
    },
    {
      amount: "77$",
      category: "Fuel",
      date: "31-01-2016",
      notes: "",
    },
  ];
  return (
    <div className=" w-full flex-1 ">
      <div className="flex items-center text-2xl pt-2 mb-10 border-b-2  border-[#252525] pb-4">
        <p className="text-2xl">Recent expenses</p>
        <Link href="/transactions" className="ml-auto">
          <p className="ml-auto text-[#5c85e7]">See more</p>
        </Link>
      </div>
      <div className="flex flex-col text-sm w-full">
        {/* Header */}
        <div className="flex justify-between font-medium border-b pb-2">
          <div className="w-20">S.N</div>
          <div className="flex-1">Amount</div>
          <div className="flex-1">Category</div>
          <div className="flex-1">Notes</div>
          <div className="flex-1">Date</div>
        </div>

        {/* Rows */}
        {data.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <div className="w-20">{index + 1}.</div>
            <div className="flex-1 text-white">{item.amount}</div>
            <div className="flex-1">{item.category}</div>
            <div className="flex-1">{item.notes}</div>
            <div className="flex-1">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
