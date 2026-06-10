// import React, { useEffect, useState } from "react";
// import "./App.css";

// const Todo = () => {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])

//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={()=>setTodos([...todos,task])}>add</button>
//       </div>
    
//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button >
//                 Edit
//               </button>

//               <button >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;


// import React, { useReducer } from 'react'

// const Todo = () => {
//     let intialData={
//         input:"",
//         todos:[]
//     }
//     function reducer(state,action){
//         if(action.type=="set_input"){
//             return{
//                 ...state,input:action.payload
//             }
//         }else if(action.type=="add_TODO"){
//             return{
//                 input:"",
//                 todos:[...state.todos,state.input]
//             }
//         }

//     }
//   let [state,disptach]= useReducer(reducer,intialData)
//   return (
//     <div>
//         <input onChange={(e)=>disptach({type:"set_input",payload:e.target.value})}/>
//         <button onClick={()=>disptach({type:"add_TODO"})}>add</button>
//         {
//             state.todos.map((a)=>{
//                 return(<>
//                 <h2>{a}</h2>
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default Todo


