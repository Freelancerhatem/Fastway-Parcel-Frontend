import { useEffect, useState } from "react";
import DeliveryMansCard from "./DeliveryMansCard";
import useDeliveryMan from "../../../Hooks/useDeliveryMan/useDeliveryMan";


const DeliveryMans = () => {
    // const [deliveryMansData, setdeliveryMansData] = useState([]);
    
    // useEffect(() => {
    //     fetch('../deliveryMan.json')
    //         .then(res =>res.json())
    //         .then(data =>setdeliveryMansData(data))
    // }, [])
    // console.log(deliveryMansData)

    const[deleiveryMan,refetch] = useDeliveryMan();
    return (
        <div className=" px-14">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-green-300  mt-12 rounded-md text-base text-black  grid grid-cols-4">
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Delivered</td>
                        <td >Average Ratings</td>
                        


                    </tr>
                </thead>
                <tbody className="">

                    {
                        deleiveryMan.map((parcelContent, index) =><DeliveryMansCard key={index} parcelContent={parcelContent}></DeliveryMansCard>) 
                    }
                </tbody>

            </table>
        </div>
    );
};

export default DeliveryMans;