import React from 'react';
import {Link} from 'react-router-dom'
import {Auth} from "../../utils";


export const Header= ({children}) => {
  return (
    <div>
      <p>
        <Link to="/login">Login</Link>
      </p>

      <p>
        <Link to="/sites">Sites</Link>
      </p>
      <p>
        <Link to="/login" onClick={() => Auth.logOut()}>Log Out</Link>
      </p>
      {children}
    </div>
  )
};

