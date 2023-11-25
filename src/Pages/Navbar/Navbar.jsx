import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_1.png'

const Navbar = () => {
    const location =useLocation();
    const transparentNav = location.pathname.includes('/')
    
    const navlist = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/signin"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Sign in
        </NavLink>
        <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Sign up
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Dashboard
        </NavLink>

    </>
    return (
        <div className={`min-w-full px-14 fixed z-10 flex items-center justify-between bg-opacity-50   text-black ${transparentNav? 'bg-black' : '' }` }>
            <img src={logo} className='w-44 ' alt="logo" />
            <ul className='text-[#1db7ad] flex gap-4 '>
            {navlist}
            </ul>
        </div>
    );
};

export default Navbar;