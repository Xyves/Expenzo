import {
  CircleMinus,
  CirclePlus,
  SquareArrowOutUpRight,
  SquarePlus,
} from "lucide-react";
import React from "react";

export default function QuickAccess() {
  return (
    <div>
      <p className="text-white text-2xl">Quick Access</p>
      <div className="flex flex-col   ">
        <div className="py-2 px-4 flex items-center">
          <CircleMinus className="ml-auto size-12" />
          <p className=" text-xl">New Expense</p>
          <SquareArrowOutUpRight className="ml-auto" />
        </div>
        <div className="py-2 flex">
          <CirclePlus />
          <p>New Income</p>
          <SquareArrowOutUpRight />
        </div>
        <div className="py-2 flex">
          <SquarePlus />
          <p>New Category</p>
          <SquareArrowOutUpRight />
        </div>
      </div>
    </div>
  );
}
