import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuid } from 'uuid';


export const useForm = () => {

   const [ inputValue, setInputValue ] = useState('');
   const { taskAdd } = useContext( TaskContext );

   const onInputChange = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {

      event.preventDefault();

      if( inputValue.length === 0 ) return;

      const newValue = {
         id: uuid(),
         description: inputValue.trim(),
         status: false
      }

      taskAdd( newValue );

      setInputValue('');
   };


   return {
      inputValue,
      onInputChange,
      onSubmit,
   }
}
