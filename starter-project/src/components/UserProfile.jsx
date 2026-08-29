import { useContext } from "react";
import UserContext from "./Usercontext";



const UserProfile = () => {
  const {name} = useContext(UserContext);

  return (
    <div>
      <h2>Hello from {name}</h2>
    </div>
  );
};

export default UserProfile;