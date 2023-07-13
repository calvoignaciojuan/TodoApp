import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({children}){
    
    const {items: tasks,
        saveItems: saveTasks ,
        loading,
        error  
    } = useLocalStorage("Tasks_V1",[]);
    
    const [openModal,setOpenModal] = React.useState(false);
    const [textToFilter,setTextToFilter] = React.useState("");
    
    let totalTasks = tasks.length;
    let completedTasks = tasks.filter( function(item){
                            return(item.completed===true);
                        }).length;

    const deleteTask= (textToDelete) => {  
        const NewTasks = tasks.filter(item => item.textoTarea!==textToDelete);
        saveTasks(NewTasks);   
    };

    const completeTask = (textIdTask) =>{
        const NewTasks = tasks.map( (task) => {
        if(task.textoTarea === textIdTask){
                task.completed = !task.completed;                                                                                                                         
        } 
        return task;
        });

        saveTasks(NewTasks);   
    };

    const addTask = (textIdTask) =>{
        const newTask = {
            textoTarea:textIdTask,
            completed: false
        };
        tasks.push(newTask);
        saveTasks(tasks);        
    }



    const filteredTasks = tasks.filter( item => {
        const lowerTextTask = item.textoTarea.toLowerCase();
        const lowerTextFilter = textToFilter.toLowerCase(); 

        return(lowerTextTask.includes(lowerTextFilter));
    });     

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            filteredTasks,
            completedTasks,
            totalTasks,
            textToFilter,
            setTextToFilter,
            addTask,
            deleteTask,
            completeTask,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );

}

export {TodoContext, TodoProvider};