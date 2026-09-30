import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};
export interface RecentExpensesColumnsInterface {
  key: keyof RecentExpensesContentInterface;
  label: string;
  className?: string;
}
export interface RecentExpensesContentInterface {
  amount: string;
  category: string;
  date: string;
}
export interface SidebarProps {
  isDropDownHidden: boolean;
  setIsDropDownHidden: (isHidden: boolean) => void;
  handleSignOut: () => void;
  username: string | null | undefined;
}
export interface SidebarItemInterface {
  icon: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  label: string;
  href: string;
}
