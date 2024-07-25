
import React,{useState} from "react";

const Counter = () => {

 //Declare a state variable called 'count and a function 'setCount' to update it
    const [count,setCount] = useState(0);

    // Function to handle increment action

    const increment = () =>{
        setCount(count  + 1);
    };

    // Function to handle decrement action

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop:'20px'}}>
            <h1>Counter Application</h1>
            <p>Current Count:{count}</p>
            <button onClick={increment} style={{marginRight: '10px'}}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    );
};

export default Counter;