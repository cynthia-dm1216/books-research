import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
       Google Books
      </a>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <link className='nav-link' to='/'>Search</link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/saved'>Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
