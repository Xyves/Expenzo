import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
export type TabType = "dashboard" | "transactions" | "categories";
export type AddTransactionType = "income" | "expense" | "idle";
interface BaseModalState {
  isModalVisible: boolean;
  selectedTab: TabType;
}

interface TransactionModalState extends BaseModalState {
  transactionType: AddTransactionType;
}

interface IncomeExpenseModalState extends BaseModalState {}
interface categoryModal extends BaseModalState {}

type UiModalsState = {
  transactionModal: TransactionModalState;
  IncomeExpenseModal: BaseModalState;
  selectCategoryModal: BaseModalState;
};
export type ModalName =
  | "transactionModal"
  | "IncomeExpenseModal"
  | "selectCategoryModal";
interface UiState {
  modals: UiModalsState;
}
const initialState: UiState = {
  modals: {
    transactionModal: {
      isModalVisible: false,
      transactionType: "idle",
      selectedTab: "dashboard",
    },
    IncomeExpenseModal: {
      isModalVisible: false,
      selectedTab: "dashboard",
    },
    selectCategoryModal: {
      isModalVisible: false,
      selectedTab: "dashboard",
    },
  },
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        modalName: ModalName;
        data?: Partial<(typeof state.modals)[ModalName]>;
      }>
    ) => {
      const { modalName, data } = action.payload;
      state.modals[modalName].isModalVisible = true;
      if (data) {
        state.modals[modalName] = {
          ...state.modals[modalName],
          ...data,
        };
      }
    },

    closeModal: (state, action: PayloadAction<{ modalName: ModalName }>) => {
      const { modalName } = action.payload;
      state.modals[modalName].isModalVisible = false;
    },

    toggleModal: (
      state,
      action: PayloadAction<{
        modalName: ModalName;
        data?: Partial<TransactionModalState | IncomeExpenseModalState>;
      }>
    ) => {
      const { modalName, data } = action.payload;
      const modal = state.modals[modalName];
      modal.isModalVisible = !modal.isModalVisible;

      if (data) {
        state.modals[modalName] = {
          ...modal,
          ...data,
        };
      }
    },
  },
});

// const transactionModalSlice = createSlice({
//   name: "transactionModal",
//   initialState,
//   reducers: {
//     openModal(state, action) {
//       state.isModalVisible = true;
//       state.transactionType = action.payload.transactionType;
//     },
//     closeModal(state) {
//       state.isModalVisible = false;
//     },
//     toggleModal(state, action) {
//       state.isModalVisible = !state.isModalVisible;
//       state.transactionType = action.payload.transactionType;
//     },
//   },
// });
export const { openModal, closeModal, toggleModal } = uiSlice.actions;

export const selectModalState = (modalName: ModalName) => (state: RootState) =>
  state.ui.modals[modalName];

export default uiSlice.reducer;
