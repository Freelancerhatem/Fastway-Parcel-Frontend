import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Featured from "../../components/Featured/Featured";
import TopDeliveryMan from "../../components/TopDeliveryMan/TopDeliveryMan";
import { Toaster } from "react-hot-toast";
import Promotion from "../../components/Promotion/Promotion";
import Contacts from "../../components/Contacts/Contacts";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    const mytext ='In the competitive landscape of parcel services, excelling in customer satisfaction is paramount.'
    return (
        <div>
            <Toaster></Toaster>
            <Helmet>
                <title>fastway.parcel.com</title>                
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Promotion></Promotion>
            <SectionTitle header='We Provide Best Service' text={mytext}></SectionTitle>
            
            <Featured></Featured>
            <TopDeliveryMan></TopDeliveryMan>
            <Contacts></Contacts>
            
        </div>
    );
};

export default Home;