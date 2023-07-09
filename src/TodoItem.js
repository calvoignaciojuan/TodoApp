import "./TodoItem.css";

function TodoItem({text,completed,deleteTask,completeTask}){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-Check ${completed && "Icon-Check--Completed"}`}>V</span>  
                <p className={`TodoItem-Text ${completed && "Text--Completed"}`}
                    onClick={completeTask}
                    > {text}
                </p>
            <span className="Icon Icon-Delete" 
                  onClick={deleteTask}
                  > X 
            </span>
        </li>       
    );
}

export { TodoItem };