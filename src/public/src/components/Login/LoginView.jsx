import React from 'react'

export const LoginView = ({loadUsers = () => null, saveUser = () => null, userList = [], stateRequest = {}}) => {
  return (
    <div>
      <p><button onClick={() => loadUsers()}>Get Users</button></p>
      { userList.map( user => (<li key={user.id} >{user.id} - {user.username} <button onClick={() => saveUser(user)}>Login</button></li>)) }
      <div>
        { (stateRequest.fail) ? (<p>Incorrect pass or login</p>) : ''}
        { (stateRequest.process) ? (<p>Loading</p>) : ''}
      </div>
    </div>
  )
};
