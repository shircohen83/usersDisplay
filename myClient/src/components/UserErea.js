import React from 'react';
import UserCard from './UserCard'
import FriendsList from './FriendsList'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Align items to the left */
  margin-right: 20px; /* Add some margin between UserCard and FriendsList */
`;

function UserErea({user,picture})
{
    return(
        <div>
            <RowDiv>
                <UserCard user={user} picture={picture}/>
                <FriendsList user={user}/>
            </RowDiv>
        </div>
        )
}
export default UserErea;
UserErea.prototype={
    user:PropTypes.object,
    picture: PropTypes.string,
  };