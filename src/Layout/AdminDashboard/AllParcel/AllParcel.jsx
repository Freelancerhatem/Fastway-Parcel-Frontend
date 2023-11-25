import { useEffect, useState } from "react";
import ParcelCardData from "./ParcelCardData";


const AllParcel = () => {
    const [parcelData, setParcelData] = useState([]);


    useEffect(()=>{
        fetch('/parcel.json')
        .then(res=>res.json())
        .then(data=>setParcelData(data))
    },[])


    // const [{ userName, userPhone, bookingDate, requestedDeliveryDate, cost, status }] = parcelData;




    return (
     

            <div className="overflow-x-hidden px-4 ">
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
                            parcelData.map((parcelContent, index) => <ParcelCardData parcelContent={parcelContent} index={index} key={index}></ParcelCardData>)
                        }
                        
        
                    </tbody>
                </table>
            </div>

        
    );
};

export default AllParcel;