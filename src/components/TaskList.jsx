import { useLocation } from "react-router-dom";
import { TaskItem } from "./TaskItem";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export const TaskList = () => {

   const location = useLocation();
   const { tasksDone, tasksUndone } = useContext( TaskContext );


   return (
      <ul className="list-group mb-5 task-list">
         {(( location.pathname === '/') ? tasksUndone : tasksDone ).map( task => (
            <TaskItem
               task={ task }
               key={ task.id }
            />
         ))}

         {(( location.pathname === '/') ? tasksUndone : tasksDone ).length === 0 && (
            <h1 className="d-flex justify-content-center align-items-center text-danger mt-5">Emtpy!</h1>
         )}
      </ul>
   )
}
