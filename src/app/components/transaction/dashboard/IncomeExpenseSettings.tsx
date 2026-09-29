"use client";
import { selectIsModalOpen } from "@/app/features/ui/uiSelectors";
import { useAppSelector } from "@/app/hooks/reduxHooks";
import React from "react";

export default function IncomeExpenseSettings() {
  const isIncomeExpenseSettingsOpen = useAppSelector(
    selectIsModalOpen("IncomeExpenseModal"),
  );
  if (!isIncomeExpenseSettingsOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-1/2 w-1/4 bg-green-400  px-6 py-5 flex flex-col h-60">
      IncomeExpenseSettings
    </div>
  );
}
