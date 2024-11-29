import React, {useState, createContext} from "react"
import Counter from "./Counter.jsx"

export const CountContext=createContext();
const App=()=>{
  const [count, setCount]=useState(0);

  const handleCount=()=>{
    setCount(c=>c+1);
  }
  return(
   <div className="container">

    <button onClick={handleCount}>Increase</button>
    <CountContext.Provider value={count}>

    <Counter count={count}/>

    </CountContext.Provider>
   
   </div>

   
    
   
  )
}
export default App