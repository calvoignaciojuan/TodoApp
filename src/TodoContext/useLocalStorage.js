import React from "react";

function useLocalStorage(itemName,initialValue){

    const [items,setItem] = React.useState(initialValue); 
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
   
    React.useEffect(()=>{

        setTimeout(()=>{
            try {
                let storageItems = JSON.parse(localStorage.getItem(itemName));
                if(!storageItems){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                }else{                     
                    setItem(storageItems);     
                }  
                setLoading(false);  
            } catch (error) {
                setLoading(false);     
                setError(true);
            }   
        },4000);
    },[]);
    
    const saveItems = (items)=>{
      localStorage.setItem(itemName,JSON.stringify(items));
      setItem(items);
    };

    return({
        items,
        saveItems,
        loading,
        error});
  }

  export {useLocalStorage};



// const defaultTasks = [
//   {textoTarea:"Cortarme el pelo", completed: false},
//   {textoTarea:"Sacar la basura", completed: true},
//   {textoTarea:"Cortarme el pasto", completed: false},
//   {textoTarea:"Comprar comida", completed: false},  
// ]
// localStorage.setItem("Tasks_V1",JSON.stringify(defaultTasks));