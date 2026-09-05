import { ChartColumn, ChartPie } from "lucide-react";
import SidebarItem from "@/app/components/shared/Sidebar/SidebarItem";
import React from "react";

export default function SidebarChartsItems(props: {
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  dropDownHidden: boolean;
}) {
  return (
    <li
      aria-label="Charts"
      className="rounded-sm text-xl flex justify-center flex-col "
    >
      <li
        className="flex py-5 px-3 hover:bg-[#5c85e7] cursor-pointer"
        onClick={props.onClick}
      >
        <ChartColumn className="mr-2" />
        <p>Charts</p>
      </li>
      <ul className={`${!props.dropDownHidden ? "hidden" : "inline"} pl-5`}>
        <SidebarItem
          icon={ChartPie}
          label="Categories"
          href="chart/categories"
          collapsed="false"
        />
        <SidebarItem
          icon={ChartPie}
          label="Time"
          href="chart/time"
          collapsed="false"
        />
        <SidebarItem
          icon={ChartPie}
          label="Calendar"
          href="chart/calendar"
          collapsed="false"
        />
      </ul>
    </li>
  );
}
