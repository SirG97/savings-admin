import { useState } from "react";
import WalletTabs from "../wallets/WalletTabs";
import TransactionsList from "./TransactionsList";

import AppLayout from "../../components/layout/AppLayout";

export default function Transactions() {
  return (
    <AppLayout>
      <TransactionsList />
    </AppLayout>
  );
}
