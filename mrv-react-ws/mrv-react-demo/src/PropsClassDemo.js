import React,{Component} from "react";

class PropsClassDemo extends Component
{
    render(){
        return <h1> Hello, {this.props.rollNumber}</h1>
    }
}
export default PropsClassDemo;