import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import HomeStatics from "../HomeStatics/HomeStatics";
import SectionTitle from "../SectionTitle/SectionTitle";


const Featured = () => {
    const[Data,setData]=useState([]);
    
    useEffect(()=>{
        fetch('features.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    const mytext ='Swift, Secure Parcel Delivery: Your Reliable Shipping Solution Worldwide.'
    return (
        <div>
            <SectionTitle header='Our Services' text={mytext}></SectionTitle>
            <div className="grid gap-12 grid-cols-1  lg:grid-cols-3 px-14">
            {
                Data.map((singledata,idx)=><FeaturedCard key={idx} singledata={singledata}></FeaturedCard>)
            }

            </div>
            <div className=" max-w-[100vw] mt-20 flex justify-center">
                <HomeStatics></HomeStatics>
                
            </div>

        </div>
        
    );
};

export default Featured;