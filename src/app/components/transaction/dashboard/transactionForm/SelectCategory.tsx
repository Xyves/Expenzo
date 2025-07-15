"use client";
import { selectIsModalOpen } from "@/app/features/ui/uiSelectors";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { Search } from "lucide-react";
import React from "react";

export default function SelectCategory() {
  const isSelectCategoryOpen = useAppSelector(
    selectIsModalOpen("selectCategoryModal")
  );
  const dispatch = useAppDispatch();
  // const type = useAppSelector(selectTransactionType);

  if (!isSelectCategoryOpen) return null;
  return (
    <div className="fixed top-1/2 left-1/2 -translate-1/2 w-1/4 bg-[#142c53] border-gray-600 border-1 rounded-2xl  px-6 py-5 flex flex-col h-60 z-20 backdrop-blur-2xl transition-all duration-300 backdrop-filter bg-opacity-50 ">
      <div className="flex w-3/4 mx-auto justify-center">
        <span>Select Category</span>
        <input type="text" placeholder="Search" />
        <Search />
      </div>
      <div id="categoriesList"></div>
      <div className="w-16 h-16 bg-yellow-600 rounded-full"></div>
    </div>
  );
}
