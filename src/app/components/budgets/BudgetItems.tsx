import React from "react";
import BudgetItem from "@/app/components/budgets/BudgetItem";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import DashboardContainer from "@/app/components/dashboard/layout/DashboardContainer";

function BudgetItems() {
  const inferredDate = new Date();

  return (
    <DashboardContainer>
      <DashboardCard
        title="Budgets"
        subTitle="See more"
        redirectPath="/budgets"
      >
        <BudgetItem
          amount={660}
          maxAmount={1200}
          category_name={"Healthcare"}
          startDate={inferredDate}
          endDate={inferredDate}
        />
        <BudgetItem
          amount={200}
          maxAmount={800}
          category_name={"Dining out"}
          startDate={inferredDate}
          endDate={inferredDate}
        />
        <BudgetItem
          amount={600}
          maxAmount={1600}
          category_name={"Groceries"}
          startDate={inferredDate}
          endDate={inferredDate}
        />
      </DashboardCard>
    </DashboardContainer>
  );
}

export default BudgetItems;
