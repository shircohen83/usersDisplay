import styled from 'styled-components';
import React from 'react'
import PropTypes from 'prop-types';

const TopBarStyle = styled.div`
  color: white;
  padding: 10px;
  text-align: left;
`;

const FullWidthDiv  =styled.div`
    display: flex;
    width: '100vw'; // 100% of the viewport width
    height: '10px'; 
    color: 'lightblue';
    flex-direction: row;
  `;
const RightDiv = styled.div`
     padding-left: 1500px;
     text-align: right;
     padding-top:20px;
`;
const StyledH2=styled.h2`
  font-size: 1.5rem; 
  color: #2F4F4F;
  text-align: center;  
  padding-left: 20px;
  `;
const StyledH3=styled.h3`
  font-size: 1.2rem; 
  color: #2F4F4F;
  text-align: left;
  padding: 10px;
  padding-top: 20px;

  `;
  const EllipticButton = styled.button`
    width: 100px; /* Set your desired width */
    height: 60px; /* Set your desired height */
    background-color: #3949ab;
    color: black;
    border: none;
    border-radius: 50%; /* This creates an elliptic shape */
    cursor: pointer;
    font-size: 15px; /* Set your desired font size */
    box-shadow: 0px 2px 2px lightgray;
    &:hover{
      background-color: #283593;
  }
  `;
const TopBar=({user,currMode,ChangeModeColor })=>{

    return(
        <TopBarStyle >
            <FullWidthDiv> 
                <StyledH2>
                    hello {user.firstName}!
                </StyledH2>
                <RightDiv>
                    <EllipticButton onClick={()=>ChangeModeColor()}>
                        switch mode 
                    </EllipticButton>
                </RightDiv>
                <StyledH3>
                    current mode: {currMode}
                </StyledH3>
                
            </FullWidthDiv>
        </TopBarStyle>);
}
export default TopBar

TopBar.propTypes={
  user:PropTypes.object,
  currMode:PropTypes.string,
  ChangeModeColor:PropTypes.func.isRequired
};