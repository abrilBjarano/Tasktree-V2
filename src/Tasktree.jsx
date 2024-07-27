import { Navbar } from "./components/Navbar";
import { TaskProvider } from "./context/TaskProvider";
import { TasktreeRoutes } from "./routes/TasktreeRoutes";


export const Tasktree = () => {
   return (
      <TaskProvider>
         <Navbar />
         <TasktreeRoutes/>
      </TaskProvider>
   )
}
