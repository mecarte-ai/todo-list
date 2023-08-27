import data from "./data";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [todolists, setTodolists] = useState(data);

  function handleToggle() {
    setShowModal(!showModal);
  }

  function handleAddItem(item) {
    setTodolists((items) => [...items, item]);
    handleToggle();
  }

  return (
    <div>
      <TodoList items={todolists} />
      <button onClick={handleToggle}>Add todo</button>
      {showModal && <Modal onToggle={handleToggle} onAddItem={handleAddItem} />}
    </div>
  );
}

function Modal({ onToggle, onAddItem }) {
  return (
    <div className="modal">
      <div className="backdrop" onClick={onToggle}></div>
      <div className="modal-content">
        <ModalForm onAddItem={onAddItem} />
      </div>
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

function ModalForm({ onAddItem }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) return;

    const newItem = {
      id: crypto.randomUUID,
      content: content,
      status: false,
    };

    onAddItem(newItem);
    setContent("");
  }

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
