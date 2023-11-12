import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './actions/userActions';
import App from './App'; 


// Dumb component:
export const Component = ({ handleDecrementClick, handleIncrementClick, persons ,state,setWasPressed,wasPressed,setChosenToDisplay,userToDisplay,
  setChosenImgUrl,setMode,mode}) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      // Dispatch the fetchUsers action when the component mounts
      fetchUsers(dispatch);
    }, [dispatch]); // Include dispatch in the dependency array
  
    return (
      <App handleDecrement={handleDecrementClick} handleIncrement={handleIncrementClick} persons={persons} state={state} setWasPressed={setWasPressed} wasPressed={wasPressed}
      setChosenToDisplay={setChosenToDisplay} chosenToDisplay={userToDisplay} setChosenImgUrl={setChosenImgUrl} setMode={setMode} mode={mode}
       />
    );
  };