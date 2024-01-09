import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/images/signupcover.jpg'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { auth } from "../../firebase/firebase.config";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { FaHome } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { createUser, setUser, user, updateUserData } = useContext(AuthContext);
    

    const handleCreateUser = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const userType = form.type.value;
        const imageInput = form.image.files[0];
        const imagefile = { image:imageInput }
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
        // axios imgBB
        const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
        const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

        
        const res = await axios.post(image_upload_api, imagefile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        })
        const image = res.data.data.display_url;
        const userData = { name, email, TypeOfUser, image };
        

console.log(image)
console.log(res.data)
        // createUser(email, password)
        //     .then(() => {
        //         updateUserData(name, image)
        //             .then(() => {
        //                 // save user to db
        //                 axiosSecure.post('/allusersdata', userData)
        //                     .then(() => {
        //                         toast.success('sign up success')
        //                         setUser(auth.currentUser);
        //                         // signOutUser();
        //                         navigate('/')
        //                     })
        //                     .catch(() => {
        //                         toast.error('data update failed')
        //                     })



        //             })
        //     }).catch((error) => {
        //         console.log(error.message)


        //     });

    }
    // console.log(user)




    return (
        <div className="flex bg-no-repeat max-w-full h-screen  bg-center bg-cover" >
            <Toaster></Toaster>
            <div className="container mx-auto absolute   py-8">
                <Link to={'/'}><button className=" hover:cursor-pointer absolute top-2 flex justify-center items-center  left-2 w-12 h-12 bg-green-200 rounded-full"><FaHome></FaHome></button></Link>

                <h1 className="text-2xl font-bold mb-6 text-green-400 text-center">Sign Up</h1>
                <form onSubmit={handleCreateUser} className="w-full max-w-sm mx-auto  bg-opacity-40  p-8 rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                            type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image URL</label>
                        <input className="w-full file-input px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                            type="file" id="image" name="image" placeholder="provide your image link here" />
                    </div>
                    <select name="type" defaultValue={'text'} className="select select-accent w-full max-w-xs">
                        <option disabled value={'text'}>Type Of User?</option>
                        <option value="adimn">Admin</option>
                        <option value="deliveryMan">Delivery Man</option>
                        <option value="user">Normal User</option>
                    </select>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Email</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                            type="email" id="email" name="email" placeholder="your@mail.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Password</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                            type="password" id="password" name="password" placeholder="********" />
                    </div>
                    <div>
                        <button
                            className="w-full bg-green-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-green-300 transition duration-300"
                            type="submit">Sign Up</button>
                        <span>Have  an account <Link to={'/signin'}><span className="text-blue-500 underline">Login</span></Link></span>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default SignUp;