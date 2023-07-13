import React from "react";
import "./TodoTitle.css"
import { TodoContext } from "../TodoContext";



function TodoTitle(){

    const {completedTasks,totalTasks} = React.useContext(TodoContext);

    const plural = () =>{
        return(totalTasks>1);
    }
    
    if((completedTasks === totalTasks) && (totalTasks!==0)){
    
        return(
            <h1 className="TodoTitle">
               Completaste todas las tareas!! :D
            </h1>
        );
    }else{
        return(
            <h1 className="TodoTitle">
               Completaste <span> {completedTasks} </span> de <span> {totalTasks} </span> {plural()? "Tareas" : "Tarea"}
            </h1>
        );
    }

    
}

export { TodoTitle };