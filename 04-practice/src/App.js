import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, addUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    const user = {
      id: Math.random().toString(),
      name: uName,
      age: uAge,
    };
    addUsersList((prevList) => [...prevList, user]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
