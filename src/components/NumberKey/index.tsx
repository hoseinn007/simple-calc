import React from 'react';
import './style.scss'

interface INumberKeyProps{
    title: number|string,
    isDouble?: boolean,
    onClick: (value:number|string)=>void,
}

const NumberKey: React.FC<INumberKeyProps> = props =>{
    return(<div onClick={()=>props.onClick(props.title)} className={`number-button ${props.isDouble ? 'double-width' : ''}`}>{props.title}
    </div>)
};

export default NumberKey;

