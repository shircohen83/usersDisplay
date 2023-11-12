//action creators that return actions with the specified action types.
export const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users,//payload is the data you send along with an action
});

export const fetchUsersFailure = (error) => ({
  type: 'FETCH_USERS_FAILURE',
  payload: error,
});





export const fetchUsers = (dispatch) => {
    
      fetch('http://localhost:5588/mocking_G/generate?library=examples&category=users&amount=10')
        .then(response => response.json())
        .then(data => {
          dispatch(fetchUsersSuccess(data));
        })
        .catch(error => {
          dispatch(fetchUsersFailure(error));
        });
    
  };
/*When an action is dispatched, it is sent to all reducers in your application. 
Each reducer checks the type property of the action to determine whether it should respond to that action. */

