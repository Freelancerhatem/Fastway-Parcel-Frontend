
import MyParcelCard from "./MyParcelCard";
import useMyBookinParcel from "../../../Hooks/useMyBookinParcel/useMyBookinParcel";


const MyParcel = () => {
    
    const [userParcel,refetch] = useMyBookinParcel();
    
    return (
        <div className="w-full p-14">
            <div className="table">
                
                <div>
                    <div className="bg-green-300 justify-center text-center px-1 h-20 items-center  font-bold mt-12 rounded-md text-sm text-black  grid grid-cols-10">
                        <span>Parcel Type</span>
                        <span>Req. Del. Date</span>
                        <span>Apt Del Date</span>
                        <span>Booking Date</span>
                        <span>Del. Men ID</span>
                        <span>Status</span>
                        <span>update</span>
                        <span>cancel</span>
                        <span>review</span>
                        <span>pay</span>
                    </div>
                </div>
                <div className="">

                    {
                        userParcel?.map((parcelContent, index) => <MyParcelCard parcelContent={parcelContent} refetch={refetch} index={index} key={index}></MyParcelCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default MyParcel;