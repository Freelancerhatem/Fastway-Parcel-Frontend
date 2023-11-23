import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";

const Featured = () => {
    const[Data,setData]=useState([]);
    
    useEffect(()=>{
        fetch('features.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className="grid gap-12 grid-cols-3 px-14">
            {
                Data.map((singledata,idx)=><FeaturedCard key={idx} singledata={singledata}></FeaturedCard>)
            }
        </div>
    );
};

export default Featured;