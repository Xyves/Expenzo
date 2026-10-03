"use client";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import DesktopSidebar from "@/app/components/shared/Sidebar/DesktopSidebar";
import MobileSidebar from "@/app/components/shared/Sidebar/MobileSidebar";
import { SidebarItemInterface, SidebarProps } from "@/app/types";
import {
  CalendarDays,
  ChartPie,
  CreditCard,
  LayoutDashboard,
  Settings,
  BarChartIcon,
  LineChartIcon,
  PieChartIcon,
} from "/lucide-react";

export default function Sidebar() {
  const { signOut } = useClerk();
  const [isDropDownHidden, setIsDropDownHidden] = useState(true);
  const { user } = useUser();

  const sidebarItems: SidebarItemInterface[] = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "dashboard",
    },
    {
      icon: CreditCard,
      label: "Transactions",
      href: "transactions",
    },
    {
      icon: LayoutDashboard,
      label: "Reports",
      href: "reports",
    },
    {
      icon: ChartPie,
      label: "Budgets",
      href: "Budgets",
    },
    {
      label: "Charts",
      icon: PieChartIcon,
      isDropdown: true,
      children: [
        {
          icon: BarChartIcon,
          label: "Bar Chart",
          href: "bar-chart",
        },
        {
          icon: LineChartIcon,
          label: "Line Chart",
          href: "line-chart",
        },
        {
          icon: PieChartIcon,
          label: "Pie Chart",
          href: "pie-chart",
        },
      ],
    },
    {
      icon: CalendarDays,
      label: "Calendar",
      href: "calendar",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "settings",
    },
  ];

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/authentication" });
  };

  return (
    <aside className="bg-primary-dark  md:flex flex flex-col w-16 md:w-full w-16">
      <div className="hidden md:flex flex-col w-full min-h-screen">
        <DesktopSidebar
          sidebarItems={sidebarItems}
          isDropDownHidden={isDropDownHidden}
          setIsDropDownHidden={setIsDropDownHidden}
          handleSignOut={handleSignOut}
          username={user?.username}
        />
      </div>
      <div className="md:hidden flex flex-col min-h-screen">
        <MobileSidebar
          sidebarItems={sidebarItems}
          isDropDownHidden={isDropDownHidden}
          setIsDropDownHidden={setIsDropDownHidden}
          handleSignOut={handleSignOut}
          username={user?.username}
        />
      </div>
    </aside>
  );
}
