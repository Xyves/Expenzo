"use client";
import React from "react";

export default function RecentExpensesContent({ items, columns }) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b md:text-lg text-sm py-5 overflow-hidden"
        >
          {columns.map((col) => (
            <div key={col.key} className={`flex-1 ${col.className || ""}`}>
              {item[col.key]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
