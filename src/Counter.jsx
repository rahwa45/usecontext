import {useContext} from "react"
import { CountContext } from "./App.jsx"


const Counter=()=>{
  const count=useContext(CountContext);
 
return(
    <>
   
    <h1>count: {count}</h1>
    
    </>
    
  )
}
export default Counter