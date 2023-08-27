import { ModalForm } from "./ModalForm";

export function Modal({ onToggle, onAddItem }) {
  return (
    <div className="modal">
      <div className="backdrop" onClick={onToggle}></div>
      <div className="modal-content">
        <ModalForm onAddItem={onAddItem} />
      </div>
    </div>
  );
}
