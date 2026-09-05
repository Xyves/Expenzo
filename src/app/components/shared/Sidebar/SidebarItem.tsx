import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ icon: Icon, label, href, collapsed }) {
  const pathname = usePathname();

  return (
    <Link
      href={`/${href}`}
      aria-label={`${label}`}
      className={`${
        pathname.startsWith(`/${href}`) ? "text-[#00ffff]!" : ""
      } px-3 py-5 rounded-sm text-xl flex items-center hover:bg-[#5c85e7] cursor-pointer `}
    >
      <Icon className="h-5 w-5 mr-2 shrink-0" />
      <span className="rounded-md bg-popover   text-popover-foreground shadow-md  group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </Link>
  );
}
