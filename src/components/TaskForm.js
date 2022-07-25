import React, { useState } from 'react';
import '../css/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';


function TaskForm (props) {

    const [ input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }


    const handleSend = e => {
        e.preventDefault();
        
        const taskNew = {
            id: uuidv4(),
            text: input,
            complete: false,
        }
        
        props.onSubmit(taskNew);
    }

    return(
        <form 
        className='task-form'
        onSubmit={handleSend}>
            <input
                className='task-input'
                type='text'
                placeholder='Write a task'
                name='text'
                onChange={handleChange}
            />
            <button className='task-button'>
                Add task
            </button>
        </form>
    )   
}

export default TaskForm