export const taskReducer = ( state, action ) => {
   
   switch( action.type ){

      case 'Task add':
         return [ ...state, action.payload ];

      case 'Task delete':
         return state.filter( task => task.id !== action.payload );

      default:
         return state;

   }
};