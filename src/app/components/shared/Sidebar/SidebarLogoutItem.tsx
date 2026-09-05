import { LogOut } from "lucide-react";

export default function SidebarLogoutItem(props: { onClick: () => void }) {
  return (
    <li className="items-center px-3 py-5 rounded-sm text-xl mt-auto flex hover:bg-[#5c85e7] cursor-pointer">
      <LogOut className="mr-2" />
      <button className="flex" onClick={props.onClick}>
        Logout
      </button>
    </li>
  );
}
