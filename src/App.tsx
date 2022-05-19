import { useState } from 'react';
import './App.scss';
import Indicator from './components/Indicator';
import KeypadWrapper from './components/KeypadWrapper';



const App=()=> {
  const initial:string|number=''
  const [input, setInput]= useState<string>(initial)
  
  const onSelectHandler=(pushedButton:string|number)=>{
    console.log(pushedButton)
    setInput((prevInput)=>{
      return (prevInput + pushedButton)
    });
  
  }
  return (
    <div className="test"> 
    <Indicator data={input}/>
    <KeypadWrapper onSelect={onSelectHandler}/>
    </div>
  );
}

export default App;
