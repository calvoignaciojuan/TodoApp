import "./TodoSearch.css";


function TodoSearch({textToFilter,setTextToFilter}){

    return(
        <input  className="TodoSearch"
                placeholder="Filter"
                value = {textToFilter}
                onChange={ (event)=>{
                    setTextToFilter(event.target.value);
                }}
        />
    );
}

export { TodoSearch };