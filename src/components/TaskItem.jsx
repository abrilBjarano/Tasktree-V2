import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useLocation } from "react-router-dom";

export const TaskItem = ({ task }) => {

   const { taskDelete } = useContext( TaskContext );
   const location = useLocation();


   const onTaskDelete = ( task ) => {
      taskDelete( task.id );
   };


   return (
      <li className="list-group-item d-flex align-items-center justify-content-between">

         { ( location.pathname === '/' )
            ? 
               <>
                  { task.description }
                  <div>
                     <button
                        onClick={ () => onTaskDelete( task ) }
                        className="btn btn-danger">
                           X
                     </button>
                  </div>
               </>
            : <del> { task.description } </del>              

         }

      </li>
   )
}
