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
import useReviews from '../../../Hooks/useReviews/useReviews';

const MyParcelCard = ({ parcelContent, index, refetch }) => {
    const { user,loading } = useContext(AuthContext);
    const { _id, email, category, deliveryDate, status, deliveryman, bookingDate, } = parcelContent || '';
    const indexNum = parseInt(index)
    const indexSum = indexNum + 1

    const axiosSecure = useAxiosSecure();
    const [,refetchReview]=useReviews()
    const handleCancel = e => {
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
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
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
    const handleShowModal = (e) => {
        e.preventDefault();
        document.getElementById('my_modal2').showModal();
        // setparcelId(id)

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const feedback = form.feedback.value;
        const update ={name,rating,feedback,did:deliveryman} 
        // console.log({id:deliveryManObj._id,status})
        console.log(update)

        axiosSecure.post('/updatereview',update)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId ){
                refetchReview();
            }
        })

    }
    console.log(user)

    if (loading) {
        return 'loading'
    }
    else {
        return (
            <div>
                <dialog id="my_modal2" className="modal  h-[100vh]  modal-bottom sm:modal-middle">
                    <div className="modal-box">

                        <form className="py-4" onSubmit={handleSubmit}>

                            <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
                            <div>
                                <label htmlFor="buyer mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Name</label>
                                <input name="name" type="text" required  defaultValue={user.displayName} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                            </div>

                            <div>
                                <label htmlFor="buyer mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating(out of 5)</label>
                                <input name="rating" type="number" max={'5'} required  className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                            </div>
                            <div>
                                <label htmlFor="buyer mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">FeedBack</label>
                                <input name="feedback" type="text" required  className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                            </div>
                           <button className="btn btn-sm relative mt-4 bottom-0 bg-green-300">Submit</button>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">

                                <button className="btn bg-transparent border-none hover:bg-transparent absolute right-2 top-2">✕</button>
                            </form>

                        </div>
                    </div>
                </dialog>
                <div className={`grid grid-cols-10 text-center justify-center items-center h-16 rounded-md mt-2 ${indexSum % 2 == 0 ? 'bg-green-200' : 'bg-gray-200'}`} >

                    <span>{category}</span>
                    <span>{deliveryDate}</span>
                    <span className='ml-2'>{deliveryDate}</span>
                    <span className='ml-4'>{bookingDate}</span>
                    <span className='ml-6'>{deliveryman ? deliveryman.slice(0,5) : 'N/A'}</span>
                    <span className='ml-4'>{status}</span>
                    {
                        status === 'pending' ?
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
                    <button onClick={handleShowModal} className="mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><CiStar></CiStar></button>
                    <button className=" mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><SiAmazonpay></SiAmazonpay></button>
                </div>
            </div>
        );
    }
};
MyParcelCard.propTypes = {
    parcelContent: PropTypes.object,
    index: PropTypes.number,
    refetch: PropTypes.func

};

export default MyParcelCard;

