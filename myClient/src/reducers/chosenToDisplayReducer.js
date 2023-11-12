
const chosenToDisplayReducer = (state={}, action) =>{
    switch (action.type) {
      case 'SET_CHOSEN_TO_DISPLAY':
        return action.payload; //the chosen user object
      default:
        {
          return state;
        }
    }
  };
  export default chosenToDisplayReducer;