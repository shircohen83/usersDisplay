import React, { useState,useEffect } from 'react';
import TopBar from './components/TopBar';
import User from './components/User'
import UserErea from './components/UserErea';
import styled from 'styled-components';

//scroll pain-users
const UserListStyle = styled.div`
  height: 900px; 
  width: 400px; 
  background-color: #F0FFFF;
  overflow-y: auto; /* Add a vertical scrollbar when content overflows */
  border: 1px solid black; 
  padding: 10px; 
 border-bottom: 1px solid #ccc;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* Align items to the left */
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly; /* space-evenly:flex items are evenly distributed along the main axis with equal space around them */
  align-items:space-between; /*space-between:Flex items are evenly distributed along the main axis. The first item is at the start, the last item is at the end */
`;

const RightDiv = styled.div`
  display: flex;
  
  flex-direction: row;
  justify-content:space-evenly; 
  align-items:space-between; 
`;
const StyledH3=styled.h3`
  font-size: 1.5rem; 
  color: darkblue;
  text-align: center;
`;
const ColomnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the left */
  background-color:  ${props => props.isDark ? "#D3D3D3" : "#E6E6FA"};
`;
function App(){
  const [userWasPressed, setUserWasPressed]=useState(false);
  const [chosenToDisplay, setChosenToDisplay]=useState({});
  const [persons, setPersons] = useState([]);
  const[chosenImgUrl,setChosenImgUrl]=useState('');
  const[mode,setMode]=useState('LIGHT');
  const[isDark,setIsDark]=useState(false);
  
  function switchMode() {
    if (mode === 'DARK') {
      setIsDark(false);
      setMode('LIGHT');
    } else {
      setIsDark(true);
      setMode('DARK');
    }
}
 
  useEffect(() => {
    // Make a GET request to the server to fetch the object
    fetch('http://localhost:5588/mocking_G/generate?library=examples&category=users&amount=10')
      .then(response => response.json())
      .then(data => {
        // 'data' is now an array of objects
        console.log(data);
        setPersons(data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // effect runs once after the initial render

  
  //when taking array with Map function to html elements, each element need to get a key
  return (
    <ColomnDiv isDark={isDark}>
        <TopBar user={chosenToDisplay} currMode={mode} ChangeModeColor={switchMode}/>
      <RowDiv>
        <LeftDiv>
            {//display users if there are any
              (persons?.length>0)
              ?(
                <UserListStyle >
                  {persons.map((person)=>(<User 
                    key={person.uuid}
                    user={person} 
                    updateUserWasPressed={(value)=>{setUserWasPressed(value)}} 
                    updateChosenUser={(user)=>{setChosenToDisplay(user)}}
                    updateImgUrl={(imgUrl)=>{setChosenImgUrl(imgUrl)}}
                    users={persons}/>))}
                </UserListStyle>
              ):(
                <UserListStyle>
                    <StyledH3> no users do display</StyledH3>
                </UserListStyle>
              )
            }
          </LeftDiv>
            <RightDiv>
              {
                (userWasPressed)?(
                  <UserErea user={chosenToDisplay} picture={chosenImgUrl}/>
                ):(
                
                  <StyledH3> press on a user to display </StyledH3>
                )
              }
            </RightDiv>
      </RowDiv>
    </ColomnDiv>
  )   
}
export default App;

