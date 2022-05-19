import React from "react";
import './style.scss'

interface IIndicatorProps{
    data:number|string,
}

const Indicator:React.FC<IIndicatorProps>=props=>{
    return(<div className="indicator">{props.data}</div>)
};

export default Indicator;