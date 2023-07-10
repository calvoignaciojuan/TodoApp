
import { TodoTitle } from '../TodoTitle';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../TodoButton';


function AppUI({filteredTasks,completedTasks,totalTasks,textToFilter,setTextToFilter,addTask,deleteTask,completeTask}){

    return (
        <>
          
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
    
        </>
      );

}

export {AppUI};