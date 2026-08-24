import React from "react";
import RecentExpensesContent from "@/app/components/dashboard/RecentExpenses/RecentExpensesContent";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import RecentExpensesColumns from "@/app/components/dashboard/RecentExpenses/RecentExpensesColumns";
import DashboardContainer from "@/app/components/dashboard/layout/DashboardContainer";

export default function RecentExpensesTable() {
  const data = [
    {
      amount: "213$",
      category: "Grocery",
      date: "01-01-2024",
    },
    {
      amount: "243$",
      category: "Transport",
      date: "05-01-2023",
    },
    {
      amount: "632$",
      category: "Rent",
      date: "21-03-2025",
    },
    {
      amount: "167$",
      category: "Restaurant",
      date: "31-01-2018",
    },
    {
      amount: "77$",
      category: "Fuel",
      date: "31-01-2016",
    },
    {
      amount: "77$",
      category: "Fuel",
      date: "31-01-2016",
    },
    {
      amount: "77$",
      category: "Fuel",
      date: "31-01-2016",
    },
    {
      amount: "77$",
      category: "Fuel",
      date: "31-01-2016",
    },
  ];
  const columns = [
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", className: "text-white" },
    { key: "category", label: "Category" },
  ];
  return (
    <DashboardContainer>
      <div className="w-full flex-1   max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-indigo-400">
        <div className="flex items-center text-2xl   justify-between h-full ">
          {/*<RecentExp*/}
          {/*<Link href="/transactions" className="mr-3 ">*/}
          {/*  <p className="ml-auto text-[#5c85e7] hover:text-blue-700">See more</p>*/}
          {/*</Link>*/}
          <DashboardCard title="Recent expenses">
            <div className="flex h-full min-h-0 flex-col px-6">
              <RecentExpensesColumns columns={columns} />

              <div className="min-h-0 flex-1 overflow-y-auto">
                <RecentExpensesContent items={data} columns={columns} />
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardContainer>
  );
}
