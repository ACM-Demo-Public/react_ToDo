import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [todoList,setTodoList] = useState([])
  const [task,setTask]= useState("")

  const onClickAdd = ()=>{
    setTodoList([...todoList,task]);
    setTask("");
  }
  const onClickTaskDelete = (index) =>{
setTodoList([...todoList.filter((item,thisIndex)=>thisIndex!=index)])
  }
  return (
    <div>

      <label>Task: </label>
      <input name="inputTask" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button id="btnAddTask" onClick={onClickAdd}>Add</button>
      <ul>
        {
          todoList && todoList.map((item,index)=>{
           return <li key={index}> {index} :- {item} <button onClick={()=>onClickTaskDelete(index)}> Delete </button></li>
          })
        }
        </ul>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
