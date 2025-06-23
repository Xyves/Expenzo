import { RootState } from "@/app/store";
export const selectIsModalOpen = (state: RootState) =>
  state.transactionModal.isModalVisible;
