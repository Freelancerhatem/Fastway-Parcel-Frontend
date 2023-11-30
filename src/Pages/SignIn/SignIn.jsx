import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaHome } from "react-icons/fa";
import img from '../../assets/images/signupcover.jpg'

const SignIn = () => {
    const{LoginUser,googleLogin,user}=useContext(AuthContext);
    const navigate =useNavigate()
    const location = useLocation();
    console.log(user)
    
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
    const handleGoogleLogin =()=>{
        googleLogin()
        if(user || ''){
            toast.success('login success');
            navigate(`${location?.state?  location.state : '/' }`)

        }
        
        
        
        
        
    }
    const BackImage = `url(${img})`;
    return (
        <div className=" flex items-center bg-no-repeat max-w-full h-screen    bg-center  bg-cover" style={{ backgroundImage: BackImage }} >
             <Link to={'/'}><button className=" absolute top-2 flex justify-center items-center  left-2 w-12 h-12 bg-green-200 rounded-full"><FaHome className=""></FaHome></button></Link>
            <Toaster></Toaster>
            
                <div className="container  mx-auto py-8"  >
                    <h1 className="text-2xl font-bold mb-6 text-gray-600  text-center">Login Form</h1>
                    <form onSubmit={handleLogin}  className="w-full  max-w-sm mx-auto  bg-opacity-30 p-8 rounded-md shadow-md">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                                type="email" id="email" name="email" placeholder="your@email.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                                type="password" id="password" name="password" placeholder="********" />
                        </div>

                        <div>
                        <button
                            className="w-full bg-green-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-green-300 transition duration-300"
                            type="submit">Login</button>
                            <span>Have not an account <Link to={'/signup'}><span className="text-blue-500 underline">sign up</span></Link></span>
                        </div>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className="btn w-full  h-14  bg-base-300 rounded-box place-items-center">Login With Google<FcGoogle className="text-xl"></FcGoogle></button>
                    </form>

                </div>
            </div >
    );
};

export default SignIn;