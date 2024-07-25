import { useState } from "react";
import UseStateChild from "./useStateChild";

function UseStateParent(){
    const[message,setMessage]= useState('');

    const handleMessage=(msg)=> {
        setMessage(msg);
    }
    return(

<div>
    <UseStateChild onMessage={handleMessage}></UseStateChild>
    <p> Message from child: {message}</p>
</div>
    );
}

export default UseStateParent;