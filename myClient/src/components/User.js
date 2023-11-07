import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UsersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ccc; /* Add a bottom border for separation */
  &:last-child {
    border-bottom: none; /* Remove the border from the last item */
  }
`;
const UserNameButton = styled.button`
  padding: 15px 30px; 
  background-color: white; /* Set background color */
  border-radius: 10px; /* Add border-radius for rounded corners if desired */
  cursor: pointer; /* Change cursor on hover */
  font-size: 1.5rem; 
  color: darkblue;
  width: 200px; /* Set your desired width */
  height: 100px; /* Set your desired height */
`;
const RemoveButton = styled.button` 
  background-color: red; /* Set background color */
  cursor: pointer; /* Change cursor on hover */
  font-size: 1.5rem; 
  color: black;
  width: 30px; /* Set your desired width */
  height: 30px; /* Set your desired height */
`;
const UserImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%; /* Make the image round */
  margin-right: 10px;
`;

const RemoveDiv = styled.div`
  padding-top: 35px;
  
`;
const User=({user, updateUserWasPressed,updateChosenUser,updateImgUrl,users})=>
{
  const [randomImageUrl, setRandomImageUrl] = useState('');
  const[idToRemove,setIdToRemove]=useState(-1);
  
  useEffect(() => {
    async function fetchRandomHumanImage() {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'human',
            orientation: 'portrait',
            client_id: 'VRL3cICd-ykNeN_frx-IfQm3Z5vAI5k9_7XkJ_YZpRA',
          },
        });
        setRandomImageUrl(response.data.urls.small);
      } catch (error) {
          console.error('Error fetchingggg random image:', error);
      }
    }
    fetchRandomHumanImage();
  }, []); 
  
    /*useEffect(() => {
      const indexToRemove = users.findIndex(user => user.id === idToRemove);
      if (indexToRemove !== -1) {
        const updatedUsers = [...users];
        updatedUsers.splice(indexToRemove, 1);
        // Update the state with the modified users array using the updateUsers function
        // updateUsers(updatedUsers);
      }
    }, [idToRemove, users]);*/
  
    return(
        <UsersDiv>
          <UserImage src={randomImageUrl} alt={`${user.firstName}'s picture`}/>
            
            <UserNameButton onClick={()=>{
              updateUserWasPressed(true);
              updateChosenUser(user);
              updateImgUrl(randomImageUrl);}}>{user.firstName} {user.lastName}</UserNameButton>
              <RemoveDiv>
                <RemoveButton onClick={()=>{setIdToRemove(user.uuid)}}>X</RemoveButton>
              </RemoveDiv>
        </UsersDiv>
    )
}
export default User;
User.propTypes = {
  user: PropTypes.object,
  updateUserWasPressed: PropTypes.func,
  updateChosenUser: PropTypes.func,
  updateImgUrl: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object)
};
