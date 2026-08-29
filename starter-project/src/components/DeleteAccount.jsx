import { useState } from "react";
import Modal from "./Modal";

const DeleteAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    
    setShowModal(false);
  };

  return (
    <div>
      <h1>My tasks</h1>
      <p>Learn react portals</p>
      <button onClick={() => setShowModal(true)}>delete task</button>
      {showModal && (
        <Modal
          onCancel={() => setShowModal(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default DeleteAccount;