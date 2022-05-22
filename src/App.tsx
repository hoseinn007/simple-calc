import { useState } from 'react';
import './App.scss';
import Indicator from './components/Indicator';
import KeypadWrapper from './components/KeypadWrapper';



const App=()=> {
  const initial:string|number=''
  const initialNumber:number=0
  const [inputNumber, setInputNumber]= useState<string>(initial)
  const [numbers, setNumbers]= useState<number>(initialNumber)
  
  const onSelectHandler=(pushedNumber:string|number)=>{
    // console.log(pushedNumber)
    setInputNumber((prevInputNumber)=>{
      return (prevInputNumber + pushedNumber)
    });
    // console.log('a'+inputNumber);
  }


  const onOperatorHandler=(pushedOperator:string)=>{
    switch(pushedOperator){
      case '+': console.log('+ '+ parseInt(inputNumber));break;
      case '*': console.log('* '+ parseInt(inputNumber));break;
      case '/': console.log('/ '+ parseInt(inputNumber));break;
      case '%': console.log('% '+ parseInt(inputNumber));break;
      case '-': console.log('- '+ parseInt(inputNumber));break;
      default : console.log("not valid operation");break;
    }





    // console.log('a' + inputNumber)
    // console.log('b'+numbers)
    // setInputNumber('')
    // return(console.log('c'+numbers))//this item uploaded one step late
  
  }
  return (
    <div className="test"> 
    <Indicator data={inputNumber}/>
    <KeypadWrapper onSelect={onSelectHandler} onOperator={onOperatorHandler}/>
    </div>
  );
}

export default App;
