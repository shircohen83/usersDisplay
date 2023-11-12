
  const wasPressedReducer = (state = false, action) => {
    switch (action.type) {
      case 'SET_USER_WAS_PRESSED':
        return action.payload; 
      default:
        return state;
    }
  };
  export default wasPressedReducer;