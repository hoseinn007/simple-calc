import './App.scss';
import NumberKey from './components/NumberKey';

function App() {
  return (
    <div className="test"> 
    {Array.from(Array(9).keys()).map(index => (
      <NumberKey title={index + 1} onClick={(value)=>{console.log(value)}}/>
    ))}
      <NumberKey title={'C'}  onClick={(value)=>{console.log(value)}}/>
      <NumberKey title={0} isDouble onClick={(value)=>{console.log(value)}}/>
    </div>
  );
}

export default App;
