"use client";
import { useClickOutside } from "@/app/hooks/UseClickOutside";
import { EllipsisVertical } from "lucide-react";
import React, { useRef, useState } from "react";

export default function SingleTransaction({
  handleCheckOne,
  amount,
  id,
  checked,
  date,
}: {
  handleCheckOne: (id: number) => void;
  amount: number;
  id: number;
  checked: boolean;
  date: string;
}) {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState("");
  useClickOutside(ref as React.RefObject<HTMLElement>, () =>
    setShowOptions(false)
  );
  const options = [
    "Duplicate Transaction",
    "Modify Transaction",
    "Delete Transaction",
  ];
  return (
    <div className="flex justify-between w-full bg-[#0c1b32] py-2 gap-y-4 px-2 ">
      <form action="" className="w-full flex justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="px-2 mx-2"
            onChange={() => handleCheckOne(id)}
            checked={checked}
          />
          <div className="h-2/4 bg-gray-50 w-10 rounded-full"></div>
          <span>Fuel</span>
        </div>
        <div className="flex items-center ">
          <div className="flex flex-col items-end ">
            <span>{amount}$</span>
            <span>{date}</span>
          </div>
          <input
            type="text"
            value={value}
            readOnly
            placeholder=""
            className="p-2 outline-none w-48 hidden"
          />
          <div className=" relative  items-center">
            <EllipsisVertical
              className="mx-2 cursor-pointer "
              onClick={() => setShowOptions(!showOptions)}
            />

            {showOptions && (
              <div className="absolute top-full left-0  bg-white border mt-1 rounded shadow z-10">
                {options.map((opt) => (
                  <div
                    key={opt}
                    className="p-2 hover:bg-[#0c1b32dc] cursor-pointer bg-[#0c1b32] "
                    onClick={() => {
                      setValue(opt);
                      setShowOptions(false);
                    }}
                    ref={ref}
                  >
                    {opt}
                  </div>
                ))}{" "}
              </div>
            )}
          </div>
          {/* <input type=""></input>
          <EllipsisVertical className="mx-4 my-2 w-10 h-1/2" /> */}
        </div>
      </form>
    </div>
  );
}
