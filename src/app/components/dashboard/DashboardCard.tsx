import React from "react";
import PropTypes from "prop-types";

DashboardCard.propTypes = {};

function DashboardCard({ title, children }) {
  return (
    <div className="flex flex-col flex-1 pt-1  ">
      <p className="text-2xl border-b-2  border-[#fffff] px-3 py-4">{title}</p>
      <div className="h-full min-h-0 overflow-y-auto mt-10">{children}</div>
    </div>
  );
}

export default DashboardCard;
