import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Featured from "../../components/Featured/Featured";


const Home = () => {
    const mytext ='In the competitive landscape of parcel services, excelling in customer satisfaction is paramount.'
    return (
        <div>
            <Helmet>
                <title>FastWay | Home</title>                
            </Helmet>
            <Banner></Banner>
            <SectionTitle header='We Provide Best Service' text={mytext}></SectionTitle>
            <Featured></Featured>
        </div>
    );
};

export default Home;