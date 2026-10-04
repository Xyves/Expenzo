import { SidebarItemInterface } from "@/app/types";
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

export const SIDEBAR_ITEMS: SidebarItemInterface[] = [
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
