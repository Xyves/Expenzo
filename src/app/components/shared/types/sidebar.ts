export interface SidebarProps {
  isDropDownHidden: boolean;
  setIsDropDownHidden: (isHidden: boolean) => void;
  handleSignOut: () => void;
  username: string | null | undefined;
}
