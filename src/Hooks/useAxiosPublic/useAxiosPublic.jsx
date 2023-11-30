import axios from 'axios';
const axiosPublic =axios.create({
    baseURL:'https://fastway-parcel-backend.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;