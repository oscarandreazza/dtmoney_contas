import { useState } from "react";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

import Modal from "react-modal";
import { TransactionProvider } from "./hooks/useTransactions";
Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function HandleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function HandleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={HandleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionProvider>
  );
}
