import { useState } from "react";

export function ModalForm({ onAddItem }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) return;

    const newItem = {
      id: crypto.randomUUID(),
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
