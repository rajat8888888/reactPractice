import { useCallback, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Button1 } from './components/Button1';
function App() {
const [message,setMessage]=useState("hello user good morning");
const [num,setNum]=useState(0);

  const data=[

    {
    id:"A",
    text:1
    },
    {
    id:"B",
    text:2
    },
    {
    id:"C",
    text:3
    },
    {
    id:"D",
    text:4
    }
  ]
  const handleClick=useCallback(()=>{
    console.log("click from parents");
      setNum((prevNum)=>{
      console.log(prevNum);
      return prevNum+1

    })
    
  },[])
    
  const changeMessage=()=>{
    
   setMessage('hello user good after noon')

    console.log(num);
  }
  console.log("hello");
  return (
    <div className="App">
 {/* <Button data={{a:{b:{c:'nasted object'}}}} btn="clicked me" clickMe={handleClick}/> */}
    
     {/* {data.map((item,index)=>{
     return <Text key={item.id} data={item.text}/>
     })} */}

     <Button1 clickAction={handleClick}>u</Button1>

     <button onClick={changeMessage}>message</button>
     {message}<br/>
     {num}
    </div> 
  );
}

export default App;
