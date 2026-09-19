import React from "react";
import {
  DashboardBalanceCardEnumType,
  DashboardBalanceCardProps,
} from "@/app/components/dashboard/types/dashboard";

function BudgetBalanceCard({ card }: DashboardBalanceCardProps) {
  const cardConfig = {
    [DashboardBalanceCardEnumType.net]: {
      label: "Net balance",
      color: "blue-500",
    },
    [DashboardBalanceCardEnumType.expense]: {
      label: "Monthly expenses",
      color: "red-500",
    },
    [DashboardBalanceCardEnumType.income]: {
      label: "Monthly income",
      color: "green-500",
    },
    [DashboardBalanceCardEnumType.balance]: {
      label: "Balance",
      color: "purple",
    },
  };
  console.log(card);
  const { label, color } = cardConfig[card.type];
  return (
    <div className="bg-primary-dark flex-1 rounded-xl pl-3 py-2 flex flex-col justify-center">
      <p className="text-base">{label}</p>
      <p className={`text-${color} text-3xl`}>${card.value}</p>
    </div>
  );
}

export default BudgetBalanceCard;
