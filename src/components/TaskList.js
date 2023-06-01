import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './task';
import '../css/TaskList.css';


function TaskList() {

  const [ tasks, setTasks ] = useState([]);

  const addTask = task => {
    //to make me sure no enter empty space
    if( task.text.trim()){
      task.text = task.text.trim();
      // generate new array, with the new task and old
      const updateTask = [ task, ...tasks ];
      setTasks(updateTask);  
    }
  }

  const deleteTask = id =>{
    //if the id matches it is not include in array 
    const updateTask = tasks.filter(task => task.id !== id );
    setTasks(updateTask)
  }

  const completeTask = id =>{
    const updateTask = tasks.map( task => {
      // si el id de la tarea es igual al que buscamos, entonces invertimos el estado
      if( task.id === id){
        task.complete = !task.complete;
      }
      // se retorna y actualiza
      return task;
    })
    setTasks(updateTask)
  }


    return(
        <>
          <TaskForm onSubmit={addTask} />
          <div className='task-list-container'>
            {
              tasks.map((task) => 
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                complete={task.complete}
                completeTask={completeTask}
                deleteTask={deleteTask}

              />
              )
            }
          </div>
        </>
    );
}

export default TaskList