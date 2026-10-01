"use client";
import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { ChildrenProps } from "../types";

interface DataContextType {
  date: Date;
  startDate: Date | null | undefined;
  endDate: Date | null | undefined;
  setStartDate: Dispatch<SetStateAction<Date | null | undefined>>;
  setDate: Dispatch<SetStateAction<Date>>;
  setEndDate: Dispatch<SetStateAction<Date | null | undefined>>;
}
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
  const [date, setDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null | undefined>(null);
  const [endDate, setEndDate] = useState<Date | null | undefined>(null);

  return (
    <DateContext.Provider
      value={{ date, setDate, startDate, setStartDate, endDate, setEndDate }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
