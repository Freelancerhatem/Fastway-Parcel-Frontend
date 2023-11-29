import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useMyBookinParcel = () => {
    const{user}=useContext(AuthContext);
    const{email} = user;
    console.log(email)
    const axiosSecure =useAxiosSecure();
    const{data:userParcel = [],refetch} = useQuery({
        queryKey:['userParcel'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/userparcel?email=${email}`)
            return res.data
        }
    })
    return[userParcel,refetch]
    
};

export default useMyBookinParcel;