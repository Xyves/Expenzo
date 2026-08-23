import React from "react";
const budgetCards = [
  {
    type: "balance",
    label: "Balance",
    value: 12500,
    color: "",
  },
  {
    type: "income",
    label: "Monthly income",
    value: 8500,
    color: "green",
  },
  {
    type: "expenses",
    label: "Monthly expenses",
    value: 4200,
    color: "red",
  },
  {
    type: "net",
    label: "Net balance",
    value: 4300,
    color: "blue",
  },
];
function DashboardBalanceCards(props) {
  return (
    <>
      {budgetCards.map((card) => (
        <div className="bg-primary-dark flex-1 rounded-xl pl-3 py-2 flex flex-col justify-center">
          <p className="text-base">{card.label}</p>
          <p className={`text-${card.color}-500 text-3xl`}>${card.value}</p>
        </div>
      ))}
    </>
  );
}

export default DashboardBalanceCards;
