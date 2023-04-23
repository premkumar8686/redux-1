function counterReducer5(state1 = 0, action)
{
   console.log('Open Reducer Function');
   switch(action.type) {
    case "INCREMENT":
        return state1 + 1;
    case "DECREMENT":
        return state1 - 1;
    case "RESET":
        return state1 = 0;
    default:
        return state1 = 0;
   }
}

export default counterReducer5;