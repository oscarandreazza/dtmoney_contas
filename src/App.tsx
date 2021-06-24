import { useState } from "react";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

import Modal from "react-modal";
import { transactionContext } from "./transactionsContext";

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
    <transactionContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </transactionContext.Provider>
  );
}
