import Usestate from "./component/Hooks/UseStateSimple.jsx";
import Card from "./component/Cards.jsx";
import { useState } from "react";

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
      <Usestate />
      <Card
        username="Aditya Anand Mishra"
        introduction="I’m Aditya Anand Mishra, a Full Stack Developer with over 4 years of experience in designing and developing scalable, enterprise-grade web applications 
        using React.js, Java, Spring Boot, and MySQL. I specialize in end-to-end application development — from architecting backend services and optimizing databases to 
        crafting responsive, high-performance frontends."
      />
    </div>
  );
}

export default App;
