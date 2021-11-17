import React, { useState } from 'react';


import Button from './Button';

import './AddTask.css'
const AddTask  = ({handleTaskAddition}) => {
    const [inputData, SetInputData] = useState('')

    const handleInputChange = (e) => {
        SetInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        SetInputData('')
    }

    return (
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-task-input" 
                type="text"  
            />
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button> 
            </div>
        </div>
        )
     
}
 
export default  AddTask ;