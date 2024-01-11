import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Featured from "../../components/Featured/Featured";
import TopDeliveryMan from "../../components/TopDeliveryMan/TopDeliveryMan";
import { Toaster } from "react-hot-toast";
import Promotion from "../../components/Promotion/Promotion";
import Contacts from "../../components/Contacts/Contacts";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    
    return (
        <div>
            <Toaster></Toaster>
            <Helmet>
                <title>fastway.parcel.com</title>                
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Promotion></Promotion>
            
            
            <Featured></Featured>
            <TopDeliveryMan></TopDeliveryMan>
            <Contacts></Contacts>
            
        </div>
    );
};

export default Home;