import React from "react";

class setStateChild extends React.Component
{
    sendMessage = () => {
        this.props.onMessage("Hello from child")
    }
    render(){
        return(
            <button> </button>

        );
    }

}

export default setStateChild;