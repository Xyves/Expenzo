"use client";
import React, { createContext, useState, useContext } from "react";
import { ChildrenProps } from "../types";
type DataContextType = {
  date: Date;
  startDate: Date | null | undefined;
  endDate: Date | null | undefined;
  setStartDate: (startDate: Date | null) => void;
  setDate: (date: Date) => void;
  setEndDate: (endDate: Date | null) => void;
};
const defaultValue: DataContextType = {
  date: new Date(),
  startDate: undefined,
  endDate: undefined,
  setDate: () => {},
  setStartDate: () => {},
  setEndDate: () => {},
};

const DateContext = createContext<DataContextType>(defaultValue);
export const DateProvider = ({ children }: ChildrenProps) => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null | undefined>(null);
  const [endDate, setEndDate] = useState<Date | null | undefined>(null);
  console.log("current data", date);
  return (
    <DateContext.Provider
      value={{ date, setDate, startDate, setStartDate, endDate, setEndDate }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
