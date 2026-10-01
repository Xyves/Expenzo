export interface BudgetItemProps {
  category_name: string;
  startDate: Date | string;
  endDate: Date | string;
  amount: number;
  maxAmount: number;
}
export interface DashboardCardProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  redirectPath: string;
}
export interface DashboardBalanceCardsData {
  type: DashboardBalanceCardEnumType;
  value: number;
}
export interface DashboardBalanceCardProps {
  card: DashboardBalanceCardsData;
}

export enum DashboardBalanceCardEnumType {
  net = 1,
  expense,
  income,
  balance,
}
