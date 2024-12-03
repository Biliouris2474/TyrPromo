import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import {Outlet} from 'react-router-dom';
import '../App.css';

const TyrLayout = () => {
  
  return (
<> 
<Navbar></Navbar>
<Outlet></Outlet>

</>
  );
};
export default TyrLayout;
