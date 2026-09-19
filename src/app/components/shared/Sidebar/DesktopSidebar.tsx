import SidebarItem from "@/app/components/shared/Sidebar/SidebarItem";
import {
  CalendarDays,
  ChartPie,
  CreditCard,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { SidebarProps } from "@/app/components/shared/types/sidebar";
import AppLogo from "@/app/components/shared/AppLogo";
import SidebarChartsItems from "@/app/components/shared/Sidebar/SidebarChartsItems";
import SidebarLogoutItem from "@/app/components/shared/Sidebar/SidebarLogoutItem";
export default function DesktopSidebar({
  isDropDownHidden,
  setIsDropDownHidden,
  handleSignOut,
  username,
}: SidebarProps) {
  const sidebarItems = [
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
      type: "charts",
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

  return (
    <div
      aria-label="Dashboard"
      className="flex flex-col items-center mb-10 pt-7 h-screen"
    >
      <div className="flex flex-col items-center mx-auto mb-10">
        <AppLogo />
        <p className="text-2xl text-center">{username}</p>
      </div>

      <ul className="flex  flex-col h-full">
        {sidebarItems.map((item, index) => {
          if (item.type === "charts") {
            return (
              <SidebarChartsItems
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropDownHidden(!isDropDownHidden);
                }}
                dropDownHidden={isDropDownHidden}
              />
            );
          }

          return (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          );
        })}
        <SidebarLogoutItem onClick={handleSignOut} />
      </ul>
    </div>
  );
}
