import { countReducer } from './countReducer';
import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import wasPressedReducer from './wasPressedReducer'
import chosenToDisplayReducer from './chosenToDisplayReducer'
import chosenImgReducer from './chosenImgReducer'
import modeReducer from './modeReducer'

///the structure of the store state is defined by the reducers you combine using combineReducers
const rootReducer = combineReducers({
    count: countReducer,
    users: usersReducer,//users key is associated with the state managed by the usersReducer
    wasPressed: wasPressedReducer,
    userToDisplay:chosenToDisplayReducer,
    chosenImg:chosenImgReducer,
    mode: modeReducer,
  });
  
  export default rootReducer;