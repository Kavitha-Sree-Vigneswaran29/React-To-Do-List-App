import './App.css'
import {useState} from 'react';
function App(){
  const [task, setTask]= useState('')
  const [taskList, setTaskList]=useState([])
  const handleAdd= ()=>{
    if(task.trim()!=''){
      setTaskList([...taskList, task]);
      setTask('');
    }
  }

  const handleDelete=(index)=>{
    const updateTasks=taskList.filter((_,i)=>i!==index);
    setTaskList(updateTasks);

  }
  return(
      <div>
        <h1>To Do List App</h1>
        <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} />
        <button onClick={handleAdd}> Add</button>

        <ol>
        {taskList.map((t, index)=>(
           <li key={index}>
            {t}{' '}
           <button onClick={()=>handleDelete(index)}>X</button>
           </li>
        ))
        }
        </ol>
      </div>
    
  );
}
export default App