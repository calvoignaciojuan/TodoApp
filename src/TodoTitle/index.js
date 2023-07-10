import "./TodoTitle.css"

function TodoTitle({completedTasks,totalTasks}){

    
    if((completedTasks === totalTasks)&& (totalTasks!==0)){
    
        return(
            <h1 className="TodoTitle">
               VAMOSSS LOCOO HICISTE TODOO SEMENTAL ITALIANOOO!!
            </h1>
        );
    }else{
        return(
            <h1 className="TodoTitle">
               Completaste <span> {completedTasks} </span> de <span> {totalTasks} </span> TODOs
            </h1>
        );
    }

    
}

export { TodoTitle };