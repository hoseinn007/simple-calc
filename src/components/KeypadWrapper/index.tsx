import React from "react";
import NumberKeyWrapper from "../NumberKeyWrapper";
import OperatorKeyWrapper from "../OperatorKeyWrapper";
import './style.scss';

interface IKeypadWrapperProps{
    onSelect:(value:string|number)=>void,
}

const KeypadWrapper:React.FC<IKeypadWrapperProps>=props=>{
    return(<div className="keypad-wrapper">
        <NumberKeyWrapper onClick={props.onSelect} />
        <OperatorKeyWrapper onClick={props.onSelect}/>
    </div>)
};

export default KeypadWrapper;