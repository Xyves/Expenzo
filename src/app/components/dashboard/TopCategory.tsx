import { PieChart } from "@mui/x-charts";
import React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function TopCategory() {
  const chartData = [
    { id: 0, value: 6156, label: "Food & Grocery", color: "#3F51B5" }, // blue
    { id: 1, value: 5000, label: "Investment", color: "#FF9800" }, // orange
    { id: 2, value: 4356, label: "Shopping", color: "#4CAF50" }, // green
    { id: 3, value: 3670, label: "Travelling", color: "#9C27B0" }, // purple
    { id: 4, value: 2749, label: "Miscellaneous", color: "#F44336" }, // red
    { id: 5, value: 2162, label: "Bill & Subscription", color: "#00BCD4" }, // cyan
  ];
  return (
    <>
      <h2 className="text-2xl pb-6 px-2 w-full border-b-2  border-[#252525] ">
        Top Category{" "}
      </h2>
      <Box display="flex" gap={4} sx={{ backgroundColor: "#0c1b32", p: 3 }}>
        <PieChart
          height={300}
          width={300}
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
            legend: { hidden: true },
          }}
        />

        {/* Custom Legend */}
        <Stack spacing={1} justifyContent="center">
          {chartData.map((item) => (
            <Box key={item.id} display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 10,
                  height: 20,
                  borderRadius: "4px",
                  backgroundColor: item.color,
                }}
              />
              <Typography variant="body2" color="#8d8d8d" width={150}>
                {item.label}
              </Typography>
              <Typography variant="body2" color="white">
                ₹{item.value.toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
}
