import { useEffect, useState } from "react";
import TopDeliveryManCard from "./TopDeliveryManCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const TopDeliveryMan = () => {
    const[DeliveryDatas,setDeliveryDatas] = useState([])
    useEffect(()=>{
        fetch('top_delivery.json')
        .then(res=>res.json())
        .then(data=>setDeliveryDatas(data))
    },[])
    return (
        <div className="mt-12">
            <SectionTitle header={'Top Delivery Man'} text={'Here is our top delivery man who contribute their best effort to us.'}></SectionTitle>
            <div className="grid lg:grid-cols-3 grid-cols-1 px-14  gap-28">

            {
                DeliveryDatas.map((DeliveryData,idx)=><TopDeliveryManCard DeliveryData={DeliveryData} key={idx} ></TopDeliveryManCard>)
            }
        </div>
        </div>
        
    );
};

export default TopDeliveryMan;