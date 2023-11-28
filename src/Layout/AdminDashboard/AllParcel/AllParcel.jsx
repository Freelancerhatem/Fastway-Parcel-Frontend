// import { useEffect, useState } from "react";
import ParcelCardData from "./ParcelCardData";
import useDeliveryMan from "../../../Hooks/useDeliveryMan/useDeliveryMan";
import useAllParcel from "../../../Hooks/useAllParcel/useAllParcel";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useState } from "react";


const AllParcel = () => {
    const axiosSecure = useAxiosSecure();
    const [allparcelData,refetchallparcel] = useAllParcel();
    const [deliveryMan,refetch] = useDeliveryMan();
    const[parcelId,setparcelId] = useState();
    
    const handleShowModal = (id) => {
        // e.preventDefault();
        document.getElementById('my_modal').showModal();
        setparcelId(id)
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const mandata = form.field_1.value;
        const status = form.field_2.value;
        const deliveryManObj = deliveryMan.find((deliveryman)=>deliveryman.name === mandata) 
        const update ={id:deliveryManObj._id,status,parcelId} 
        // console.log({id:deliveryManObj._id,status})
        // console.log(customer_id)
        
        axiosSecure.patch('/parcelstatus',update)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0 ){
                refetchallparcel();
            }
        })
            
    }

    //to do: clicking on the submit button:
    //1: change the status pending to on the way
    //2: add the delivery man id


    return (


        <div className="overflow-x-hidden px-4 ">

            
            <dialog id="my_modal" className="modal   modal-bottom sm:modal-middle">
                <div className="modal-box">
                    
                    <form  className="py-4" onSubmit={handleSubmit}>
                    
                    <select name="field_1"  className="select select-success mt-3 focus:border-none  w-full max-w-xs">
                        <option disabled value='deliMan' >SELECT DELIVERY MAN</option>
                        {
                            deliveryMan.map((dMan,index)=> <option key={index}>{dMan.name}</option>)
                        }
                        

                    </select>
                    <select name="field_2" defaultValue={'field_2'}  className="select select-success mt-3 focus:border-none  w-full max-w-xs">
                        <option disabled value={'field_2'} >BOOKING STATUS?</option>
                        <option value={'On The Way'}>On The Way</option>
                        

                    </select>
                    
                    

                        <button className="btn btn-sm bg-green-300 absolute left-5 bottom-2">Submit</button>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn bg-transparent border-none hover:bg-transparent absolute right-2 top-2">✕</button>
                        </form>

                    </div>
                </div>
            </dialog>

            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-green-300 mt-12 rounded-md text-base text-black  grid grid-cols-8">
                        <td>Order No.</td>
                        <td>User Name</td>
                        <td>Phone</td>
                        <td>Booking Date</td>
                        <td>Delivery Date</td>
                        <td>Price</td>
                        <td>Status</td>
                        <td>Manage</td>


                    </tr>
                </thead>
                <tbody className="">

                    {
                        allparcelData?.map((parcelContent, index) => <ParcelCardData handleShowModal={handleShowModal} parcelContent={parcelContent} index={index} key={index}></ParcelCardData>)
                    }



                </tbody>

            </table>


        </div>


    );
};

export default AllParcel;