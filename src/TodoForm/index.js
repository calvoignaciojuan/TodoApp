import "./TodoForm.css"
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const {
        setOpenModal,
        addTask,     
    } = React.useContext(TodoContext);
    
    const [textAreaText,setTextAreaText] = React.useState("");

    const onSubmit = (event)=>{
        event.preventDefault();
    }
    const onCancel = ()=>setOpenModal(false);

    const pressEnter = (event)=>{
       return (event.target.value.includes("\n"))          
    }

    const checkEvent = (event) =>{
        if (pressEnter(event)){
            onAddButton();
        }else{
            setTextAreaText(event.target.value)
        }
    }

    const onAddButton = ()=>{
        addTask(textAreaText);
        setOpenModal(false);
    } 

    return(
        <form 
            className="todoForm"
            onSubmit={onSubmit}>

            <label>Escribe tu nueva Tarea </label>
            <textarea 
                placeholder="Hacer las compras"
                onChange={checkEvent}>

            </textarea>
            <div className="todoButttonContainer">
                <button 
                    className="todoButton todoButton--cancelar"
                    onClick={onCancel}>                  
                    Cancelar
                </button>
                <button
                    type="submit" 
                    className="todoButton todoButton--añadir"
                    onClick={onAddButton}>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}