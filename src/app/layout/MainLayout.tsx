import React from "react";
import RootLayout from "../layout";
import Sidebar from "../components/shared/Sidebar";
import { ChildrenProps } from "../types";
import TransactionForm from "../components/transaction/dashboard/TransactionForm";
import ModalPortalWrapper from "./ModalPortalWrapper";
import SelectCategory from "../components/transaction/dashboard/transactionForm/SelectCategory";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <RootLayout>
      <ClientLayoutWrapper>
        <div className="flex h-screen">
          <div className="w-72 flex ">
            <Sidebar />
          </div>
          <div className=" grow">{children}</div>
        </div>
      </ClientLayoutWrapper>
      <ModalPortalWrapper>
        <TransactionForm />
        <SelectCategory />
      </ModalPortalWrapper>
    </RootLayout>
  );
}
