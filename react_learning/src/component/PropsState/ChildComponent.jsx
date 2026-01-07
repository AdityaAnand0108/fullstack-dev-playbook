import React from 'react'

function ChildComponent({name , company, currentScore, onScoreChange}) {
  return (
    <>
    <p>Hey I am {name} works in {company}</p>
    <h2>Goals Right now : {currentScore}</h2>
    <button onClick={onScoreChange}>Click me to score</button>
    </>
  )
}

export default ChildComponent