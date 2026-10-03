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

export interface SidebarItem {
  icon?:
    | React.ComponentType<React.HTMLAttributes<HTMLElement>>
    | ComponentType<SVGProps<SVGSVGElement>>
    | null;
  label?: string;
  href?: string;
  isDropdown?: boolean;
}

export interface SidebarItemInterface extends SidebarItem {
  children?: SidebarItem[];
  isDropdown?: boolean;
}

export interface SidebarProps {
  sidebarItems: SidebarItemInterface[];
  isDropDownHidden: boolean;
  setIsDropDownHidden: (isHidden: boolean) => void;
  handleSignOut: () => void;
  username: string | null | undefined;
}

export interface SidebarItemProps {
  icon?:
    | React.ComponentType<React.HTMLAttributes<HTMLElement>>
    | ComponentType<SVGProps<SVGSVGElement>>
    | null;
  label?: string;
  href?: string;
  type?: string;
  isDropdown?: boolean;
  setIsDropDownHidden: (isDropdown: boolean) => void;
  children?: React.ReactNode[];
  dropDownHidden?: boolean;
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface RegisterUserResponse {
  registerUser: {
    id: number;
    username: string;
    email: string;
  };
}
