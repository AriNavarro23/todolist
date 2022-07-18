import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../css/TaskList.css';


function TaskList() {

  const [ task, setTask ] = useState([]);

  const addTask = task => {
    console.log("Task add");
    console.log(task);
  }

    return(
        <>
          <TaskForm />
          <div className='task-list-container'>
            {
              task.map((task) => 
              <Task
              text={task.text}
              />
              )
            }
          </div>
        </>
    );
}

export default TaskList