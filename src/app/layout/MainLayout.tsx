import React from "react";
import RootLayout from "@/app/layout";
import Sidebar from "@/app/components/shared/Sidebar/Sidebar";
import { ChildrenProps } from "../types";
import TransactionForm from "../components/transaction/dashboard/TransactionForm";
import ModalPortalWrapper from "./ModalPortalWrapper";
import SelectCategory from "../components/transaction/dashboard/transactionForm/SelectCategory";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <RootLayout>
      <ClientLayoutWrapper>
        <div className="flex h-screen overflow-y-hidden">
          <div className="w-16 md:w-72 flex h-full">
            <Sidebar />
          </div>
          <div className="grow h-full bg-[#202f4c]">{children}</div>
        </div>
      </ClientLayoutWrapper>
      <ModalPortalWrapper>
        <TransactionForm />
        <SelectCategory />
      </ModalPortalWrapper>
    </RootLayout>
  );
}
