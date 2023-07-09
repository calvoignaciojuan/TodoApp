import React from "react";
import {Icons} from "./Icons"

function CompleteIcon({completed,completeTask}){

    return(
        <Icons type={"Check"}
               color= {completed ? "green" : "gray"}
               clickEvent = {completeTask}
        />
    );

}

export {CompleteIcon};