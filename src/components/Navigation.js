import React from 'react'
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
