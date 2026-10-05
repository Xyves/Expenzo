import { SidebarProps } from "@/app/types";

import SidebarItem from "@/app/components/shared/Sidebar/SidebarItem";
import SidebarLogoutItem from "@/app/components/shared/Sidebar/SidebarLogoutItem";
import { SIDEBAR_ITEMS } from "@/utils/constants";

export default function MobileSidebar({
  isDropDownHidden,
  setIsDropDownHidden,
  handleSignOut,
}: SidebarProps) {
  return (
    <div className="h-full flex flex-col">
      <ul className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center">
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
                href={child.href}
                label={item.label}
                isDropdown={child.isDropdown}
                dropDownHidden={isDropDownHidden}
                setIsDropDownHidden={setIsDropDownHidden}
              />
            ))}
          </SidebarItem>
        ))}
        <div className="shrink-0 mt-auto">
          <SidebarLogoutItem onClick={handleSignOut} label="logout" />
        </div>
      </ul>
    </div>
  );
}
