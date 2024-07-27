import { useContext } from "react";
import { TaskAdd } from "../components/TaskAdd";
import { TaskContext } from "../context/TaskContext";
import { TaskList } from "../components/TaskList";


export const HomePage = () => {

   const { tasks } = useContext( TaskContext );


   return (
      <>
         <TaskAdd />
         <TaskList tasks={ tasks } />
      </>
   )
}
