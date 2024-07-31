import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";import { toast } from 'sonner';


export const DeleteCompletedBtn = () => {

   const { taskDeleteCompleted, tasksDone } = useContext( TaskContext );

   const emptyBtn = () => {
      return tasksDone.length === 0;
   };
   

   return (
      <div className="d-flex justify-content-end">
         <button 
            onClick={ () => {
                  taskDeleteCompleted();
                  toast.error('Deleted all completed tasks');
               } 
            }
            disabled={ emptyBtn() }
            className="btn btn-danger mb-4"
         >
            Delete all completed tasks
         </button>
      </div>
   )
}
