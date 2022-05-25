import { useState } from 'react';
import './App.scss';
import Indicator from './components/Indicator';
import KeypadWrapper from './components/KeypadWrapper';



const App=()=> {
  const initial:string|number=''
  const initialNumber:string=''
  const [inputNumber1, setInputNumber1]= useState<any>(initial)
  const [inputNumber2, setInputNumber2]= useState<any>(initial)
  const [input, setInput]=useState<any>('')
  const [operator, setOperator]= useState<string>(initialNumber)
  const [result,setResult]=useState<any>('')
  
  const onSelectHandler=(pushedButton:any)=>{

   
    setInput((prevInput:any)=>{
      return (prevInput + pushedButton)
    })
    if( pushedButton==='+'){
      setOperator(()=>{return(pushedButton)})
      // setInputNumber1((prevInputNumber1:any)=>{return(prevInputNumber1 + pushedButton)})
    }   
    if(operator!=='+'){
      setInputNumber1((prevInputNumber1:any)=>{return(prevInputNumber1 + pushedButton)})
    }
    if(operator==='+'){
      setInputNumber2((prevInputNumber2:any)=>{return(prevInputNumber2 + pushedButton)})
    }


  //   if(pushedButton === '+' ){
  //     switch(pushedButton){
  //       case '+': setInputNumber2((prevInputNumber2:any)=>{return(prevInputNumber2 + pushedButton)} ) ;break;
  //       // case '-': setInputNumber2((prevInputNumber2:string)=>{return(parseInt(inputNumber1) - parseInt(prevInputNumber2 + pushedButton))} ) ;break;
  //       // case '*': setInputNumber2((prevInputNumber2:string)=>{return(parseInt(inputNumber1) * parseInt(prevInputNumber2 + pushedButton))} ) ;break;
  //       // case '/': setInputNumber2((prevInputNumber2:string)=>{return(parseInt(inputNumber1) / parseInt(prevInputNumber2 + pushedButton))} ) ;break;
  //       // case '%': setInputNumber2((prevInputNumber2:string)=>{return(parseInt(inputNumber1) % parseInt(prevInputNumber2 + pushedButton))} ) ;break;
  //       // case 'C': setInput('') ;break;
  //     }
  //   }else{
      
  //   // console.log(inputNumber1)
  // }
    
    // console.log('a'+inputNumber);
    if(inputNumber2.length > 0){
      // console.log(inputNumber2)
      (setResult(()=>{return(parseInt(inputNumber1) + parseInt(inputNumber2))}) )
    }
  }

  const onOperatorHandler=(pushedOperator:string)=>{
    setOperator(pushedOperator);
    
  }

  return (
    <div className="test"> 
    <Indicator data={input}/>
    <Indicator data={result}/>
    <KeypadWrapper onSelect={onSelectHandler} onOperator={onSelectHandler}/>
    </div>
  );
}

export default App;
