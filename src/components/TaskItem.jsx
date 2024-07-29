import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskItem = ({ task }) => {

   const { taskDelete } = useContext( TaskContext );


   const onTaskDelete = ( task ) => {
      taskDelete( task.id );
   };


   return (
      <li className="list-group-item d-flex align-items-center justify-content-between">

         { task.description }

         <div>
            <button
               onClick={ () => onTaskDelete( task ) }
               className="btn btn-danger"> 
                  X 
            </button>
         </div>

      </li>
   )
}
