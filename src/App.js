import { TodoTitle } from './TodoTitle';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './TodoButton';

import './App.css';
import React from 'react';

const Tareas = [
  {textoTarea:"Cortarme el pelo", completed: false},
  {textoTarea:"sacar la basura", completed: true},
  {textoTarea:"Cortarme el pasto", completed: false},
  {textoTarea:"comprar comida", completed: false},
  
]

function App() {
  return (
    <React.Fragment>
      
      <TodoTitle/>
      <TodoSearch/>

      <TodoList>
        {
          Tareas.map(item => <TodoItem key={item.textoTarea} text={item.textoTarea} /> )
        }
       </TodoList>      
     
      <CreateTodoButton/> 

    </React.Fragment>
  );
}


export default App;
