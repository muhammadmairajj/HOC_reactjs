import "./App.css";
import { Button } from "./components/Button";
import { Parent } from "./components/Parent";
import { UsersLists } from "./components/UsersList";
import { withDataFetching } from "./hoc/DataFetchWithHOC";
import { withStyles } from "./hoc/StylesWithHOC";
// import { DashboardWithAuth } from './components/Dashboard';
// import Dashboard from './components/Dashboard';
// import { UserProfileWithCondition } from './components/UserProfile';
// import UserProfile from './components/UserProfile';

type UserProps = {
  name?: string;
  email?: string;
};

const UserFetch = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
const UserComp = withDataFetching(UsersLists, UserFetch);

const StyledButton = withStyles(Button, {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  border: "none",
  cursor:"pointer",
  width:"20%"
});

function App() {
  const user: UserProps = {
    name: "Muhammad Mairaj",
    email: "muhammadmairaj@gmail.com",
  };
  // const user: UserProps = {}

  const handleClick = () => {
    alert('Button clicked!');
};

  return (
    <div className="App">
      {/* Condition Rendering using HOC */}
      {/* <UserProfile user={user} /> */}
      {/* <UserProfileWithCondition user={user} /> */}

      {/* Authentication Example of HOC */}
      {/* <Dashboard />  */}
      {/* <DashboardWithAuth /> */}

      {/* Data Fetching Example of HOC */}
      {/* <UserComp /> */}

      {/* Styling Example of HOC */}
      {/* <StyledButton label="Click Me" onClick={handleClick} /> */}

      {/* Data Passed from Child to Parent Component */}
      <h1>Data Passed from Child to Parent Component</h1>
      <Parent />
    </div>
  );
}

export default App;
