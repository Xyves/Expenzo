import MainBudget from "@/app/components/budgets/MainBudget";
import MainLayout from "@/app/layout/MainLayout";
import React from "react";

export default function BudgetPage() {
  return (
    <MainLayout>
      <div className=" h-full bg-[#202f4c]">
        <MainBudget />
      </div>
    </MainLayout>
  );
}
