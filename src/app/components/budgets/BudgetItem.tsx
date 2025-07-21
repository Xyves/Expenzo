import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
export default function BudgetItem({
  category_name,
  startDate,
  endDate,
  amount,
  maxAmount,
}) {
  const percentage = (100 * amount) / maxAmount;
  return (
    <div className="flex items-center  text-white p-4 rounded-lg  gap-4 w-full">
      <div className="w-10 h-10">
        <img
          src="your-icon.png"
          alt="icon"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 ">
        <p className="text-lg font-semibold mb-1">{category_name}</p>
        <div className="flex justify-between text-sm mb-1">
          <p>{startDate}</p>
          <p>{Math.floor(percentage)}%</p>
          <p>{endDate}</p>
        </div>

        <div className="w-full  h-4 rounded-full mb-1 ">
          {/* <div
            className="bg-blue-400 h-2 rounded-full"
            style={{ width: "0%" }} */}
          <LinearProgress
            variant="determinate"
            value={percentage}
            style={{ height: ".95rem" }}
          />
          {/* ></div> */}
        </div>

        <div className="flex justify-between text-sm">
          <p>0,00 zł</p>
          <p>{amount}</p>
          <p>{maxAmount}</p>
        </div>
      </div>
    </div>
  );
}
