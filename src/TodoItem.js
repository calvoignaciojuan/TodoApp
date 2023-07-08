import "./TodoItem.css";

function TodoItem({text,completed}){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-Check ${completed && "Icon-Check--Completed"}`}>V</span>  
                <p className={`TodoItem-Text ${completed && "Text--Completed"}`}> {text}</p>
            <span className="Icon Icon-Delete"> X </span>
        </li>       
    );
}

export { TodoItem };