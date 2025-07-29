"use client";
import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectIsModalOpen } from "../features/ui/uiSelectors";
import { ChildrenProps } from "../types";

export default function ClientLayoutWrapper({ children }: ChildrenProps) {
  const isModalOpen = useAppSelector(selectIsModalOpen("selectCategoryModal"));

  return (
    <div className={`transition-all h-full ${isModalOpen ? "blur-md" : ""}`}>
      {children}
    </div>
  );
}
