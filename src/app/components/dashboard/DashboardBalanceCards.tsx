import React from "react";
import BudgetBalanceCard from "@/app/components/dashboard/BudgetBalanceCard";
import {
  DashboardBalanceCardEnumType,
  DashboardBalanceCardsData,
} from "@/app/components/dashboard/types/dashboard";
const budgetCards: DashboardBalanceCardsData[] = [
  {
    type: DashboardBalanceCardEnumType.balance,
    value: 12500,
  },
  {
    type: DashboardBalanceCardEnumType.income,
    value: 8500,
  },
  {
    type: DashboardBalanceCardEnumType.expense,
    value: 4200,
  },
  {
    type: DashboardBalanceCardEnumType.net,
    value: 4300,
  },
];

function DashboardBalanceCards() {
  return (
    <>
      {budgetCards.map((card, id) => (
        <BudgetBalanceCard card={card} key={id} />
      ))}
    </>
  );
}

export default DashboardBalanceCards;
