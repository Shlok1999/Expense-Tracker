import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TranscationList } from './Components/TranscationList';
import { GlobalProvider } from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <hr />
      <Balance />
      <hr />
      <IncomeExpenses />
      <hr />
      <TranscationList />
      <hr />
      <AddTransaction />
    </GlobalProvider>

  );
}

export default App;
