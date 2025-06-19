import React from "react";

export default function ExpensesTable() {
  const data = [
    {
      amount: "213$",
      category: "Grocery",
      date: "01-01-2024",
      notes: "",
    },
    {
      amount: "243$",
      category: "Transport",
      date: "05-01-2023",
      notes: "",
    },
    {
      amount: "632$",
      category: "Rent",
      date: "21-03-2025",
      notes: "",
    },
    {
      amount: "167$",
      category: "Restaurant",
      date: "31-01-2018",
      notes: "",
    },
    {
      amount: "77$",
      category: "Fuel",
      date: "31-01-2016",
      notes: "",
    },
  ];
  return (
    <div className=" w-full flex-1 ">
      <div className="flex items-center text-2xl mb-4">
        <p className="">Recent expenses</p>
        <p className="ml-auto">View all</p>
      </div>
      <div className="flex text-sm text-white">
        <ul className="flex-1">
          <li>S.N</li>
          <li>
            <ul className="[&>li]:py-2">
              {data.map((_, index) => (
                <li key={index}>{index + 1}.</li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="flex-1">
          <li>Amount</li>
          <li>
            <ul className="[&>li]:py-2 text-white">
              {data.map((item, index) => (
                <li key={index}>{item.amount}</li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Category */}
        <ul className="flex-1">
          <li>Category</li>
          <li>
            <ul className="[&>li]:py-2">
              {data.map((item, index) => (
                <li key={index}>{item.category}</li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Notes */}
        <ul className="flex-1">
          <li>Notes</li>
          <li>
            <ul className="[&>li]:py-2">
              {data.map((item, index) => (
                <li key={index}>{item.notes}</li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Date */}
        <ul className="flex-1">
          <li>Date</li>
          <li>
            <ul className="[&>li]:py-2">
              {data.map((item, index) => (
                <li key={index}>{item.date}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
