"use client";
import { useDate } from "@/app/context/DateContext";
import { useClickOutside } from "@/app/hooks/UseClickOutside";
import { addDays } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TransactionFilter() {
  const { startDate, setStartDate, endDate, setEndDate, setDate } = useDate();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const onChange = (dates: any[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log("start:", start, "end:", end);
    if (start) {
      setDate(start);
    }
    if (end) {
      setIsModalVisible(false);
    }
  };
  const changeModalVisiblity = () => {
    setIsModalVisible(!isModalVisible);
  };

  useClickOutside(pickerRef as React.RefObject<HTMLElement>, () =>
    setIsModalVisible(false)
  );

  return (
    <div className="flex flex-col bg-[#0c1b32]  w-1/4 gap-y-4 h-auto rounded-xl px-3">
      <form action="">
        <h3 className="text-center my-3">Filters</h3>
        <div className="flex flex-col px-2">
          <label htmlFor="category">Category</label>
          <button className="bg-gray-600 py-4 px-1">
            {!startDate ? startDate : ""}
          </button>
        </div>
        <div className="relative">
          <div className="flex flex-col px-2 ">
            <label htmlFor="date">From / Till</label>
            <button
              className="bg-gray-600 py-4 px-1 text-sm"
              onClick={changeModalVisiblity}
              type="button"
            >
              {startDate?.toLocaleDateString("en-GB")}{" "}
              {endDate ? `– ${endDate.toLocaleDateString("en-GB")}` : ""}
            </button>
          </div>
          <div
            className={`${
              isModalVisible ? "" : "hidden"
            } absolute top-full left-0 z-10`}
            ref={pickerRef}
          >
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              withPortal={true}
            />
          </div>
        </div>
        <div className="px-2 my-4">
          <h2>Types</h2>
          <div aria-label="expense" className="flex px-2">
            <input type="checkbox" name="" id="" defaultChecked />
            <label htmlFor="expense">Expenses</label>
          </div>
          <div aria-label="income" className="flex px-2">
            <input type="checkbox" name="" id="" defaultChecked />
            <label htmlFor="income">Incomes</label>
          </div>
          <button
            className="text-blue-700 ml-auto flex py-2 px-5 hover:bg-gray-900 my-2"
            type="reset"
            onClick={() => {
              setStartDate(null);
              setEndDate(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
