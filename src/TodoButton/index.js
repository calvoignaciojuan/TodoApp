import "./TodoButton.css";
import { TodoContext } from "../TodoContext";
import React from "react";

function CreateTodoButton(){

    const{
          setOpenModal 
        } = React.useContext(TodoContext); 

    return(
        <button 
            className="buttonOpenForm" type="button"
            onClick={()=>setOpenModal((state)=>!state)}>
            +
        </button>
    );
}

export { CreateTodoButton };

