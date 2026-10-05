import { LogOut } from "lucide-react";

export default function SidebarLogoutItem({
  onClick,
  label = "Logout",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <li
      className="items-center px-3 py-5 rounded-sm text-xl  flex hover:bg-[#5c85e7] cursor-pointer"
      onClick={onClick}
    >
      <LogOut className="mr-2" />
      <button className="grow flex items-center">
        <span className="hidden sm:block">{label}</span>
      </button>
    </li>
  );
}
