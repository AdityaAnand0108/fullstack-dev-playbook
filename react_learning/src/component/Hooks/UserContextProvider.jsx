// UserContextProvider.jsx
import React, { useState } from 'react'
import { UserContext } from './UseContext.jsx'

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", profession: "" });
  const [logged, setLogged] = useState(false);
  const [display, setDisplay] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, logged, setLogged, display, setDisplay }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
