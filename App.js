import logo from './logo.svg';
import './App.css';
import icon from './icons8-dice-64.png';
import { useState } from 'react';
function App() {
  const [TODOS,setTODOS]=useState([
    {
      Task:"First",
      isFinished:true,
    },
  {
    
    Task:"Second",
    isFinished:true,
  },
  {
    Task:"third",
    isFinished:true,
  },]);
  function handleKeyDown(e,i){
    if(e.key==='Enter'){
      createTODOatCurrentIndex(e,i);
    }
  }
  function createTODOatCurrentIndex(e,i){
    var newTODOS=[...TODOS];
    newTODOS.splice(i+1,0,{
      Task:'',
      isFinished:true,
    });
    setTODOS(newTODOS);
    setTimeout(()=>{
      document.form[0].elements[i+1].focus();
    },500);
  }
  function updateTODOatCurrentIndex(e,i){
    var newUpdate = [...TODOS];
    newUpdate[i].Task=e.target.value;
    setTODOS(newUpdate);
  }
  function toggleTODOAtCurrentIndex(i){
    var temp = [...TODOS];
    temp[i].isFinished=!temp[i].isFinished;
    setTODOS(temp);
  }
  return (
    <div className="App">
      <h1 className='header'>TO-DO APP</h1>
      {TODOS.map((todo,i)=>(
      <div className={`todo ${todo.isFinished && 'todo-is-finished'}`}>
        <div className={'checkbox'} onClick={() => toggleTODOAtCurrentIndex(i)}>
        
      </div>
          <input type="text" value={todo.Task} onKeyDown={e=>handleKeyDown(e,i)} onChange={e=>updateTODOatCurrentIndex(e,i)}/>
          {todo.isFinished && (<span> Completed &#x2714;</span>)}
          {todo.isFinished===false && (<span>Not Completed&#x2754;</span>)}

        
      </div>
      ))}
    </div>
  );
}

export default App;
