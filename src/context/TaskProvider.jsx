import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { v4 as uuid } from 'uuid';
import { taskReducer } from "../taskReducer";


const initialState = [
   { id: uuid(), description: 'Lavar el miata', status: false },
   { id: uuid(), description: 'Ir a caminar', status: false },
   { id: uuid(), description: 'Limpiar cuarto', status: true },
   { id: uuid(), description: 'Leer', status: true },
]


export const TaskProvider = ({ children }) => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState );


   const taskAdd = ( newTask ) => {
      dispatch({
         type: 'Task add',
         payload: newTask
      })
   };


   return (
      <TaskContext.Provider 
         value={{ 
            tasks,
            taskAdd, 
         }}
      >

         { children }
      </TaskContext.Provider>
   )
}
