import React, { useContext } from "react";

import { Container } from "./style";
import incomeImg from "../../assets/entrada.svg";
import outcomeImg from "../../assets/saida.svg";
import totalImg from "../../assets/Total.svg";
import { transactionContext } from "../../transactionsContext";

export function Summary() {
  const data = useContext(transactionContext);

  return (
    <Container>
      <div>
        <header>
          Entradas
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          Saídas
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          Total
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  );
}
