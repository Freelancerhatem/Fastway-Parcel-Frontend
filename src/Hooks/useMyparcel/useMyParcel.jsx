import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useMyParcel = () => {
    const myEmail = 'dm_1@fasway.com';
    const axiosSecure =useAxiosSecure();
    const {data: MyParcel=[],refetch:refetchMyDelivery} = useQuery({
        queryKey:['MyParcel'],
        queryFn: async ()=>{
           const res =await axiosSecure.get(`/myparceldata?user=${myEmail}`);
           return res.data;
        }
    
    });
    return[MyParcel,refetchMyDelivery]
};

export default useMyParcel;