import React from "react";

function useLocalStorage(itemName,initialValue){

    let storageTasks = JSON.parse(localStorage.getItem(itemName));
    if(!storageTasks){
      storageTasks = initialValue;
    }  
    const [tasks,setTasks] = React.useState(storageTasks);

    function saveTasks(tasks){
      localStorage.setItem(itemName,JSON.stringify(tasks));
      setTasks(tasks);
    }

    return([tasks,saveTasks]);
  }

  export {useLocalStorage};