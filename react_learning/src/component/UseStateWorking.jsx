import { useState } from 'react'

function UseStateWorking() {
    const [name, setName] = useState("");
    const [age, setAge]= useState("");
    const [submitData, setSubmitData]= useState({ name: "", age: ""});

    const handlesubmit = () => {
      setSubmitData({name, age})
    }
  return (
     <>
        <input 
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input 
            type="text"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={handlesubmit}>Submit</button>

        <p>
          Hey my name is {submitData.name} and my age is {submitData.age}
        </p>
      </>
  )
}

export default UseStateWorking