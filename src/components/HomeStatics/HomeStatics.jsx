import { useEffect, useState } from "react";
import useAllParcel from "../../Hooks/useAllParcel/useAllParcel";
import useUsers from "../../Hooks/useUsers";



const HomeStatics = () => {
    const[allparcelData]=useAllParcel();
    

    const [users,refetch] = useUsers();
    const TotalUser = users?.length;

    const[BookedPercel,setBookedPercel] = useState([]);
    const[deliveredData,setdeliveredData] = useState([]);

    useEffect(()=>{
        const filterDatas=allparcelData.filter(filterData=>filterData.status==='On The Way')
        setBookedPercel(filterDatas);
        

    },[allparcelData]);
    useEffect(()=>{
        const filterDeliverdDatas=allparcelData.filter(filterDeliveryData=>filterDeliveryData.status==='delivered')
        setdeliveredData(filterDeliverdDatas);
    },[allparcelData])
    
    return (
        <div className="stats shadow max-w-[100vw] ">
            
            <div className="flex flex-col lg:flex-row">
            <div className="stat">
                
                <div className="stat-title text-xl font-bold text-black">Total Users</div>
                <div className="stat-value text-primary text-center">{TotalUser}</div>
                
            </div>

            <div className="stat">
                
                <div className="stat-title text-xl font-bold text-black"> Parcel Booked</div>
                <div className="stat-value text-secondary text-center">{BookedPercel.length}</div>
                
            </div>

            <div className="stat">
            <div className="stat-title text-xl font-bold text-black"> Parcel Delivered</div>
                <div className="stat-value text-center">{deliveredData.length}</div>
                
                
            </div>
            
            </div>

        </div>
    );
};

export default HomeStatics;