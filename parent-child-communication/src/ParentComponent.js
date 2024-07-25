import React, {useState} from "react";
import ChildComponennt from "./ChildComponent";

const ParentComponent = () => {

//Define the state variable 'item and the function to update it 'setItems'
    const [items, setItems] = useState([]);

    //Define the callback function to add a new item to the list

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div style={{textAlign: 'center', marginTop:'20px'}}>
            <h1>Item List</h1>
            <ul style={{listStyle: 'none', padding: 0}}>
                {items.map((item, index)=>(
                    <li key={index} style={{margin:'5px', fontSize:'18px'}}>
                        {item}
                    </li>
                ))}
            </ul>

            <ChildComponennt addItem={addItem} />
        </div>
    );


};

export default ParentComponent;