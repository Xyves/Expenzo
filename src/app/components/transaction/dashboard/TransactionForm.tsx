"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { closeModal, toggleModal } from "@/app/features/ui/uiSlice";
import {
  selectTransactionType,
  selectIsModalOpen,
} from "@/app/features/ui/uiSelectors";
import React, { useEffect, useRef } from "react";
import { Calendar, Pen } from "lucide-react";
import { format } from "date-fns";
export default function TransactionForm() {
  const todayISO = new Date().toISOString().split("T")[0];
  const todayFormatted = format(new Date(), "dd-MM-yy");
  const isTransactionModalOpen = useAppSelector(
    selectIsModalOpen("transactionModal")
  );
  const dispatch = useAppDispatch();
  const type = useAppSelector(selectTransactionType);
  const handleSubmitForm = () => {
    // check validation, give errors and red text below input, else
    // if type === "income "? run add income backend logic :"run expense logic"
    dispatch(closeModal({ modalName: "transactionModal" }));
  };
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(closeModal({ modalName: "selectCategoryModal" }));
      }
    }

    if (isTransactionModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTransactionModalOpen, dispatch]);
  if (!isTransactionModalOpen) return null;
  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-1/2 w-2xl bg-[#0f213d]  px-10 py-5 flex flex-col border-1 border-gray-500 rounded-xl"
      ref={modalRef}
    >
      <h1 className="text-center uppercase">
        New &nbsp;
        {type === "income" ? "Income" : "Expense"}
      </h1>
      <div className=" w-full flex items-center my-8">
        <div id="category" className="flex items-center w-1/2 ">
          <div className="bg-white size-12 rounded-full mt-auto mr-4"></div>
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="">Category</label>
            <button
              className="text-left bg-gray-600  py-3 px-2"
              onClick={() =>
                dispatch(
                  toggleModal({
                    modalName: "selectCategoryModal",
                    data: { transactionType: "expense" },
                  })
                )
              }
            >
              Select Category
            </button>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex-col flex">
            <label htmlFor="value ">Value</label>
            <input type="number" className="w-full bg-gray-600  py-3 px-2" />
          </div>
          <span className="inline mt-6 ml-1">zł</span>
        </div>
      </div>
      <div className=" w-full flex items-end mb-6">
        <div id="category" className="flex items-end w-1/2 ">
          <Calendar className="size-12 mr-4" />
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="">Date</label>
            <input
              className="text-left bg-gray-600   py-3 px-2"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-col flex">
            <label htmlFor="value">Time</label>
            <input
              type="time"
              className="w-full bg-gray-600  py-3 px-2"
              defaultValue={new Date().toTimeString().slice(0, 5)}
              placeholder={new Date().toTimeString().slice(0, 5)}
            />
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center mb-6">
        <div id="category" className="flex items-center w-full ">
          <Pen className="size-12 mr-4 mt-6" />
          {/* <div className="bg-white size-12 rounded-full mr-4 mb-4"></div> */}
          <div className="flex flex-col w-md  ">
            <label htmlFor="">Notes {"(optional)"}</label>
            <textarea
              name=""
              id=""
              className="bg-gray-600 w-full py-1 pl-2 pr-2 resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-6 justify-end gap-x-2">
        <button
          className="w-32 text-green-500 hover:bg-green-300 active:bg-green-400 py-2"
          onClick={() =>
            dispatch(closeModal({ modalName: "transactionModal" }))
          }
        >
          Cancel
        </button>
        <button
          className="w-32 bg-green-500 active:bg-green-800 hover:bg-green-600 py-2 text-white"
          onClick={handleSubmitForm}
        >
          Save
        </button>
      </div>
    </div>
  );
}
