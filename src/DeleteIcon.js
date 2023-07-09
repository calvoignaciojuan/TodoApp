import React from "react";
import { Icons } from "./Icons";

function DeleteIcon({deleteTask}){

    return(
        <Icons  type={"Delete"}
                color="gray"
                clickEvent={deleteTask}
        />
    );
}

export {DeleteIcon};