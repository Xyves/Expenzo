import { PieChart } from "@mui/x-charts";
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import DashboardContainer from "@/app/components/dashboard/layout/DashboardContainer";

export default function TopCategory() {
  const chartData = [
    { id: 0, value: 6156, label: "Food & Grocery", color: "#3F51B5" },
    { id: 1, value: 5000, label: "Investment", color: "#FF9800" },
    { id: 2, value: 4356, label: "Shopping", color: "#4CAF50" },
    { id: 3, value: 3670, label: "Travelling", color: "#9C27B0" },
    { id: 4, value: 2749, label: "Miscellaneous", color: "#F44336" },
    { id: 5, value: 2162, label: "Bill & Subscription", color: "#00BCD4" },
  ];
  return (
    <DashboardContainer>
      <DashboardCard title="Top Category">
        <Box
          component="section"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            backgroundColor: "#0c1b32",
            p: 3,
          }}
        >
          <PieChart
            height={260}
            width={260}
            series={[
              {
                paddingAngle: 3,
                cornerRadius: 3,
                innerRadius: 110,
                outerRadius: 130,
                data: chartData.map(({ id, value, label }) => ({
                  id,
                  value,
                  label,
                })),
                highlightScope: { fade: "global", highlight: "item" },
                faded: { innerRadius: 80, additionalRadius: -15 },
              },
            ]}
            slotProps={{
              legend: {
                sx: { display: "none" },
              },
            }}
          />

          <Stack spacing={1}>
            {chartData.map((item) => (
              <Box
                key={item.id}
                display="flex"
                alignItems="center"
                gap={1}
                className="flex gap-x-3 h-8"
              >
                <Box
                  sx={{
                    width: 10,
                    height: 20,
                    borderRadius: "4px",
                    backgroundColor: item.color,
                  }}
                />

                <Typography variant="body2" classes="font-bold" variant="body1">
                  {item.label}
                </Typography>
                <div className="ml-auto">
                  <Typography variant="body2">
                    ${item.value.toFixed(2)}
                  </Typography>
                </div>
              </Box>
            ))}
          </Stack>
        </Box>
      </DashboardCard>
    </DashboardContainer>
  );
}
