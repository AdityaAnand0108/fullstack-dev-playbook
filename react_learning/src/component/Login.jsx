import React, { useContext, useState } from "react";
import { UserContext } from "./Hooks/UseContext.jsx";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: name,
      profession: profession,
    });
  };
  return (
    <div className="flex flex-2">
      <input
        className="m-5"
        type="text"
        placeholder="Please enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="m-5"
        type="text"
        placeholder="Please enter your profession"
        value={profession}
        onChange={(e) => {
          setProfession(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
