import React, { useContext } from 'react'
import { UserContext } from './Hooks/UseContext'
import Button from './Button'

function WelcomeCard() {
  const {user, display} = useContext(UserContext)

  console.log("user -> ", user)
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-sm w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-200">
        
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          👋
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome {user.name ? user.name : "to our Page" }
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          {user.profession ?  user.profession : "We're glad to see you. Please continue on Login button to Enter the detail." }
        </p>

        < Button />
      </div>
      {display && <Login />}
    </div>
  )
}

export default WelcomeCard