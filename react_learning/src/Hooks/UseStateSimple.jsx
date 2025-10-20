/*Simple Counter
 1. Build a Counter component that displays a number and two buttons: Increment and Decrement. Use useState to store the count (start at 0). 
 Clicking the buttons should increase or decrease the displayed number by 1. - Done

2.Toggle Visibility
Create a ToggleMessage component that shows a short message (e.g., “Hello!”) only when a button labeled Show / Hide is toggled. 
Use useState with a boolean to control whether the message is visible. - Done

3.Text Input Mirror
Implement a NameMirror component with a single text input and a paragraph below it. 
Use useState to track the input value and render the current input text live in the paragraph as the user types. - Done

4.Resettable Counter
Make a ResetCounter component with a number display, a Increase button that adds 1 to the number, 
and a Reset button that sets the number back to an initial value (e.g., 5). Use useState and ensure the Reset button restores the initial value. - Done

5.Add Item to List
Build a SimpleList component with a text input and an Add button. Use useState to hold an array of strings. 
When the user types text and clicks Add, append the text to the array and render the list below. (Keep this minimal — no deletion or reordering required.) - Done
*/

import { useState } from "react";

function Usestate() {
  const name = "Aditya";
  const show = "SHOW / HIDE";
  let [inputValue, setInputValue] = useState("");

  let [counter, setCounter] = useState(0);
  let [toggle, setToggle] = useState(false);

  const Addvalue = () => {
    setCounter(counter + 1);
    name.
    console.log(counter);
  };

  const Removevalue = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const Intialvalue = () =>{
    setCounter(0);
    setInputValue("");
    setToggle(false);
  }

  const Messagedisplay = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const ReverseString = (inputValue) => {
    setInputValue(inputValue.split("").reverse().join(""))
  }

  return (
    <>
      <h1 className=" p-4 m-4">Use State current counter value : {counter}</h1>
      <button className=" p-4 m-4 rounded-4xl" onClick={Addvalue}>ADD VALUE</button>
      <button className=" p-4 m-4 rounded-4xl" onClick={Removevalue}>REMOVE VALUE</button>
      <br />
      <button className=" p-4 m-4 rounded-4xl" onClick={Intialvalue}>RESET THE COUNTER</button>
      <br />
      <button className=" p-4 m-4 rounded-4xl" onClick={Messagedisplay}>{show}</button>
      {toggle && <h1 className=" p-4 m-4">Hello my name is {name}</h1>}
      <input className=" p-4 m-4" type="text" placeholder="Enter the list here" onChange={(e) => ReverseString(e.target.value)}></input>
      <h1 className=" p-4 m-4">{inputValue}</h1>
    </>
  );
}

export default Usestate;
