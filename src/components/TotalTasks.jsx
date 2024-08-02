import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export const TotalTasks = () => {

   const { totalUndoneTasks, totalDoneTasks } = useContext( TaskContext );


   return (
      <h6 className="d-flex justify-content-center mb-5">
         🔲 tasks: { totalUndoneTasks }, ✅ tasks: { totalDoneTasks }
      </h6>
   )
}
