import Todo from "./ToDo";
import Deadlines from "./Deadlines";

function App() {
  return (
    <div className="App">
      <Todo />
      <Deadlines title="idk" dueDate="2025-04-27T23:59:00" progress="80" />
    </div>
  );
}

export default App;
