import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useLocation } from "react-router-dom";
import { toast } from 'sonner';

export const TaskItem = ({ task }) => {

   const { taskDelete, taskToggle } = useContext( TaskContext );
   const location = useLocation();


   return (
      <li className="list-group-item d-flex align-items-center justify-content-between">

         { ( location.pathname === '/' )
            ? 
               <>
                  <div onClick={ () => {
                        taskToggle( task.id );
                        toast.success('Completed task!');
                     } 
                  }>
                     { task.description }
                  </div>

                  <div>
                     <button
                        onClick={ () => {
                              taskDelete( task.id );
                              toast.warning('Deleted task!');
                           } 
                        }
                        className="btn btn-danger">
                           X
                     </button>
                  </div>
               </>
            : 
               <del onClick={ () => {
                     taskToggle( task.id );
                     toast.info('Task marked as undone')
                  }
               }>
                  { task.description } 
               </del>              

         }

      </li>
   )
}
