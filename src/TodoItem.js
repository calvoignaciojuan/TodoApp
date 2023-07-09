import "./TodoItem.css";
import {CompleteIcon} from "./CompleteIcon";
import {DeleteIcon} from  "./DeleteIcon";

function TodoItem({text,completed,deleteTask,completeTask}){
    return(
        <li className="TodoItem">
            
            <CompleteIcon completed={completed} completeTask={completeTask}/>
            
            <p className={`TodoItem-Text ${completed && "Text--Completed"}`}
               onClick={completeTask}>
               {text}
            </p>
            
            <DeleteIcon deleteTask={deleteTask}/>
    
        </li>       
    );
}

export { TodoItem };