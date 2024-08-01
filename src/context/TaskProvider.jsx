import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { v4 as uuid } from 'uuid';
import { taskReducer } from "../taskReducer";


const initialState = [
   { id: uuid(), description: 'Lavar el miata', status: false },
   { id: uuid(), description: 'Ir a caminar', status: false },
   { id: uuid(), description: 'Limpiar cuarto', status: true },
   { id: uuid(), description: 'Leer', status: true },
]


const init = () => {
   return JSON.parse( localStorage.getItem('tasks') ) || initialState;
};


export const TaskProvider = ({ children }) => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState, init );

   const tasksDone = tasks.filter( task => task.status === true );
   const tasksUndone = tasks.filter( task => task.status === false );


   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify( tasks ));
   }, [ tasks ]);


   const taskAdd = ( newTask ) => {
      dispatch({
         type: 'Task add',
         payload: newTask
      })
   };

   const taskDelete = ( id ) => {
      dispatch({
         type: 'Task delete',
         payload: id
      })
   };

   const taskToggle = ( id ) => {
      dispatch({
         type: 'Task toggle',
         payload: id
      })
   };

   const taskDeleteCompleted = () => {
      dispatch({
         type: 'Task delete completed'
      })
   };

   
   const totalTasks = tasks.length;
   const totalUndoneTasks = tasksUndone.length;
   const totalDoneTasks = tasksDone.length;


   return (
      <TaskContext.Provider 
         value={{ 
            tasks,
            tasksDone,
            tasksUndone,
            taskAdd,
            taskDelete, 
            taskToggle,
            taskDeleteCompleted,
            totalTasks,
            totalUndoneTasks,
            totalDoneTasks,
         }}
      >

         { children }
      </TaskContext.Provider>
   )
}
