
const usersReducer = (state=[], action) =>{
    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return action.payload; // Update state with the new user array
      case 'FETCH_USERS_FAILURE':
        return { error: 'Failed to fetch user data' }; // This should be an object, not an array
      default:
        {
          //alert('no action');
          return state;
        }
    }
  };
  export default usersReducer;