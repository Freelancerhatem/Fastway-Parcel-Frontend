
import logo from '../../assets/images/logo_1.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { MdOutlineEventNote } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    //on scroll effect
    const [isScroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            setScroll(scrollValue > 0);
        };
        window.addEventListener('scroll', handleScroll);
        // clean the fx
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleLogOut = e => {
        e.preventDefault();
        signOutUser()
    }



    const navlist = <>
        <Link smooth={true} duration={500} to='home' className='hover:cursor-pointer'>Home</Link>

        {
            user?.email ?
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
                    }
                >
                    Dashboard
                </NavLink>
                :
                ''
        }


        <Link smooth={true} duration={500} to='contact_us' className='hover:cursor-pointer'>Contact Us</Link>

        <NavLink
            to="/parcelTrack"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Track Parcel
        </NavLink>
        
        <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? '' : ''
            }
        >
            <li className='flex items-center border-2 gap-1 px-4 py-2 text-[#1db7ad] hover:bg-[#1db7ad] hover:text-white rounded-sm border-[#1db7ad]'><MdOutlineEventNote />Register</li>
        </NavLink>
        <NavLink
            to="/signin"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            <li className='bg-[#1db7ad] flex items-center gap-1 px-4 py-2 border-2  border-[#1db7ad] rounded-sm text-white'><IoPersonOutline/>Login</li>
        </NavLink>
        {
            user ?
                <div>
                    <button onClick={handleLogOut} className={`btn btn-sm bg-[#1db7ad] border-none ${isScroll ? 'text-white' : ''}`}>logout</button>
                </div>
                :
                ''
        }





    </>



    return (
        <div className={`min-w-full lg:px-14 h-16  flex items-center justify-between  transform transition-colors duration-100 ease-in-out  fixed top-0 font-semibold z-10   ${isScroll ? 'bg-[#ffffff39]   backdrop-blur-3xl  text-black  ' : 'bg-transparent    text-black'}`}>
            <Link to='/'><img src={logo} className='lg:w-44 w-12 ' alt="logo" /></Link>
            <ul className=' hidden lg:flex items-center gap-4 '>
                {navlist}
            </ul>
            {/*  */}
            <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 right-6 shadow bg-base-100 rounded-box w-52">

                    {navlist}
                </ul>
            </div>
            {/*  */}
        </div>
    );
};

export default Navbar;