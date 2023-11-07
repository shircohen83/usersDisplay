import React, { useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


//scroll pain-users
const FriendsListStyle = styled.div`
  height: 500px; 
  width: 500px; 
  overflow-y: auto; /* Add a vertical scrollbar when content overflows */
  border: 1px solid #ccc; 
  background-color: #F0FFFF;
`;
const Friend=styled.h3`
  font-size: 1.5rem; 
  color: #5F9EA0;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ccc; /* Add a bottom border for separation */
  &:last-child {
    border-bottom: none; /* Remove the border from the last item */
  }
`;
const StyledH2=styled.h2`
  font-size: 1.5rem; 
  color: #2F4F4F;
  text-align: center;
  padding: 10px;
  padding-top:110px;
`;
const ButtonStyle = styled.button`
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
const StyledDiv=styled.div`
  padding-left:100px;
  width: 500px;
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the left */
`;
const FriendsList=({user})=>{
  const [sortedFriends, setSortedFriends] = useState(user.friends || []);

  const AscendingDisplay=()=>
  {//ascending order= smallest value first
    const sortedByAsc= [...sortedFriends].sort((a, b) => a.localeCompare(b));//it performs a simple lexicographic (dictionary) comparison of the strings based on their Unicode code points.
    setSortedFriends(sortedByAsc);
  }
  const DescendingDisplay=()=>
  {//descending order= largest value first
    const sortByDesc=[...sortedFriends].sort((a,b)=>b.localeCompare(a));
    setSortedFriends(sortByDesc);
  }
  //when a new user is pressed, we want to display its friends and not the sirted friend list of the first user that was pressed
 
  useEffect(() => {
    setSortedFriends(user.friends || []);
  }, [user.friends]);

    return (
      <ColumnDiv>
        <StyledH2>{user.firstName+"'s friends:"}</StyledH2>
           
        <StyledDiv>
          {
            (sortedFriends?.length>0)
            ?(
                <FriendsListStyle>
                  {sortedFriends.map((friend,index)=>(<Friend key={index}>{friend}</Friend>))}
                </FriendsListStyle>
            ):(
              <div>
                <StyledH2>no friends found</StyledH2>
              </div>
            )
          }
        </StyledDiv>
        <StyledDiv>
          <ButtonStyle onClick={AscendingDisplay}>ASC</ButtonStyle>
          <ButtonStyle onClick={DescendingDisplay}>DESC</ButtonStyle>
        </StyledDiv>
      </ColumnDiv>
    )   
  }
  export default FriendsList

  FriendsList.prototype={
    user: PropTypes.object
  };