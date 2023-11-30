import { useContext, useEffect } from 'react';
import img from '../../../assets/images/cover.jpg'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import useUsers from '../../../Hooks/useUsers';

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY; 
const image_upload_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`
const MyProfile = () => {
    const {user,updateUserData}=useContext(AuthContext);
    const {photoURL} = user;
    const{email} = user;
    
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const[users,refetch]=useUsers()
    
    const profileUser = users?.find(userImgObj=>userImgObj.email==email);
    const{image} = profileUser ||'' ;
   
    const OnSubmit=async(data)=>{
        
        const imagedata = {image: data.image[0]}
      const res=await  axiosPublic.post(image_upload_api,imagedata,{
            headers:{
                "Content-Type":"multipart/form-data",
            }
        })
       console.log(res.data.data)
       
        const updateImage={img:res.data.data.display_url}
        toast.success('image uploaded success');
        axiosSecure.patch(`/updateImage?user=${email}`,updateImage)
        .then(res=>{
            console.log(res.data)
        if(res.data.modifiedCount > 0){
            
            refetch();
            reset()

        }
        })
        
       
        
   }
   


    return (
        <div className=" h-screen border   relative">
            <Toaster></Toaster>

            <div className=' w-full h-44 absolute flex justify-center    '>
                <img className='h-full w-screen object-fill' src={img} alt="" />

            </div>
            <div className='w-full absolute top-32 z-20 px-32  h-5/6'>
                <div className='bg-green-200 relative  rounded-md w-full h-5/6'>
                    <img className='w-24 h-24 absolute left-[calc(50%-48px)] -top-12 rounded-full bg-red-400 ' src={image? image : photoURL} alt="" />
                    <div className='relative flex flex-col top-6 left-14'>
                        <span className='text-3xl font-bold'>{user.displayName}</span>
                        <span className='text-xs'>{user.email}</span>
                     </div>
                     
                     <form onSubmit={handleSubmit(OnSubmit)} className='absolute flex gap-2 items-center top-6 right-14'>
                     <input {...register('image',{required:true})} type="file"  className="file-input file-input-bordered file-input-sm w-full" />
                        <button className="btn btn-sm ">Upload</button>
                     </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;