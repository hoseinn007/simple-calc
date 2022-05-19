import React from 'react'
import NumberKey from '../NumberKey';
import './style.scss'

interface INumberKeyWrapper{
    onClick:(value:number|string)=>void
}

const NumberKeyWrapper:React.FC<INumberKeyWrapper>=(props)=>{
    return(<div className='wrapper'>
            {Array.from(Array(9).keys()).map(index => (
      <NumberKey key={index} title={index + 1} onClick={props.onClick}/>
    ))}
      <NumberKey title={'C'}  onClick={props.onClick}/>
      <NumberKey title={0} isDouble onClick={props.onClick}/>
    </div>)
};

export default NumberKeyWrapper;