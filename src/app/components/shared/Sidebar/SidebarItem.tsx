import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItemProps } from "@/app/types";

export default function SidebarItem({
  icon: Icon,
  label,
  href,
  isDropdown,
  dropDownHidden,
  setIsDropDownHidden,
  children,
}: SidebarItemProps) {
  const pathname = usePathname();

  return (
    <>
      {isDropdown ? (
        <button
          className="px-3 py-5 rounded-sm text-xl flex items-center hover:bg-[#5c85e7] cursor-pointer justify-center md:justify-start"
          aria-label={label}
          onClick={(e) => {
            e.stopPropagation();
            setIsDropDownHidden(!dropDownHidden);
          }}
        >
          {Icon && <Icon className="h-5 w-5 mr-2 shrink-0" />}
          <span className="rounded-md bg-popover text-popover-foreground shadow-md transition-opacity pointer-events-none hidden sm:block">
            {label}
          </span>
        </button>
      ) : (
        <Link
          href={`/${href}`}
          aria-label={`${label}`}
          className={`${
            pathname.startsWith(`/${href}`) ? "text-[#00ffff]!" : ""
          } px-3 py-5 rounded-sm text-xl flex items-center hover:bg-[#5c85e7] cursor-pointer justify-center md:justify-start`}
        >
          {Icon && <Icon className="h-5 w-5 mr-2 shrink-0" />}
          <span className="rounded-md bg-popover text-popover-foreground shadow-md group-hover:opacity-100 transition-opacity pointer-events-none sm:block hidden">
            {label}
          </span>
        </Link>
      )}

      {isDropdown && (
        <ul
          className={`mt-1 transition-all duration-200 ease-in-out ${
            dropDownHidden ? "hidden" : "block"
          }`}
        >
          {children}
        </ul>
      )}
    </>
  );
}
