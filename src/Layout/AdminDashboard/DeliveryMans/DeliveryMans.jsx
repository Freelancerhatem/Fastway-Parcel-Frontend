import { useEffect, useState } from "react";
import DeliveryMansCard from "./DeliveryMansCard";


const DeliveryMans = () => {
    const [deliveryMansData, setdeliveryMansData] = useState([]);
    
    useEffect(() => {
        fetch('../deliveryMan.json')
            .then(res =>res.json())
            .then(data =>setdeliveryMansData(data))
    }, [])
    console.log(deliveryMansData)
    return (
        <div className=" px-14">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-green-300  mt-12 rounded-md text-base text-black  grid grid-cols-4">
                        <td>Name</td>
                        <td>User Name</td>
                        <td>Phone</td>
                        <td >Average Ratings</td>
                        


                    </tr>
                </thead>
                <tbody className="">

                    {
                        deliveryMansData.map((parcelContent, index) =><DeliveryMansCard key={index} parcelContent={parcelContent}></DeliveryMansCard>) 
                    }
                </tbody>

            </table>
        </div>
    );
};

export default DeliveryMans;