export const TaskItem = ({ task }) => {


   return (
      <li className="list-group-item d-flex align-items-center justify-content-between">

         { task.description }

         <div>
            <button className="btn btn-danger"> X </button>
         </div>

      </li>
   )
}
