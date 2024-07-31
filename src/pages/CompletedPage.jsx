import { DeleteCompletedBtn } from "../components/DeleteCompletedBtn";
import { TaskList } from "../components/TaskList";
import { TotalTasks } from "../components/TotalTasks";


export const CompletedPage = () => {
   
   return (
      <>
         <DeleteCompletedBtn />
         <TotalTasks />
         <TaskList/>
      </>
   )
}
