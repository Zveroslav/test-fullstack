import React from 'react';
import {Link} from 'react-router-dom'


export const Header= ({children}) => {
  return (
    <div>
      <p>
        <Link to="/login">Login</Link>
      </p>

      <p>
        <Link to="/sites">Sites</Link>
      </p>
      {children}
    </div>
  )
};

