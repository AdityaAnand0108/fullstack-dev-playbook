import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [score, setScore] = useState(0);

    const handleScore = () => {

        setScore(score + 1 );
    }
    return (
        <>
            <h1>Hey I am the ParentComponent</h1>
            <h2>Goals Right now : {score}</h2>
            <button onClick={handleScore}>Click me to score</button>
            <ChildComponent name="Aditya techie" company="LTIMindtree" currentScore={score} onScoreChange={handleScore} />
        </>
    )
}

export default ParentComponent