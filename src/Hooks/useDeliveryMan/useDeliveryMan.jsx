import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useDeliveryMan = () => {
   const axiosSecure = useAxiosSecure();
   
   const{data:deleiveryMan = [],refetch} = useQuery({
    queryKey:['deleiveryMan'],
    queryFn: async ()=>{
        const res = await axiosSecure.get('/deliveryman');
        return res.data;
    }
   });
   return[deleiveryMan,refetch]
};

export default useDeliveryMan;