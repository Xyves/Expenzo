import React from "react";

RecentExpensesColumns.propTypes = {};

function RecentExpensesColumns({ columns }) {
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
