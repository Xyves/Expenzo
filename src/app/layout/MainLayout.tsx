import React from "react";
import RootLayout from "../layout";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ChildrenProps } from "../types";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <RootLayout>
      <div className=" grid grid-rows-8  grid-cols-12 h-full ">
        <Sidebar />
        <div className=" col-start-3 col-end-13 row-span-8 bg-[#1a1a1a]  h-full pr-8  py-14">
          {children}
        </div>
        {/* </div> */}
      </div>
    </RootLayout>
  );
}
