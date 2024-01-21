import { useEffect, useState } from "react";
import useAllParcel from "../../Hooks/useAllParcel/useAllParcel";
import useUsers from "../../Hooks/useUsers";
import NumberCount from "../NumberCount/NumberCount";
import ScrollTrigger from "react-scroll-trigger";



const HomeStatics = () => {
    const [allparcelData] = useAllParcel();


    const [users, refetch] = useUsers();
    const TotalUser = users?.length;

    const [BookedPercel, setBookedPercel] = useState([]);
    const [deliveredData, setdeliveredData] = useState([]);
    const [counterOn, setCounterOn] = useState(false)
    useEffect(() => {
        const filterDatas = allparcelData.filter(filterData => filterData.status === 'On The Way')
        setBookedPercel(filterDatas);


    }, [allparcelData]);
    useEffect(() => {
        const filterDeliverdDatas = allparcelData.filter(filterDeliveryData => filterDeliveryData.status === 'delivered')
        setdeliveredData(filterDeliverdDatas);
    }, [allparcelData])

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="stats shadow max-w-[100vw] ">

                <div className="flex flex-col lg:flex-row">
                    <div className="stat">

                        <div className="stat-title text-xl font-bold text-black">Total Users</div>
                        <div className="stat-value text-primary text-center">{counterOn && <NumberCount endValue={TotalUser}></NumberCount>}</div>

                    </div>

                    <div className="stat">

                        <div className="stat-title text-xl font-bold text-black"> Parcel Booked</div>
                        <div className="stat-value text-secondary text-center">{counterOn && <NumberCount endValue={BookedPercel.length}></NumberCount>}</div>

                    </div>

                    <div className="stat">
                        <div className="stat-title text-xl font-bold text-black"> Parcel Delivered</div>
                        <div className="stat-value text-center">{counterOn && <NumberCount endValue={deliveredData.length}></NumberCount>}</div>


                    </div>

                </div>

            </div>
        </ScrollTrigger>
    );
};

export default HomeStatics;