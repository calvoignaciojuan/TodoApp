import { TodoTitle } from './TodoTitle';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

import './App.css';


function App() {
  return (
    <div className="App">
      
      <TodoTitle/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>      
     
    </div>
  );
}


export default App;
