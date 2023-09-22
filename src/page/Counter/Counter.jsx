import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../redux/reducer/counterReducer';

const Counter = () => {
    const {counter} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [userInput,setUserInput] =useState(1);

    const increment =()=>{
        dispatch(incrementCounter(userInput))
    }
    const decrement =()=>{
        dispatch(decrementCounter(userInput))
    }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <p>Counter : {counter}</p>
        <input type="text" onChange={(e) => setUserInput(e.target.value)}/>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter