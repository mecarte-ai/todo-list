export function TodoList({ items, onToggleStatus, onDeleteItem }) {
  return (
    <ul className="items">
      {items.map((item) => (
        <li className={item.completed ? "completed" : ""} key={item.id}>
          <button onClick={() => onDeleteItem(item.id)}>&times;</button>
          {item.content}
          <input
            type="checkbox"
            checked={item.completed}
            onChange={(e) => onToggleStatus(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}
