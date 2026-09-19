import React from "react";
import Link from "/next/link";
import { DashboardCardProps } from "@/app/components/dashboard/types/dashboard";

DashboardCard.propTypes = {};

function DashboardCard({
  title,
  subTitle,
  children,
  redirectPath,
}: DashboardCardProps) {
  return (
    <div className="flex flex-col flex-1 pt-1  ">
      <div className="flex border-white w-full border-b-2  items-end py-4 px-3">
        <p className="text-2xl ">{title}</p>
        {subTitle && redirectPath && (
          <Link href={redirectPath || ""} className="ml-auto ">
            <p className="text-sm text-blue-300 text-[#5c85e7] hover:text-blue-700">
              {subTitle}
            </p>
          </Link>
        )}
      </div>

      <div className="h-full min-h-0 overflow-y-auto mt-10">{children}</div>
    </div>
  );
}

export default DashboardCard;
