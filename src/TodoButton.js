import "./TodoButton.css";

function CreateTodoButton({addTask}){
    return(
        <button type="button"
                onClick={addTask}
        >add task
        </button>
    );
}

export { CreateTodoButton };

