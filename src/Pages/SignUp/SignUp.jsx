import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/images/signupcover.jpg'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { auth } from "../../firebase/firebase.config";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const SignUp = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { createUser, setUser, user, signOutUser, updateUserData } = useContext(AuthContext);

    const handleCreateUser = e => {
        e.preventDefault();
        toast.success('Here is your toast.');
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const userType = form.type.value;
        const image = form.image.value;
        let TypeOfUser = ''
        if (userType == 'admin') {
            TypeOfUser = 'isAdmin'
        }
        else if (userType == 'deliveryMan') {
            TypeOfUser = 'isdeliveryMan'
        }
        else {
            TypeOfUser = 'user'
        }


        const userData = { name, email, TypeOfUser, image };
        // console.log(userData);

        createUser(email, password)
            .then(() => {
                updateUserData(name, image)
                    .then(() => {
                        // save user to db
                        axiosSecure.post('/allusersdata', userData)
                            .then(() => {
                                toast.success('sign up success')
                                setUser(auth.currentUser);
                                // signOutUser();
                                navigate('/')
                            })
                            .catch(()=>{
                                toast.error('data update failed')
                            })



                    })
            }).catch((error) => {
                console.log(error.message)


            });

    }
    console.log(user)

    const BackImage = `url(${img})`;


    return (
        <div className="bg-no-repeat max-w-full h-screen  bg-center bg-cover" style={{ backgroundImage: BackImage }} >
            <Toaster></Toaster>
            <div className="container mx-auto absolute   py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form onSubmit={handleCreateUser} className="w-full max-w-sm mx-auto bg-white bg-opacity-40  p-8 rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image URL</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="text" id="image" name="image" placeholder="provide your image link here" />
                    </div>
                    <select name="type" defaultValue={'text'} className="select select-accent w-full max-w-xs">
                        <option disabled value={'text'}>Type Of User?</option>
                        <option value="adimn">Admin</option>
                        <option value="deliveryMan">Delivery Man</option>
                        <option value="user">Normal User</option>
                    </select>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Email</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="email" id="email" name="email" placeholder="your@mail.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Password</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="password" id="password" name="password" placeholder="********" />
                    </div>
                    <div>
                        <button
                            className="w-full bg-orange-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-orange-300 transition duration-300"
                            type="submit">Sign Up</button>
                        <span>Have  an account <Link to={'/signin'}><span className="text-blue-500 underline">Login</span></Link></span>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default SignUp;