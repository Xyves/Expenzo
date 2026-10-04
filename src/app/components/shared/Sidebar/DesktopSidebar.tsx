import SidebarItem from "@/app/components/shared/Sidebar/SidebarItem";
import { SidebarProps } from "@/app/types";
import AppLogo from "@/app/components/shared/AppLogo";
import SidebarLogoutItem from "@/app/components/shared/Sidebar/SidebarLogoutItem";
import { SIDEBAR_ITEMS } from "@/utils/constants";
export default function DesktopSidebar({
  isDropDownHidden,
  setIsDropDownHidden,
  handleSignOut,
  username,
}: SidebarProps) {
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
        {SIDEBAR_ITEMS.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isDropdown={item.isDropdown}
            dropDownHidden={isDropDownHidden}
            setIsDropDownHidden={setIsDropDownHidden}
          >
            {item.children?.map((child, childIndex) => (
              <SidebarItem
                key={childIndex}
                icon={child.icon}
                label={child.label}
                href={child.href}
                isDropdown={child.isDropdown}
                dropDownHidden={isDropDownHidden}
                setIsDropDownHidden={setIsDropDownHidden}
              />
            ))}
          </SidebarItem>
        ))}
        <SidebarLogoutItem onClick={handleSignOut} />
      </ul>
    </div>
  );
}
