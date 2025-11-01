import Card from "./component/Cards.jsx";
import {  useState } from "react";
import { UserContext } from "./component/Hooks/UseContext";




function App() {
  const [color, setColor] = useState("white");
  
  return (
    <div
      className="text-center text-3xl font-bold w-full min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <button
        className="bg-red-800 text-white p-6 m-6 rounded-xl"
        onClick={() => setColor("Red")}
      >
        Red
      </button>
      <button
        className="bg-green-800 text-white p-6 m-6 rounded-xl"
        onClick={() => setColor("Green")}
      >
        Green
      </button>
      <UserContext.Provider value ={"Aditya Anand Mishra"}>
        <Card / >
      </UserContext.Provider>
    </div>
  );
}

export default App;
