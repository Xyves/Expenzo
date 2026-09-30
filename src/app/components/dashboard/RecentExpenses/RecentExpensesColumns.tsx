import React from "react";
import { RecentExpensesColumnsInterface } from "@/app/types";

RecentExpensesColumns.propTypes = {};

function RecentExpensesColumns({
  columns,
}: {
  columns: RecentExpensesColumnsInterface[];
}) {
  return (
    <div className="flex justify-between font-medium border-b pb-2 md:text-lg text-sm">
      {columns.map((col) => (
        <div key={col.key} className="flex-1">
          {col.label}
        </div>
      ))}
    </div>
  );
}

export default RecentExpensesColumns;
