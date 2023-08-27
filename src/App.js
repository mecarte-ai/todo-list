import data from "./data";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [todolists, setTodolists] = useState(data);

  function handleToggle() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <TodoList items={todolists} />
      <button onClick={handleToggle}>Add todo</button>
      {showModal && <Modal onToggle={handleToggle} />}
    </div>
  );
}

function Modal({ onToggle }) {
  return (
    <div className="modal">
      <div className="backdrop" onClick={onToggle}></div>
      <div className="modal-content">Hello World!</div>
    </div>
  );
}

function TodoList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li className={item.completed ? "completed" : ""} key={item.id}>
          {item.content}
        </li>
      ))}
    </ul>
  );
}
