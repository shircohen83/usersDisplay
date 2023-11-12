import { connect } from 'react-redux';
import { Component } from './component';



//opprotonity to change the prop before passing it
const mapStateToProps = state => {
   
  return {
    count: state.count,
    persons: state.users,
    state:state,
    wasPressed:state.wasPressed,
    userToDisplay:state.userToDisplay,
    chosenImg:state.chosenImg,
    mode:state.mode,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
    setWasPressed: (boolVal) => dispatch({type: 'SET_USER_WAS_PRESSED',payload:boolVal}),
    setChosenToDisplay:(user)=>dispatch({type:'SET_CHOSEN_TO_DISPLAY',payload:user}),
    setChosenImgUrl:(imgUrl)=>dispatch({type:'SET_CHOSEN_IMG',payload:imgUrl}),
    setMode:(mode)=>dispatch({type:'SET_MODE',payload:mode})
  }
};

/*Container Components  pull data from the store, pass that data down to Presentational Components as props,
and dispatching actions to modify the state in the Redux store
*/
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);