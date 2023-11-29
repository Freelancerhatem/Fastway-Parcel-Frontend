import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_1.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user,signOutUser } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    const transparentNav = location.pathname.includes('/');
    
    const handleLogOut=e=>{
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
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-[#fac900]" : ""
            }
        >
            Dashboard
        </NavLink>
        {
            user ? <div>
                <button onClick={handleLogOut} className="btn btn-sm">logout</button>
                    </div>
                :
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
        }


        


    </>
    return (
        <div className={`min-w-full px-14 fixed z-10 flex items-center justify-between bg-opacity-50   text-black ${transparentNav ? 'bg-black' : ''}`}>
            <img src={logo} className='w-44 ' alt="logo" />
            <ul className='text-[#1db7ad] flex gap-4 '>
                {navlist}
            </ul>
        </div>
    );
};

export default Navbar;