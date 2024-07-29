import { useContext } from "react";
import { DeleteCompletedBtn } from "../components/DeleteCompletedBtn";
import { TaskList } from "../components/TaskList";
import { TaskContext } from "../context/TaskContext";


export const CompletedPage = () => {

   const { tasks } = useContext( TaskContext );


   return (
      <>
         <DeleteCompletedBtn />
         <TaskList tasks={ tasks } />
      </>
   )
}
