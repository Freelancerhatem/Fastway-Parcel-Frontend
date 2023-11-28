
import MyDeliveryCard from "./MyDeliveryCard";
import useAllParcel from "../../../Hooks/useAllParcel/useAllParcel";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useMyParcel from "../../../Hooks/useMyparcel/useMyParcel";


const MyDelivery = () => {
    const axiosSecure = useAxiosSecure();
    // const [, refetchallparcel] = useAllParcel();

    const [MyParcel,refetchMyDelivery] = useMyParcel();
    

    const handleDelivery=(id)=>{
       
       axiosSecure.patch('/deliveryUpdate',{id})
       .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount > 0 ){
            toast.success('parcel delivered');
            refetchMyDelivery();
        }
       })

    }
    

    

    return (
        <div>
            <Toaster></Toaster>
            <div className="">
                {/* head */}
                <div>
                    <div className="bg-green-300 mt-12 h-20 px-4 justify-center items-center rounded-md text-base text-black  grid grid-cols-9 w-[1100px]">
                        <span>No.</span>
                        <span>User Name</span>
                        <span >Phone</span>
                        <span>Booking Date</span>
                        <span>Delivery Date</span>
                        <span>Price</span>
                        <span>Status</span>
                        <span>Cancelation</span>
                        <span>Delivery Button</span>
                        


                    </div>
                </div>
                <div className="">

                    {
                        MyParcel?.map((parcelContent, index) => <MyDeliveryCard parcelContent={parcelContent} handleDelivery={handleDelivery}  index={index} key={index}></MyDeliveryCard>)
                    }



                </div>

            </div>
        </div>
    );
};

export default MyDelivery;