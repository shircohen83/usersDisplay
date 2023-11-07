import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const UserCardDiv=styled.div`
  padding-left:200px;
`;
const InfoDiv=styled.div`
  width: 400px; /* Set a fixed width for the InfoDiv */ 
  padding-left:100px;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* Align items to the left */
  align-items: flex-start; /* Align items to the top */
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the left */
`;
const StyledH2=styled.h2`
  font-size: 1.5rem; 
  color: #2F4F4F;
  text-align: center;
  padding: 10px;
  padding-top:50px;
`;
const StyledH3=styled.h3`
  font-size: 1.5rem; 
  color: #5F9EA0;
  text-align: left;
  padding: 10px;

`;
const ImgStyle=styled.img`
    width: 300px; /* Set a medium size for the image */
    height: 500px; /* Set the height accordingly */
    border-radius: 50%; /* Make the image round */
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3); /* Add a subtle box shadow */
`;
const SaveButton = styled.button`
  background-color: #8FBC8F; /* Green background color */
  border: none; /* Remove border */
  color: black; /* White text color */
  text-align: center; /* Centered text */
  font-size: 20px; /* Font size */
  font-weight: bold;
  font-family: 'Dancing Script', 'cursive';
  margin: 10px; /* Margin around the button */
  cursor: pointer; /* Add a pointer cursor on hover */
  border-radius: 8px; /* Optional: Add rounded corners */
  width: 100px; 
  height: 40px; 
  &:hover {
    background-color: #45a049; /* Darker green color on hover */
  }
`;
const CancelButton = styled.button`
  background-color: #2F4F4F; 
  border: none; 
  color: white; 
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Dancing Script', 'cursive';
  margin: 10px;
  cursor: pointer; 
  border-radius: 8px; 
  width: 100px; 
  height: 40px; 
  &:hover {
    background-color: #45a049; /* Darker green color on hover */
  }
`;
const EditButton = styled.button`
  background-color:#4169E1; 
  border: none; 
  color: black; 
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Dancing Script', 'cursive';
  margin: 10px;
  cursor: pointer; 
  border-radius: 8px; 
  width: 200px; 
  height: 40px; 
  &:hover {
    background-color: #45a049; /* Darker green color on hover */
  }
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;



const UserCard=({user,picture})=>
{
  const [editedCountry,setEditedCountry]=useState("");
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSave=()=>{
    user.country=editedCountry
    setEditedCountry("")
  }
  const handleCancel=()=>{
    setIsEditing(false);
  }
    return(
        <ColumnDiv>
            <div>
                <StyledH2>{user.firstName} {user.lastName}'s information:</StyledH2>
            </div>
            <RowDiv>
                <UserCardDiv>
                    <ImgStyle 
                        src={picture}
                        alt={user.uuid}
                    />
                </UserCardDiv>
                <InfoDiv>
                    <StyledH3> birth date: {user.birthDate}</StyledH3>
                    <StyledH3> country: {user.country}</StyledH3>
                    {
                      (isEditing)?(
                        <div>
                            <StyledInput
                                placeholder='Type new country'
                                type="text"
                                value={editedCountry}
                                onChange={(e)=>{setEditedCountry(e.target.value)}}/>
                            <SaveButton onClick={handleSave}>save</SaveButton>
                            <CancelButton onClick={handleCancel}>cancel</CancelButton>
                        </div>
                        
                      ):(

                        <EditButton onClick={()=>{setIsEditing(true)}}>edit country</EditButton>
                      )
                    }
                    <StyledH3> email: {user.email}</StyledH3>
                    <StyledH3>employment: {user.jobTitle}</StyledH3>
                </InfoDiv>
            </RowDiv>
        </ColumnDiv>
    )
}
export default UserCard;

UserCard.propTypes={
    user: PropTypes.object,
    picture: PropTypes.string
}