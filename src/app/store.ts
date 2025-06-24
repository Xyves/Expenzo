import { configureStore } from "@reduxjs/toolkit";
import transactionModalReducer from "@/app/features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    transactionModal: transactionModalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
