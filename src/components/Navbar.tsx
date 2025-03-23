import {NavLink} from 'react-router-dom';
import '../App.css';
import Tyrlogo from "@/assets/images/TyrLogo.png";

const Navbar = () => {

  return (
    <nav>
        <div id= "navframe">
            <div id="Fiction">
            <button><NavLink to='/'>Books</NavLink></button>
            <button><NavLink to='/characters'>Characters</NavLink></button>
            </div>

            <img id="Ouroboros" src={Tyrlogo} alt="Tyrannophis"/>

            <div id="Business">
            <button><NavLink to='./shoplinks'>Shop</NavLink></button>
            <button><NavLink to="./sociallinks">Socials</NavLink></button>
            </div>
        </div>
  </nav>
  );
};

export default Navbar;