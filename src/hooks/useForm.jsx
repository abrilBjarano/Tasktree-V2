import { useState } from "react";


export const useForm = () => {

   const [ inputValue, setInputValue ] = useState('');

   const onInputChange = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {

      event.preventDefault();

      if( inputValue.length === 0 ) return;
      console.log( inputValue );

      setInputValue('');
   };


   return {
      inputValue,
      onInputChange,
      onSubmit,
   }
}
