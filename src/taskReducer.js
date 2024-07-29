export const taskReducer = ( state, action ) => {
   
   switch( action.type ){

      case 'Task add':
         return [ ...state, action.payload ];

      case 'Task delete':
         return state.filter( task => task.id !== action.payload );

      case 'Task toggle':
         return state.map( task => (

            ( task.id === action.payload )
               ? { ...task, status: !task.status }
               : task
         ))

      default:
         return state;

   }
};