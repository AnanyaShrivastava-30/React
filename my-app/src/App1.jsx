import { useEffect, useState } from "react"

const App1 = () => {
  let [count,SetCount]= useState(0)
  let [city,SetCity]=useState("goa")
  useEffect(()=>{
    console.log("heloo");
    
  },[])

  return(
    <div>
      <h2>{count}</h2>
      <h4>{city}</h4>
      <button onClick={()=>SetCity("manali")}>change</button>
      <button onClick={()=>SetCount(count+1)}>click</button>
    </div>
  )
}
export default App1
