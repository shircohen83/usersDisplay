

const chosenImgReducer = (state = "", action) => {
    switch (action.type) {
      case 'SET_CHOSEN_IMG':
        return action.payload; 
      default:
        return state;
    }
  };
  export default chosenImgReducer;