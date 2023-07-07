
function TodoItem({text,completed}){
    return(
        <ul>
            <span>V</span>  
                <p> {text}</p>
            <span>X</span>
        </ul>       
    );
}

export { TodoItem };