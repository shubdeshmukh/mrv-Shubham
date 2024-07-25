import React from "react";
//import ChildComponent from "../ChildComponent";

class setStateParent extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            message:" "
        };
    }

    handleMessage=(msg)=>{
        this.setState({message:msg})

    }
    render(){
        return(
            <div>
                {/*<ChildComponent onMessage={this.handleMessage} />*/}
                <p>Message From Child:{this.state.message}</p>
            </div>

        );
    }

}
export default setStateParent;