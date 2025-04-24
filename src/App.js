import Todo from "./ToDo";
import Deadlines from "./Deadlines";
import BudgetChart from "./Budget";

function App() {
  return (
    <div className="App">
      <Todo />
      <Deadlines title="idk" dueDate="2025-04-27T23:59:00" progress="80" />
      <BudgetChart />
    </div>
  );
}

export default App;
