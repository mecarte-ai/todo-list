import data from "./data";
import "./App.css";
import { useState } from "react";
import { Modal } from "./Modal";
import { TodoList } from "./TodoList";

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

  function handleToggleStatus(id) {
    setTodolists((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setTodolists((items) => items.filter((item) => item.id !== id));
  }

  function handleDeleteAllItems() {
    setTodolists([]);
  }

  return (
    <div>
      <TodoList
        items={todolists}
        onToggleStatus={handleToggleStatus}
        onDeleteItem={handleDeleteItem}
      />
      <button onClick={handleToggle}>Add Item</button>
      <button onClick={handleDeleteAllItems}>Clear All</button>
      {showModal && <Modal onToggle={handleToggle} onAddItem={handleAddItem} />}
    </div>
  );
}
