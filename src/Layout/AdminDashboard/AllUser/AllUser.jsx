// import { useState,useEffect } from "react";
import UsersCard from "./UsersCard";
import useUsers from "../../../Hooks/useUsers";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const AllUser = () => {
    const [users, refetch] = useUsers();
    const axiosSecure = useAxiosSecure()

    const handleDeliveryMan = (id) => {
        const userData = users.find(user => user._id === id);
        const { name, userType } = userData

        Swal.fire({
            title: "Do You Want?",
            text: `${name} Make A Delivery  Man`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1db7ad",
            cancelButtonColor: "#fac900",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            // toast.success(`${name} ${userType}`);

                        }
                    })



                Swal.fire({
                    title: "Success!",
                    text: `${name} is now a Delivery Man`,
                    icon: "success"
                });
            }
        });






    }
    return (
        <div className=" px-14">
            <Toaster></Toaster>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-green-300 text-center  mt-12 rounded-md text-base text-black  grid grid-cols-8">
                        <td>Serial No.</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Parcel Delivery</td>
                        <td >Total Amount</td>
                        <td >Total Amount</td>
                        <td >Total Amount</td>



                    </tr>
                </thead>
                <tbody className="">

                    {
                        users?.map((userData, index) => <UsersCard key={index} handleDeliveryMan={handleDeliveryMan} index={index} userData={userData}></UsersCard>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllUser;