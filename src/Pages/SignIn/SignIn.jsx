import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const SignIn = () => {
    const handleLogin =e=>{
        e.preventDefault();
        toast.success('login succes');
    }
    const handleGoogleLogin =e=>{
        e.preventDefault();
        toast.success('login google succes');
    }
    return (
        <div className="flex mt-32 items-center" >
            <Toaster></Toaster>
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Login Form</h1>
                    <form onSubmit={handleLogin}  className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                type="email" id="email" name="email" placeholder="your@email.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                type="password" id="password" name="password" placeholder="********" />
                        </div>

                        <div>
                        <button
                            className="w-full bg-orange-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-orange-300 transition duration-300"
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