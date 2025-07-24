import MainTransactionsLayout from "@/app/components/transaction/MainTransactionsLayout";
import MainLayout from "@/app/layout/MainLayout";

import React from "react";

export default function page() {
  return (
    <MainLayout>
      <div className=" h-full bg-[#202f4c] w-3/4 mx-auto">
        <MainTransactionsLayout />
      </div>
    </MainLayout>
  );
}
