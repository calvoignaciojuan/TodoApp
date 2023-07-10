import React from "react";
import {Icons} from "./index"

function CompleteIcon({completed,completeTask}){

    return(
        <Icons type={"Check"}
               color= {completed ? "green" : "gray"}
               clickEvent = {completeTask}
        />
    );

}

export {CompleteIcon};