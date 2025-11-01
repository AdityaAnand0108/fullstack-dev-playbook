// UserContextProvider.jsx
import React, { useState } from 'react'
import { UserContext } from './UseContext.jsx'

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", profession: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
