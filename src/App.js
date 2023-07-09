import React from 'react';

import { TodoTitle } from './TodoTitle';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './TodoButton';

const defaultTasks = [
  {textoTarea:"Cortarme el pelo", completed: false},
  {textoTarea:"Sacar la basura", completed: true},
  {textoTarea:"Cortarme el pasto", completed: false},
  {textoTarea:"Comprar comida", completed: false},  
]

function App() {

  const [textToFilter,setTextToFilter] = React.useState("");
  const [tasks,setTasks] = React.useState(defaultTasks);


  let totalTasks = tasks.length;
  let completedTasks = tasks.filter( function(item){
                            return(item.completed===true);
                        }).length;

  const filteredTasks = tasks.filter( item => {
                              const lowerTextTask = item.textoTarea.toLowerCase();
                              const lowerTextFilter = textToFilter.toLowerCase(); 

                              return(lowerTextTask.includes(lowerTextFilter));
                        }); 

  const deleteTask= (textToDelete) => {  
    setTasks(tasks.filter(item => item.textoTarea!==textToDelete));
  };

  const completeTask = (textIdTask) =>{
    setTasks( tasks.map( (task) => {
                                      if(task.textoTarea === textIdTask){
                                          task.completed = !task.completed;                                                                                                                         
                                      } 
                                    return task;
                                    })); 
  };

  const addTask = (textIdTask) =>{
    const newTask = {textoTarea:textIdTask, completed: false};
    tasks.push(newTask);
  }

  return (
    <React.Fragment>
      
      <TodoTitle   completedTasks={completedTasks}
                   totalTasks={totalTasks} 
                  //  checkTotal = {()=>{checkTotal(completedTasks,totalTasks)}}
      />
      
      <TodoSearch  textToFilter={textToFilter}
                   setTextToFilter={setTextToFilter} 
      />

      <TodoList>
        {
          filteredTasks.map(item => 
            <TodoItem key={item.textoTarea} 
                      text={item.textoTarea} 
                      completed={item.completed} 
                      deleteTask={() => deleteTask(item.textoTarea)}
                      completeTask={()=> completeTask(item.textoTarea)}
            /> )
        }
       </TodoList>      
     
      <CreateTodoButton addTask={()=> addTask }/> 

    </React.Fragment>
  );
}


export default App;
