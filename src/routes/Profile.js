import { authService } from 'fbase'
import React from 'react'

function Profile() {
  const onLogOutClick = () => authService.signOut();
  return (
    <>
    <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}

export default Profile
