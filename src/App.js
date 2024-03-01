
import './App.css';
import { Button } from './components/Button';
function App() {
  const handleClick=()=>{
    console.log("click from parents");
  }
  return (
    <div className="App">
<Button data={{a:{b:{c:'nasted object'}}}} btn="clicked me" clickMe={handleClick}/>
    </div>
  );
}

export default App;
