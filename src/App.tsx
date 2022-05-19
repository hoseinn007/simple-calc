import './App.scss';
import Indicator from './components/Indicator';
import KeypadWrapper from './components/KeypadWrapper';



function App() {
  return (
    <div className="test"> 
    <Indicator/>
    <KeypadWrapper onSelect={(value)=>{console.log(value)}}/>
    </div>
  );
}

export default App;
