// // import { useEffect, useState } from "react"

// import { useEffect, useState } from "react"

// // const App = () => {
// //   let [count,SetCount]= useState(0)
// //   let [city,SetCity]=useState("goa")
// //   useEffect(()=>{
// //     console.log("heloo");
    
// //   },[])

// //   return(
// //     <div>
// //       <h2>{count}</h2>
// //       <h4>{city}</h4>
// //       <button onClick={()=>SetCity("manali")}>change</button>
// //       <button onClick={()=>SetCount(count+1)}>click</button>
// //     </div>
// //   )
// // }

// // // export default App
// // import React from 'react'
// // import App1 from './App1'

// // const App = () => {
// //   return (
// //     <div><App1/></div>
// //   )
// // }

// import './App.css'


// const App =() => {
//   let [ApiData,SetApiData]= useState([])
//   useEffect(()=>{
//     async function call() {
//       let res= await fetch('https://dummyjson.com/products')
//       let data= await res.json()
//       console.log(data);
      
//       SetApiData(data.products)
//     }
//     call()
//   },[])
//   return(
//     <div id="parent_div">
//       {
//         ApiData.map((a)=>{
//           return(
//             <div id="card">
//               <h1>{a.id}</h1>
//               <img src={a.thumbnail}  />
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// import React, { useEffect, useState } from 'react'

// const Task = () => {
//     let [search, SetSearch] = useState("")
//     let [ApiData, SetApiData] = useState([])

//     console.log(search);

//     async function apiCall() {
//         console.log("byeyeyeyeyeey");
//         if (!search.trim()) {
//             alert("kuch bhi nhi")
//             return;
//         }
//         let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
//         let data = await res.json()
//         console.log(data);
//         SetApiData(data.products)


//     }



//     useEffect(() => {
//         fetch('https://dummyjson.com/products').then((res) => {
//             return res.json()

//         }).then((data) => {
//             console.log(data);
//             SetApiData(data.products)


//         })
//     }, [])

//     function fun1(){
//       console.log("dortt");

//       let sortData=[...ApiData].sort((a,b)=>{
//         return a.price-b.price
//       })

//       SetApiData(sortData)
//       console.log(sortData,"hello");
//     }

//     function fun2(){
//       console.log("dortt");

//       let sortData=[...ApiData].sort((a,b)=>{
//         return b.price-a.price
//       })

//       SetApiData(sortData)
//       console.log(sortData,"hello");
//     }

//     return (
//         <div>
//             <input onChange={(e) => SetSearch(e.target.value)} />
//             <button onClick={apiCall}>click</button>
//             <button onClick={fun1}>low</button>
//             <button onClidk={fun2}>high</button>

//             {
//                 ApiData.map((a) => {
//                     return (<div>
//                         <img src={a.
//                             thumbnail
//                         } />
//                         <h3>{a.id}</h3>
//                         <h3>{a.price}</h3>
//                     </div>)
//                 })
//             }
//         </div>
//     )
// }

// export default Task


// import React from 'react'
// import NavBar from "./NavBar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route    path="/"   element={<Home/>}/>
//         <Route    path="/about"   element={<About/>}/>
//         <Route    path="/task"   element={<Task/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

// http://localhost:5173/



// google.com/insta/userID


import React from 'react'
import context from './Context'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App