import { createPortal } from "react-dom";

const Modal = ({ onCancel, onDelete }) => {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Are you sure?</p>
        <button onClick={onCancel}>cancel</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;