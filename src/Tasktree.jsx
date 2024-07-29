import { Navbar } from "./components/Navbar";
import { TaskProvider } from "./context/TaskProvider";
import { TasktreeRoutes } from "./routes/TasktreeRoutes";
import { Toaster } from 'sonner';


export const Tasktree = () => {
   return (
      <TaskProvider>
         <Navbar />
         <TasktreeRoutes/>
         <Toaster position="bottom-center" richColors />
      </TaskProvider>
   )
}
