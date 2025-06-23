import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
export type TabType = "dashboard" | "transactions" | "categories";
export type AddTransactionType = "income" | "expense" | "idle";
interface UiState {
  isModalVisible: boolean;
  transactionType: AddTransactionType;
  selectedTab: TabType;
}
const initialState: UiState = {
  isModalVisible: false,
  transactionType: "idle",
  selectedTab: "dashboard",
};

const transactionModalSlice = createSlice({
  name: "transactionModal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isModalVisible = true;
      state.transactionType = action.payload.transactionType;
    },
    closeModal(state) {
      state.isModalVisible = false;
    },
    toggleModal(state, action) {
      state.isModalVisible = !state.isModalVisible;
      state.transactionType = action.payload.transactionType;
    },
  },
});
export const { openModal, closeModal, toggleModal } =
  transactionModalSlice.actions;
export const selectIsModalOpen = (state: RootState) =>
  state.transactionModal.isModalVisible;
export const selectTransactionType = (state: RootState) =>
  state.transactionModal.transactionType;
export default transactionModalSlice.reducer;
