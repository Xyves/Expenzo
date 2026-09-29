import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { toggleModal } from "@/app/features/ui/uiSlice";

export default function AddTransactionButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col fixed bottom-10 right-14 gap-3">
      <button
        className="size-16 text-2xl bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full"
        onClick={() =>
          dispatch(
            toggleModal({
              modalName: "transactionModal",
              data: { transactionType: "income" },
            }),
          )
        }
      >
        +
      </button>
      <button
        className="size-16 text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full"
        onClick={() =>
          dispatch(
            toggleModal({
              modalName: "transactionModal",
              data: { transactionType: "expense" },
            }),
          )
        }
      >
        -
      </button>
    </div>
  );
}
