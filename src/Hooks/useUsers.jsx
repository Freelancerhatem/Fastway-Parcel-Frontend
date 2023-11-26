import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data:users =[],refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res =await axiosPublic.get('/users')
            return res.data
        }
    });
    return [users,refetch]
};

export default useUsers;