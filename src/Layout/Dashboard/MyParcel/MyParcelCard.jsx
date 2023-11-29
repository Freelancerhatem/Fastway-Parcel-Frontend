import PropTypes from 'prop-types';
import { AiOutlineEdit } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { CiStar } from "react-icons/ci";
import { SiAmazonpay } from "react-icons/si";
import { MdOutlineCommentsDisabled } from "react-icons/md";
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyParcelCard = ({ parcelContent, index ,refetch}) => {
    const{loading} = useContext(AuthContext);
    const{_id,email,category,deliveryDate,status, deliveryMan,bookingDate,}=parcelContent;
    const indexNum = parseInt(index)
    const indexSum = indexNum + 1

    const axiosSecure = useAxiosSecure();
    const handleCancel =e=>{
        e.preventDefault();

        Swal.fire({
            title: "Are you sure?",
            text: "cancel this ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/cancelStatus/${_id}`)
                .then(res=>{console.log(res.data)
                
                    if(res.data.modifiedCount>0){
                        Swal.fire({
                            title: "Cancelled!",
                            text: "Your parcel is cancelled.",
                            icon: "success"
                          });
                          refetch()
                    }
                
                })
              
                
            }
          });
        

        
    }
    if(loading){
        return 'loading'
    }
    else{
        return (
            <div>
                <div className={`grid grid-cols-10 text-center justify-center items-center h-16 rounded-md mt-2 ${indexSum % 2 == 0 ? 'bg-green-200' : 'bg-gray-200'}`} >
                    
                    <span>{category}</span>
                    <span>{deliveryDate}</span>
                    <span className='ml-2'>{deliveryDate}</span>
                    <span className='ml-4'>{bookingDate}</span>
                    <span className='ml-6'>{deliveryMan? deliveryMan : 'N/A'}</span>
                    <span className='ml-4'>{status}</span>
                    {
                        status ==='pending' ?
                        <Link to={`/dashboard/updateParcel/${_id}`}><button className="mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><AiOutlineEdit></AiOutlineEdit></button></Link>
                        :
                        <span className="mx-auto bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full"><MdOutlineCommentsDisabled></MdOutlineCommentsDisabled></span>
                    
                    }
    
                    {
                        status === 'pending' ?
                        <button onClick={handleCancel} className="mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><ImCancelCircle></ImCancelCircle></button>
                        :
                        <span className="mx-auto bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full"><ImCancelCircle></ImCancelCircle></span>
                    
                    }
                    <button className="mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><CiStar></CiStar></button>
                    <button className=" mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><SiAmazonpay></SiAmazonpay></button>
                </div>
            </div>
        );
    }
};
MyParcelCard.propTypes = {
    parcelContent: PropTypes.object,
    index: PropTypes.number,
    refetch:PropTypes.func

};

export default MyParcelCard;

