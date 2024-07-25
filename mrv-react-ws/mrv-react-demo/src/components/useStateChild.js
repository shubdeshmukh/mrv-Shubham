import React from "react";

function UseStateChild({onMessage})
{
    const sendMessage = () =>{
        onMessage('Hello from child !')
    }

    return(
<button onClick={sendMessage}> send Message  </button>

    );
}
export default UseStateChild;