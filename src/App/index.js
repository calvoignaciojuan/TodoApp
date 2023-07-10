import React from 'react';
import { AppUI } from './AppUI';

import { useLocalStorage } from './useLocalStorage';

// const defaultTasks = [
//   {textoTarea:"Cortarme el pelo", completed: false},
//   {textoTarea:"Sacar la basura", completed: true},
//   {textoTarea:"Cortarme el pasto", completed: false},
//   {textoTarea:"Comprar comida", completed: false},  
// ]
// localStorage.setItem("Tasks_V1",JSON.stringify(defaultTasks));

function App() {

  const [tasks,saveTasks] = useLocalStorage("Tasks_V1",[]);
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
    const newTask = {textoTarea:textIdTask, completed: false};
    tasks.push(newTask);
  }

  const [textToFilter,setTextToFilter] = React.useState("");
  
  const filteredTasks = tasks.filter( item => {
    const lowerTextTask = item.textoTarea.toLowerCase();
    const lowerTextFilter = textToFilter.toLowerCase(); 

    return(lowerTextTask.includes(lowerTextFilter));
  });  

  return(

    <AppUI 
      filteredTasks = {filteredTasks}
      completedTasks =  { completedTasks }
      totalTasks = {totalTasks}
      textToFilter = {textToFilter}
      setTextToFilter =  {setTextToFilter}
      addTask =  {addTask}
      deleteTask ={deleteTask}
      completeTask ={completeTask}
    />

  )
  
}


export {App};
