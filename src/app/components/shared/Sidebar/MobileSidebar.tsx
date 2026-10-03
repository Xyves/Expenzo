import { SidebarProps } from "@/app/types";

import SidebarItem from "@/app/components/shared/Sidebar/SidebarItem";
import SidebarLogoutItem from "@/app/components/shared/Sidebar/SidebarLogoutItem";

export default function MobileSidebar({
  sidebarItems,
  isDropDownHidden,
  setIsDropDownHidden,
  handleSignOut,
}: SidebarProps) {
  return (
    <>
      <ul className="flex  flex-col h-full items-center">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
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
                isDropdown={child.isDropdown}
                dropDownHidden={isDropDownHidden}
                setIsDropDownHidden={setIsDropDownHidden}
              />
            ))}
          </SidebarItem>
        ))}

        <SidebarLogoutItem onClick={handleSignOut} label="" />
      </ul>
    </>
  );
}
