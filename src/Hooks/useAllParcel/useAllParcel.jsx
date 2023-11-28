import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAllParcel = () => {
    const axiosSecure = useAxiosSecure();
    const{data: allparcelData =[],refetch: refetchallparcel} = useQuery({
        queryKey:['allparcelData'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/allparcel')
            return res.data
        }
    })
    return [allparcelData,refetchallparcel];
};

export default useAllParcel;