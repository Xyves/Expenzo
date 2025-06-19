import { getLast7Days } from "@/lib/dateUtils";
import { BarChart } from "@mui/x-charts";
import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function IncomeExpenseSummary() {
  const pData = [400, 1040, 2060, 7780, 1890, 2390, 3490];
  const uData = [2400, 1398, 500, 3908, 2800, 3800, 1300];
  const xLabels = getLast7Days();
  return (
    <div className="flex  rounded-xl  flex-col">
      <p className="px-4 my-2 flex text-xl w-full">
        <p>Last 7 days</p>
        <EllipsisVertical className="ml-auto " />
      </p>

      <BarChart
        height={200}
        series={[
          { data: pData, label: "income", id: "pvId" },
          { data: uData, label: "expenses", id: "uvId" },
        ]}
        xAxis={[{ data: xLabels }]}
        colors={["green", "red"]}
        className=""
        yAxis={[{ width: 70 }]}
        sx={{
          "& .MuiChartsAxis-tickLabel": {
            fill: "whitesmoke",
            fontSize: "10px",
          },
          "& .MuiChartsLegend-root": {
            color: "white",
            fontSize: "12px",
          },
          "& .MuiChartsAxis-root.MuiChartsAxis-xAxis .MuiChartsAxis-tickLabel":
            {
              fontSize: "10px",
            },
        }}
      />
    </div>
  );
}
