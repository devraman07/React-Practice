import Greetings from "./components/Greetings.jsx";
import Person from "./components/person.jsx";
import Products from "./components/Products.jsx";
import StyleCard from "./components/StyleCard.jsx";
import UserList from "./components/UserList.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Weather from "./components/weather.jsx";


import "./App.css";
import Count from "./components/count.jsx";
import Random from "./components/Random.jsx";
import TodoList from "./components/TodoList.jsx";
import Profile from "./components/Profile.jsx";
import DeleteAccount from "./components/DeleteAccount.jsx";
import UseEffect from "./components/UseEffect.jsx";
import FetchData from "./components/fetchData.jsx";
import UserContextProvider from "./components/UsercontextProvider.jsx";
import Calculator from "./components/calculator.jsx";


const App = () => {
  return (
    <div className="app">
      <Greetings />
      <Products />
      <UserList />
      <Person name="Raman" age={21} />
      <Weather />
      <UserStatus isLoggedin={true} isAdmin={true} />
      <StyleCard />
      <Count />
      <Random />
      <TodoList />
      <Profile />
      <DeleteAccount />
      <UseEffect />
      <FetchData />
      <UserContextProvider />
      <Calculator />
    </div>
  );
};

export default App;
