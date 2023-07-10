import { ReactComponent as CompleteIcon } from "./check.svg";
import { ReactComponent as DeleteIcon} from "./delete.svg";
import "./Icons.css";


const IconsSVG = {
    "Delete": (color) => <DeleteIcon fill={color}  />,   
    "Check": (color) =>  <CompleteIcon fill={color} />
};

function Icons({type,color,clickEvent}){
    // className={`Icon Icon-${type} `}
    return(    
        <span className={`Icon Icon-${type} `} onClick={clickEvent}>    
            {IconsSVG[type](color)}
        </span>
    );

}

export {Icons};