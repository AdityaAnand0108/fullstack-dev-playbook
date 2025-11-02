import { useContext } from "react";
import { UserContext } from "./Hooks/UseContext";
import Login from "./Login";
import WelcomeCard from "./WelcomeCard";

function Button() {
  const { logged, display, setDisplay} = useContext(UserContext);
  return (
    <>
      <button
        className="
        px-6 py-3
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        text-white font-semibold
        rounded-xl
        m-10
        shadow-lg shadow-indigo-300/40
        hover:opacity-90 hover:shadow-xl
        active:scale-95
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
      "
        onClick={() => setDisplay(!display)}
      >
        {logged ? "LOGOUT" : "LOGIN"}
      </button>
      {display && <Login />}
      {!display && < WelcomeCard />}
    </>
  );
}

export default Button;
