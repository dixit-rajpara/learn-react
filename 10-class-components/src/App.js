import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Aanandi" },
  { id: "u2", name: "Anant" },
  { id: "u3", name: "Dixit" },
  { id: "u4", name: "Raadhe" },
  { id: "u5", name: "Sakshi" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
