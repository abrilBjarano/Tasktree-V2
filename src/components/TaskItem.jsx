import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useLocation } from "react-router-dom";

export const TaskItem = ({ task }) => {

   const { taskDelete, taskToggle } = useContext( TaskContext );
   const location = useLocation();


   return (
      <li className="list-group-item d-flex align-items-center justify-content-between">

         { ( location.pathname === '/' )
            ? 
               <>
                  <div onClick={ () => taskToggle( task.id )}>
                     { task.description }
                  </div>

                  <div>
                     <button
                        onClick={ () => taskDelete( task.id ) }
                        className="btn btn-danger">
                           X
                     </button>
                  </div>
               </>
            : 
               <del onClick={ () => taskToggle( task.id )}>
                  { task.description } 
               </del>              

         }

      </li>
   )
}
