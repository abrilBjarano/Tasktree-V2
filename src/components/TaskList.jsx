import { useLocation } from "react-router-dom";
import { TaskItem } from "./TaskItem";


export const TaskList = ({ tasks }) => {

   const location = useLocation();


   const tasksDone = tasks.filter( task => task.status === true );
   const tasksUndone = tasks.filter( task => task.status === false );


   return (
      <ul className="list-group mb-5">
         { ( ( location.pathname === '/') ? tasksUndone : tasksDone ).map( task => (
            <TaskItem 
               task={ task }
               key={ task.id }
            />
         ))}
      </ul>
   )
}
