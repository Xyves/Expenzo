import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { PieChart } from "@mui/x-charts";

export default function CategoryChart(
  chartData: {
    id?: string | undefined;
    value: number;
    label: string;
    color: string;
  }[],
) {
  return (
    <>
      <PieChart
        height={260}
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
          legend: {
            sx: { display: "none" },
          },
        }}
      />
      <Stack spacing={1} component="div" className="justify-center">
        {chartData.map((item) => (
          <Box
            key={item.id}
            className="flex items-center gap-1"
            component="div"
          >
            <Box
              sx={{
                width: 10,
                height: 20,
                borderRadius: "4px",
                backgroundColor: item.color,
              }}
            />
            <Typography
              variant="body2"
              color="#8d8d8d"
              sx={{ width: 150 }}
              component="span"
            >
              {item.label}
            </Typography>
            <Typography variant="body2" color="white">
              ${Number(item.value).toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
}
