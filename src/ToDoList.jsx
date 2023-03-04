import React from "react";

const ToDoList = (props) => {
    return ( 
    <>
    <div className="todo_style">
    <div style={{ display: 'flex', alignContent: 'left', verticalAlign: 'center', margin: '1rem' }}>
    <i className="fa fa-times" aria-hidden="true"
        onClick={()=>{
            props.onSelect(props.id);
        }}

    />
      <span>{props.text}</span>
   
      </div>
    </div>
    </>
    );
};

export default ToDoList;
