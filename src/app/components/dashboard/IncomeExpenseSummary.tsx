import { getLast7Days } from "@/lib/dateUtils";
import { BarChart } from "@mui/x-charts";
import React from "react";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import DashboardContainer from "@/app/components/dashboard/layout/DashboardContainer";

export default function IncomeExpenseSummary() {
  const pData = [400, 1040, 2060, 7780, 1890, 2390, 3490];
  const uData = [2400, 1398, 500, 3908, 2800, 3800, 1300];
  const xLabels = getLast7Days();
  return (
    <DashboardContainer>
      <div className="flex  rounded-xl  flex-col">
        <DashboardCard
          title="Last 7 days"
          subTitle="See more"
          redirectPath="/budgets"
        >
          <BarChart
            height={350}
            series={[
              { data: pData, label: "income", id: "pvId" },
              { data: uData, label: "expenses", id: "uvId" },
            ]}
            xAxis={[{ data: xLabels }]}
            colors={["green", "red"]}
            className=""
            yAxis={[{ width: 50 }]}
            sx={{
              "& .MuiChartsAxis-line": {
                stroke: "#fff !important",
                strokeWidth: 1,
              },

              "& .MuiChartsAxis-tick": {
                stroke: "#fff !important",
              },

              "& .MuiChartsAxis-tickLabel": {
                fill: "#fff !important",
                fontSize: "10px",
              },

              "& .MuiChartsGrid-line": {
                stroke: "rgba(255, 255, 255, 0.2)",
              },

              "& .MuiChartsLegend-label": {
                fill: "#fff",
                fontSize: "12px",
              },
            }}
          />
        </DashboardCard>
      </div>
    </DashboardContainer>
  );
}
