import React from 'react'
import './style.scss'

interface IOperatorKeyProps{
    operator: string,
    isDouble?:boolean,
    onClick:(value:string)=>void,
}

const OperatorKey: React.FC<IOperatorKeyProps> =props=>{
    return(<div onClick={()=>props.onClick(props.operator)} className={`operator-button ${props.isDouble? 'double-width':''}`}>{props.operator}</div>)
};

export default OperatorKey;