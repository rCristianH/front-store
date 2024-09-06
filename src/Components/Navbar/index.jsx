import { MdOutlineShoppingCart, MdLogoDev } from 'react-icons/md';
import { NavbarItem } from '../../Utils/NavbarItem';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4 decoration-green-700';

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/">AM</NavLink>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/all">
            All
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/clothes">
            Clothes
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/electronics">
            Electronics
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/fornitures">
            Fornitures
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/toys">
            Toys
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/others">
            Others
          </NavbarItem>
        </li>
      </ul>

      <ul className="flex items-center gap-4">
        <li className='text-lg'>
          <MdLogoDev />
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/my-orders">
            My Orders
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/my-account">
            My account
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/signin">
            Sign In
          </NavbarItem>
        </li>
        <li>
          <MdOutlineShoppingCart />
        </li>
      </ul>
    </nav>
  );
};
export { Navbar };