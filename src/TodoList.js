export function TodoList({ items, onToggleStatus, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li className={item.completed ? "completed" : ""} key={item.id}>
          {item.content}
          <input
            type="checkbox"
            checked={item.completed}
            onChange={(e) => onToggleStatus(item.id)}
          />
          <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
      ))}
    </ul>
  );
}
