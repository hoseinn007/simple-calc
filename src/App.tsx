import './App.scss';
import NumberKeyWrapper from './components/NumberKeyWrapper';

function App() {
  return (
    <div className="test"> 
<NumberKeyWrapper onSelect={(value)=>{console.log(value)}}/>
    </div>
  );
}

export default App;
