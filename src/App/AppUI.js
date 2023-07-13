
import { TodoTitle } from '../TodoTitle';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../TodoButton';
import { LoadingTodos } from '../LoadingTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { EmptyTodo} from "../EmptyTodo";
import React from 'react';

function AppUI(){

    const {
        loading,
        error,
        filteredTasks,     
        deleteTask,
        completeTask,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <>
          
          <TodoTitle />
          
          <TodoSearch />
    
          <TodoList>

            {loading   && <LoadingTodos />}
            {error     && <p>Error al cargar</p>}
            {(!loading && !error && filteredTasks.length === 0) && <EmptyTodo/>}

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
         
          <CreateTodoButton /> 
            
          {openModal &&  
           <Modal>
                <TodoForm />
           </Modal>  }
        

        </>
      );

}

export {AppUI};