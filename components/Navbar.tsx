import React from 'react'
import { NavLink } from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import '../src/App.css';

const Navbar = () => {

  return (
    <nav>
        <div id= "navframe">
            <div id="Fiction">
            <button><NavLink to='/'>Books</NavLink></button>
            <button><NavLink to='./characters'>Characters</NavLink></button>
            </div>

            <img id="Ouroboros" src="./images/TyrLogo.png" alt="Tyrannophis"/>

            <div id="Business">
            <button><NavLink to='./shoplinks'>Shop</NavLink></button>
            <button><NavLink to="./sociallinks">Socials</NavLink></button>
            </div>
        </div>
  </nav>
  );
};

export default Navbar;