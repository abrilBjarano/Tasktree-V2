import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export const DeleteCompletedBtn = () => {

   const { taskDeleteCompleted } = useContext( TaskContext );


   return (
      <div className="d-flex justify-content-end">
         <button 
            onClick={ taskDeleteCompleted }
            className="btn btn-danger mb-4">
               Delete all completed tasks
         </button>
      </div>
   )
}
