import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Clock from 'react-digital-clock';

const App = () => {
    const [inputItem, setInputItem] = useState("");

    const deleteItems = (id) => {
        setItems((oldItems)=>{
            const updatedItems = oldItems.filter((arrElem, index)=>{
                return index!== id;
            })
            localStorage.setItem("todoItems", JSON.stringify(updatedItems));
            return updatedItems;
        })
    };

    const [Items, setItems] = useState(JSON.parse(localStorage.getItem("todoItems")) || []);
    console.log(typeof Items)
    
    const itemEvents = (event) =>{
        setInputItem(event.target.value);

    };

    const listOfItems = () =>{
        if(inputItem !== ""){
            setItems((oldItems)=>{
                let newListItems = [...oldItems, inputItem];
                localStorage.setItem("todoItems", JSON.stringify(newListItems));
                return newListItems;
            });
            setInputItem("");
        }
    };
    

    return(
        <>
        <div className="main_div">
                 
            <div className="center_div">

                <br/>
                <h1> ToDo List</h1>
                <br/>
                <form onSubmit={listOfItems}>
                    <input type="text" placeholder="Add Item" value={inputItem} onChange={itemEvents} required />
                    <button type="submit">+</button>
                </form>
                <div style={{ overflowY: 'scroll', height: '40vh', marginTop: '1rem' }} >
                {Items && Items.map((itemval, index)=>{
                  return <ToDoList 
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                  />
                })}
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default App;