import React from "react";
import BudgetItem from "./BudgetItem";

export default function MainBudget() {
  const items = [
    {
      category_name: "Entertainment",
      startDate: "23.06.2025",
      endDate: "30.06.2025",
      amount: 324,
      maxAmount: 524,
    },
    {
      category_name: "Entertainment",
      startDate: "20.06.2025",
      endDate: "25.06.2025",
      amount: 124,
      maxAmount: 5524,
    },
    {
      category_name: "Entertainment",
      startDate: "25.06.2025",
      endDate: "32.06.2025",
      amount: 524,
      maxAmount: 824,
    },
  ];
  return (
    <div className=" w-1/2 mx-auto flex flex-col ">
      <div id="weekly " className=" bg-[#0c1b32] mb-10">
        <p className="text-center py-4 uppercase ">Weekly budget</p>
        {items.map((item, index) => {
          return (
            <BudgetItem
              category_name={item.category_name}
              amount={item.amount}
              maxAmount={item.maxAmount}
              startDate={item.startDate}
              endDate={item.endDate}
              key={index}
            />
          );
        })}
        <BudgetItem />
      </div>
      <div id="monthly" className=" bg-[#0c1b32]">
        <p className="text-center py-4 uppercase ">Montly budget</p>
        <BudgetItem />
        <BudgetItem />
      </div>
    </div>
  );
}
