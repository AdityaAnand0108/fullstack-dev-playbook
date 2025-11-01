import React, { useContext, useState } from "react";
import { UserContext } from "./Hooks/UseContext.jsx";

function Login() {
  const { user, setUser, setDisplay, logged, setLogged } = useContext(UserContext);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: name,
      profession: profession,
    });
    if(name && profession){
      setLogged(!logged)
    }
    setDisplay(false)
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="max-w-sm w-full bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          User Details
        </h2>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={name}
            onChange={(e)=> {setName(e.target.value)}} 
          />

          <input
            type="text"
            placeholder="Enter Profession"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={profession}
            onChange={(e)=> {setProfession(e.target.value)}}
          />

          <button className="bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition active:scale-95"
          onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
