import Button from "./component/Button.jsx";
import Card from "./component/Cards.jsx";
import UserContextProvider from "./component/Hooks/UserContextProvider.jsx";
import Login from "./component/Login.jsx";

function App() {
  return (
      <UserContextProvider>
        < Button />
      </UserContextProvider>
  );
}

export default App;
