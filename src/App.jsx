import { useState } from "react";
import "./App.css";
// import Input from "./components/Input/Input";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "NOTE #1", completed: false },
    { id: 2, text: "NOTE #2", completed: true },
    { id: 3, text: "NOTE #3", completed: false },
  ]);

  const toggleComplete = (id) => {
    console.log(tasks);
    // console.log(tasks.filter((task) => task.id === id));
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      })
    );
    console.log(tasks);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <div className="header">
          <h1>To Do List</h1>
          <div className="controls">
            <div className="search-bar">
              <input type="text" placeholder="Pesquisar anotação..." />
            </div>
            <div className="buttons">
              <div className="filter">
                <button>ALL</button>
              </div>
              <div className="theme-toggle">
                <button>🌙</button>
              </div>
            </div>
          </div>
        </div>

        <div className="tasks">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span>{task.text}</span>
            </div>
          ))}
        </div>

        <div className="footer">
          <button className="add-button">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
