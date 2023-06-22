import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoItem completed={1} total={3}/>
        <TodoItem completed={2} total={3}/>
        <TodoItem completed={3} total={3}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem(props){

  return(
    
    <li>
      <span>V</span>  
      <p> {props.completed} tareas completas de {props.total}</p>
      <span>X</span>
    </li>
  );
}

export default App;
