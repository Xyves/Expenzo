import React from "react";
import RootLayout from "../layout";
import Sidebar from "../components/Sidebar";
import { ChildrenProps } from "../types";
import TransactionForm from "../components/transaction/dashboard/TransactionForm";
import ModalPortalWrapper from "./ModalPortalWrapper";
import SelectCategory from "../components/transaction/dashboard/transactionForm/SelectCategory";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <RootLayout>
      <ClientLayoutWrapper>
        <div
          className={` grid grid-rows-8  grid-cols-12 h-full transition-all duration-300 
          `}
        >
          <Sidebar />
          <div className=" col-start-3 col-end-14 row-span-8 bg-[#202f4c]  h-full  py-8">
            {children}
          </div>
        </div>
      </ClientLayoutWrapper>
      <ModalPortalWrapper>
        <TransactionForm />
        <SelectCategory />
      </ModalPortalWrapper>
    </RootLayout>
  );
}
