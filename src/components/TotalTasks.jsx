import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export const TotalTasks = () => {

   const { totalTasks, totalUndoneTasks, totalDoneTasks } = useContext( TaskContext );


   return (
      <h6 className="d-flex justify-content-center">
         Total tasks: { totalTasks }, total undone tasks: { totalUndoneTasks }, total done tasks: { totalDoneTasks }
      </h6>
   )
}
