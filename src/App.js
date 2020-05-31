import React,{useState, useEffect} from 'react';
import {ShowTask, CloseTask} from './components/showTask';
import {NewTask} from './components/addTask';
import {HeaderInfo} from './components/headerInfo';
import './App.css';

function App() {
 
  const [taskItem, setTask] = useState([
  ])
    
  useEffect(()=>{
    let data = localStorage.getItem("tasks");
    if(data !=null){
      setTask(JSON.parse(data));
    }else{
      setTask("")
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(taskItem));
  },[taskItem]);

  const toggleTask = tasks => {
    setTask(taskItem.map( t => (t.name === tasks.name) ? {...t,done : !t.done} : t));
  
  }
  
  const createTask = task => {
    
    if(!taskItem.find( t => t.name === task.name)){
      setTask([...taskItem, {name: task.name, description: task.description, done:false}]);
    }
  }
  const rowTable = () => {
    return taskItem.map( param => 
        <ShowTask data={param} key={param.name} setToggle={toggleTask}/>
      )
  }



  return (
    
    <div className="App">
      <HeaderInfo  tasks={taskItem.length}/>
      <NewTask newTask={createTask}/>
      <div className="container">
      <table className="table my-5">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>      
          {rowTable()}
        </tbody>
      </table>
      </div>
    </div>
  );

}

export default App;
