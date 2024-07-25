import React, {useState} from "react";

const ChildComponent = ({addItem}) =>{

    //Define the state variable 'input value' and the function to update is 'setInutValue'

    const[inputValue, setInputValue] = useState('');

    //Handler for changing the input value

    const handleChange = (event) =>{
        setInputValue(event.target.value);
    };

    // Handler for submitting the new item

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim()) {
            addItem(inputValue);
            setInputValue(''); // here, clear the input field after adding the item
            
        }
    };

    return(
        <form onSubmit={handleSubmit} style={{marginTop:'20px'}}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a new item"
                style={{padding: '10px', fontSize:'16px'}}
            />
            <button
                type="submit"
                style={{marginLeft:'10px', padding:'10px 20px', fontSize:'16px'}} 
            >
                Add Item
            </button>
        </form>
    );
};

export default ChildComponent;