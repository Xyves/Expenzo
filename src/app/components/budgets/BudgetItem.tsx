import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { BudgetItemProps } from "@/app/components/dashboard/types/dashboard";
import { formatDate } from "@/lib/dateUtils";
import { calculatePercentage } from "@/lib/calc";
export default function BudgetItem({
  category_name,
  startDate,
  endDate,
  amount,
  maxAmount,
}: BudgetItemProps) {
  const percentage = calculatePercentage(amount, maxAmount);

  return (
    <div className="flex items-center  text-white p-4 rounded-lg  gap-4 w-full">
      <div className="flex flex-col flex-1 ">
        <p className="text-lg font-semibold mb-1">{category_name}</p>
        <div className="flex justify-between text-sm mb-1">
          <p>{formatDate(startDate)}</p>
          <p>{Math.floor(percentage)}%</p>
          <p>{formatDate(endDate)}</p>
        </div>

        <div className="w-full  h-4 rounded-full mb-1 ">
          <LinearProgress
            variant="determinate"
            value={percentage}
            style={{ height: ".95rem" }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <p>0$</p>
          <p>{amount + "$"}</p>
          <p>{maxAmount + "$"}</p>
        </div>
      </div>
    </div>
  );
}
