/*Simple Counter
 1. Build a Counter component that displays a number and two buttons: Increment and Decrement. Use useState to store the count (start at 0). 
 Clicking the buttons should increase or decrease the displayed number by 1. - Done

2.Toggle Visibility
Create a ToggleMessage component that shows a short message (e.g., “Hello!”) only when a button labeled Show / Hide is toggled. 
Use useState with a boolean to control whether the message is visible.

3.Text Input Mirror
Implement a NameMirror component with a single text input and a paragraph below it. 
Use useState to track the input value and render the current input text live in the paragraph as the user types.

4.Resettable Counter
Make a ResetCounter component with a number display, a Increase button that adds 1 to the number, 
and a Reset button that sets the number back to an initial value (e.g., 5). Use useState and ensure the Reset button restores the initial value.

5.Add Item to List
Build a SimpleList component with a text input and an Add button. Use useState to hold an array of strings. 
When the user types text and clicks Add, append the text to the array and render the list below. (Keep this minimal — no deletion or reordering required.)
*/

import { useState } from "react";

function Usestate() {
  const name = "Aditya";
  const show = "SHOW / HIDE";

  let [counter, setCounter] = useState(0);
  let [toggle, setToggle] = useState(false);

  const Addvalue = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const Removevalue = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const Intialvalue = () =>{
    setCounter(0);
  }

  const Messagedisplay = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <h1>Use State current counter value : {counter}</h1>
      <button onClick={Addvalue}>ADD VALUE</button>
      <br />
      <button onClick={Removevalue}>REMOVE VALUE</button>
      <button onClick={Intialvalue}>RESET THE COUNTER</button>
      <button onClick={Messagedisplay}>{show}</button>
      {toggle && <h1>Hello my name is {name}</h1>}
    </>
  );
}

export default Usestate;
