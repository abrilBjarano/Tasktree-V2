import { TaskAdd } from "../components/TaskAdd";
import { TaskList } from "../components/TaskList";
import { TotalTasks } from "../components/TotalTasks";


export const HomePage = () => {

   return (
      <>
         <TaskAdd />
         <TotalTasks />
         <TaskList/>
      </>
   )
}
