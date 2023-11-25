import { useState,useEffect } from "react";
import UsersCard from "./UsersCard";


const AllUser = () => {
    const[Data,setData] = useState([]);
    
     useEffect(()=>{
        fetch('/userdata.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className=" px-14">
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
                        Data?.map((userData, index) =><UsersCard key={index} index={index} userData={userData}></UsersCard>) 
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllUser;