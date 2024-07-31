import { useLocation } from "react-router-dom";
import { TaskItem } from "./TaskItem";


export const TaskList = ({ tasks }) => {

   const location = useLocation();


   const tasksDone = tasks.filter( task => task.status === true );
   const tasksUndone = tasks.filter( task => task.status === false );


   return (
      <ul className="list-group mb-5">
         {(( location.pathname === '/') ? tasksUndone : tasksDone ).map( task => (
            <TaskItem
               task={ task }
               key={ task.id }
            />
         ))}

         {(( location.pathname === '/') ? tasksUndone : tasksDone ).length === 0 && (
            <h1 className="d-flex justify-content-center align-items-center">Emtpy!</h1>
         )}
      </ul>
   )
}
