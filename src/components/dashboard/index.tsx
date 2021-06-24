import { Summary } from "../summary";
import { TransactionTable } from "../transactions";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
