"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/app/hooks/reduxHooks";
import { openModal } from "@/app/features/ui/uiSlice";

export default function AddTransactionButtons() {
  // const isOpen = useAppSelector(toggleModal);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col fixed bottom-0 right-10">
      <button
        className="size-16 text-2xl bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full"
        onClick={() => dispatch(openModal({ transactionType: "income" }))}
      >
        +
      </button>
      <button
        className="size-16 text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full"
        onClick={() => dispatch(openModal({ transactionType: "expense" }))}
      >
        -
      </button>
    </div>
  );
}
