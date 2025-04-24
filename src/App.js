import Todo from "./ToDo";
import Deadlines from "./Deadlines";
import BudgetChart from "./Budget";
import Habit from "./Habits";
import Quote from "./Quote";
import Noti from "./Notifications";
function App() {
  return (
    <div className="App">
      <Quote />
      <Todo />
      <Deadlines />
      <BudgetChart />
      <Habit />
      <Noti />
    </div>
  );
}

export default App;
