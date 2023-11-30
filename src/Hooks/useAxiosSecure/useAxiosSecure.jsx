import axios from "axios";
const axiosSecure = axios.create({
    baseURL:'https://fastway-parcel-backend.vercel.app/'
})
const useAxiosSecure = () => {
    
    return axiosSecure;
    
};

export default useAxiosSecure;