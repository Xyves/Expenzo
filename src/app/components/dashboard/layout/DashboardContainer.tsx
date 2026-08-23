import React from "react";
import RecentExpensesTable from "@/app/components/dashboard/RecentExpensesTable";

function DashboardContainer({ children }) {
  return (
    <div className=" flex-1 border border-primary-gray bg-primary-dark  rounded-xl ">
      {children}
    </div>
  );
}

export default DashboardContainer;
