import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Header from './components/Header';
import Tasks from './components/tasks';
import AddTask from './components/AddTask';

import './App.css';

const App = () =>{
 
   
   //let message = "hello world" 
   const [tasks, setTasks] = useState([
      {
         id: '1',
         title: 'Estudar programação',
         completed: false,
      },
      {
         id: '2',
         title: 'Ler Livro',
         completed: true, 
      },
      
   ])

   const handleTaskClick = (taskId) => {
      const newTasks = tasks.map(task => {
         if(task.id === taskId) return {... task, completed: !task.completed}
         return task;
      }) 
      setTasks(newTasks)
   }

   const handleTaskAddition = (taskTilte) => {
         const newTasks = [... tasks, {
            title: taskTilte,
            id: uuidv4(),
            completed:false,
         }]

         setTasks(newTasks);  
   }

   const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)
      setTasks(newTasks)

   }

   return (
     <>
     <div className="container">
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks 
            tasks={tasks} 
            handleTaskClick={handleTaskClick} 
            handleTaskDeletion={handleTaskDeletion}
        />
        
      </div>
       
   </>
   )
 
}

export default App;