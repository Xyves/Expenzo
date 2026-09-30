import React, { ReactNode } from "react";

function DashboardContainer({ children }: { children: ReactNode }) {
  return (
    <div className=" flex-1 border border-primary-gray bg-primary-dark  rounded-xl ">
      {children}
    </div>
  );
}

export default DashboardContainer;
