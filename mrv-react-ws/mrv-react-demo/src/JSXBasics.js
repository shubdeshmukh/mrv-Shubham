import React from "react";

function JSXBasics(){

    const name='Shubham';

    return(
        <div>
            <h2>
                JSX Basics
            </h2>
            <p> This is a simple JSX Example</p>
            <h3>Hello, {name} !</h3>

        </div>
    );
}

export default JSXBasics;