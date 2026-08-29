import { useContext, useState } from "react";
import UserContext from "./Usercontext";

const UpdateName = () => {
  const { name, setName } = useContext(UserContext);
  const [input, setInput] = useState("");

  const handleUpdate = () => {
    if (input.trim() !== "") {
      setName(input);
      setInput("");
    }
  };

  return (
    <div>
      <p>Current name: {name}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new name"
      />
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
};

export default UpdateName;
