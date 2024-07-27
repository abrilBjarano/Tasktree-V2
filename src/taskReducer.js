export const taskReducer = ( state, action ) => {
   
   switch( action.type ){

      case 'Task add':
         return [ ...state, action.payload ];

      default:
         return state;

   }
};