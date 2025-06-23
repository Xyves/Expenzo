import { RootState } from "@/app/store";

export const selectIsModalOpen =
  (modalName: keyof RootState["ui"]["modals"]) => (state: RootState) =>
    state.ui.modals[modalName].isModalVisible;

export const selectTransactionType = (state: RootState) =>
  state.ui.modals.transactionModal.transactionType;
