import { useState } from "react";
import UpdateName from "./UpdateName";
import UserContext from "./Usercontext";
import UserProfile from "./userProfile";


const UserContextProvider = () => {
  const [name, setName] = useState("Raman");

  return (
    <div>
      <UserContext.Provider value={{name, setName}}>
        <UserProfile />
        <UpdateName />
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
