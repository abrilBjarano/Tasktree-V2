import { useForm } from "../hooks/useForm";


export const TaskAdd = () => {

   const { onSubmit, inputValue, onInputChange } = useForm();


   return (
      <form onSubmit={ onSubmit }>
         <input 
            type="text"
            value={ inputValue }
            onChange={ onInputChange }
            className="form-control mb-4"
            placeholder="What needs to be done? ✏️"
         />
      </form>
   )
}
