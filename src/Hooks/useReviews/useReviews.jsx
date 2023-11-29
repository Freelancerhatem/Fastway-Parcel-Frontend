import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useReviews = () => {
    const axiosSecure = useAxiosSecure();
    const {data:Reviews=[],refetch}=useQuery({
        queryKey:['Reviews'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/reviews')
            return res.data;
        }
    })
    return[Reviews,refetch];
};

export default useReviews;