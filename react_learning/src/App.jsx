import UserContextProvider from "./component/Hooks/UserContextProvider.jsx";
import ParentComponent from "./component/PropsState/ParentComponent.jsx";

function App() {
  return (
      <UserContextProvider>
        < h1>Aditya anand mishra</h1>
        <ParentComponent />
      </UserContextProvider>
  );
}

export default App;
