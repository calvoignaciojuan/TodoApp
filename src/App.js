import React from 'react';

import { TodoTitle } from './TodoTitle';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './TodoButton';

const Tareas = [
  {textoTarea:"Cortarme el pelo", completed: false},
  {textoTarea:"Sacar la basura", completed: true},
  {textoTarea:"Cortarme el pasto", completed: false},
  {textoTarea:"Comprar comida", completed: false},  
]

function App() {
  return (
    <React.Fragment>
      
      <TodoTitle/>
      <TodoSearch/>

      <TodoList>
        {
          Tareas.map(item => <TodoItem key={item.textoTarea} text={item.textoTarea} completed={item.completed} /> )
        }
       </TodoList>      
     
      <CreateTodoButton/> 

    </React.Fragment>
  );
}


export default App;
