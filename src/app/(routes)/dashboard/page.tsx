import MainDashboard from "@/app/components/dashboard/MainDashboard";
import MainLayout from "@/app/layout/MainLayout";
import React from "react";

export default function page() {
  return (
    <MainLayout>
      <div className=" h-full bg-[#0b0b0b]">
        <MainDashboard />
      </div>
    </MainLayout>
  );
}
