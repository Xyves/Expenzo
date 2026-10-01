import { ComponentType, ReactNode, SVGProps } from "react";

export type ChildrenProps = {
  children: ReactNode;
};
export interface RecentExpensesColumnsInterface {
  key: keyof RecentExpensesContentInterface;
  label: string;
  className?: string | undefined;
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
  icon?:
    | React.ComponentType<React.HTMLAttributes<HTMLElement>>
    | ComponentType<SVGProps<SVGSVGElement>>
    | null;
  label?: string;
  href?: string;
  type?: string;
}
export interface RegisterUserResponse {
  registerUser: {
    id: number;
    username: string;
    email: string;
  };
}
