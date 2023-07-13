import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";



function TodoSearch(){

    const {textToFilter,setTextToFilter} = React.useContext(TodoContext);

    return(
        <input  className="TodoSearch"
                placeholder="Filter"
                value = {textToFilter}
                onChange={ (event)=>{
                    setTextToFilter(event.target.value);
                }}
        />
    );
}

export { TodoSearch };