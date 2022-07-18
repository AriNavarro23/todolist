import React, { useState } from 'react';
import '../css/TaskForm.css';

function TaskForm (props) {

    const [ input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }


    const handleSend = e => {
        e.preventDefault();
        
        const taskNew = {
            id: '1234',
            text:'Hi'
        }   
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