import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { auth } from "../../firebase/firebase.config";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { ImHome } from "react-icons/im";
import axios from "axios";
import imgcover from '../../assets/images/signcover.png'

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
        const imagefile = { image: imageInput }
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
                            .catch(() => {
                                toast.error('data update failed')
                            })



                    })
            }).catch((error) => {
                const message = error.message


            });

    }
    // console.log(user)




    return (
        <div className="grid grid-cols-2 justify-center items-center max-w-5xl mx-auto h-screen  shadow-2xl   " >
            <Toaster></Toaster>
            <div className=" relative ">
                <img src={imgcover} className="h-screen" alt="" />
                <Link to={'/'}><button className='flex items-center border-2 absolute bottom-[200px] left-5 gap-1 px-4 py-2 hover:text-[#1db7ad] bg-[#1db7ad] hover:bg-white text-white rounded-sm hover:border-[#1db7ad]'><ImHome />Go Home</button>
                </Link>
            </div>
            <div className="">
                <h1 className="text-2xl font-bold mb-6 text-[#1db7ad] text-center">Create Your Account</h1>
                <form onSubmit={handleCreateUser} className="w-full max-w-sm mx-auto  bg-opacity-40  p-8 rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-l-8 focus:border-[#1db7ad]"
                            type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Profile Photo</label>
                        <input className="w-full file-input px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-l-8 focus:border-[#1db7ad]"
                            type="file" id="image" name="image" placeholder="provide your image link here" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">User Type?</label>
                        <select name="type" defaultValue={'user'} className="select select-accent focus:outline-none focus:border-l-8 focus:border-[#1db7ad]  w-full max-w-xs">

                            <option value="user">Normal</option>
                            <option value="adimn">Admin</option>
                            <option value="deliveryMan">Delivery Man</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Email</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-l-8 focus:border-[#1db7ad]"
                            type="email" id="email" name="email" placeholder="your@mail.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Password</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-l-8 focus:border-[#1db7ad]"
                            type="password" id="password" name="password" placeholder="********" />
                    </div>
                    <div>
                        <button
                            className="w-full bg-[#1db7ad] text-white text-sm font-semibold border-2 border-transparent py-2 px-4 rounded-md hover:bg-[white] hover:text-[#1db7ad] hover:border-2 hover:border-[#1db7ad] "
                            type="submit">Create Account</button>
                        <span>Have  an account <Link to={'/signin'}><span className="text-[#1db7ad] underline">Login</span></Link></span>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default SignUp;