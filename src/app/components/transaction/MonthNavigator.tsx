"use client";
import { useDate } from "@/app/context/DateContext";
import { formatDate, formatMonthYear } from "@/lib/dateUtils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function MonthContainer() {
  const { date, setDate, startDate, setStartDate, endDate, setEndDate } =
    useDate();
  const now = new Date();
  console.log(now);
  const headerText =
    startDate && endDate
      ? `${formatDate(startDate)} - ${formatDate(endDate)}`
      : date instanceof Date
      ? formatMonthYear(date)
      : formatMonthYear(now);

  const handlePrev = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
    setStartDate(null);
    setEndDate(null);
  };

  const handleNext = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="bg-gray-600 py-3 px-5 flex flex-1 justify-between mb-10 rounded-2xl">
      <ArrowLeft onClick={handlePrev} />
      <p>{formatMonthYear(headerText)}</p>
      <ArrowRight onClick={handleNext} />
    </div>
  );
}
