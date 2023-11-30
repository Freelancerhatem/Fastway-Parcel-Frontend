import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_1.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    const transparentNav = location.pathname.includes('/');

    const handleLogOut = e => {
        e.preventDefault();
        signOutUser()
    }

    const navlist = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Home
        </NavLink>

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
        {
            !user ?

                <div className='flex justify-center items-center gap-2'>
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
                </div>
                :
                ''
        }
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Contact Us
        </NavLink>
        <NavLink
            to="/parcelTrack"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Track Parcel
        </NavLink>
        {
            user ?
                <div>
                    <button onClick={handleLogOut} className="btn btn-sm">logout</button>
                </div>
                :
                ''
        }




    </>
    return (
        <div className={`min-w-full lg:px-14 fixed z-10 flex items-center justify-between bg-opacity-50   text-black ${transparentNav ? 'bg-black' : ''}`}>
            <img src={logo} className='lg:w-44 w-12 ' alt="logo" />
            <ul className='text-[#1db7ad] hidden lg:flex gap-4 '>
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