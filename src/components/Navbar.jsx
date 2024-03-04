import { NavLink } from "react-router-dom";
import { Sidebar } from './portfolio/sidebar'

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='pt-2.5'>
        <img src={logo} alt='logo' className='my-logo object-contain' />
      </NavLink>
      <Sidebar /> 
    </header>
  );
};

export default Navbar;
