import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaHome } from "react-icons/fa";
import imgcover from '../../assets/images/signcover.png'
import { ImHome } from "react-icons/im";

const SignIn = () => {
    const{LoginUser,googleLogin,user}=useContext(AuthContext);
    const navigate =useNavigate()
    const location = useLocation();
    
    const handleLogin =e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginUser(email,password)
        .then(()=>{           
           toast.success('login success')
             navigate(`${location?.state?  location.state : '/' }`)
        })
        .catch(()=>{
            toast.error('login failed')
        })
        form.email.value ='';
        form.password.value='';
    }
    // google login
    const handleGoogleLogin =(e)=>{
        e.preventDefault();
        googleLogin()
        .then(()=>{
                console.log('then')
                toast.success('login success');
                navigate(`${location?.state?  location.state : '/' }`)
    
            
        })
        .catch(()=>{
            toast.error('failed')
        })
        
        
        
        
        
    }
    
    return (
        <div className="grid grid-cols-2 justify-center items-center max-w-5xl mx-auto h-screen  shadow-2xl   "  >
            <Toaster></Toaster>
            <div className=" relative ">
                <img src={imgcover} className="h-screen" alt="" />
                <Link to={'/'}><button className='flex items-center border-2 absolute bottom-[200px] left-5 gap-1 px-4 py-2 hover:text-[#1db7ad] bg-[#1db7ad] hover:bg-white text-white rounded-sm hover:border-[#1db7ad]'><ImHome />Go Home</button>
                </Link>
            </div>
                <div className="  mx-auto py-8"  >
                    <h1 className="text-2xl font-bold mb-6 text-gray-600  text-center">Login Form</h1>
                    <form onSubmit={handleLogin}  className="w-full  max-w-sm mx-auto  bg-opacity-30 p-8 rounded-md shadow-md">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-l-8 focus:border-[#1db7ad]"
                                type="email" id="email" name="email" placeholder="your@email.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="focus:border-l-8 focus:border-[#1db7ad] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                                type="password" id="password" name="password" placeholder="********" />
                        </div>

                        <div>
                        <button
                            className="w-full bg-[#1db7ad] text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-[white] hover:text-[#1db7ad] border-2 border-transparent hover:border-[#1db7ad] "
                            type="submit">Login</button>
                            <span>Have not an account <Link to={'/signup'}><span className="text-[#1db7ad] underline">sign up</span></Link></span>
                        </div>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className="w-full flex bg-transparent  text-sm font-semibold py-2 px-4 rounded-md  text-[#1db7ad] border-2 justify-center gap-2 border-[#1db7ad] "><FcGoogle className="text-xl"></FcGoogle>Login With Google</button>
                    </form>

                </div>
            </div >
    );
};

export default SignIn;