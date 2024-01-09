
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/images/1.png'
import TypedTextComponent from "../../../components/TypedTextComponent/TypedTextComponent";
import useAos from "../../../Hooks/useAos/useAos";

const Banner = () => {
    const backgroundImageUrl = `url(${img1})`;
    useAos();
    return (
        <div id='home' className='max-w-full mt-16 relative h-[70vh] bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: backgroundImageUrl }}>

            {/* <div>
                    <h1 data-aos='fade-up' className="flex justify-center items-center h-[calc(100vh-120px)]  text-5xl   text-center  font-extrabold top-[calc(50vh-60px)]"><span className="text-[#1db7ad]">Express Delivery,</span><span className="text-[#fac900]"> Exceptional Service</span></h1>
                </div> */}
            <div className="  absolute  w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-5xl text-white ">
                    <TypedTextComponent></TypedTextComponent>
                </div>
            <div className="absolute w-1/2  rounded-lg h-28 bg-white shadow-xl shadow-[#d5d4d4] -bottom-14 left-[25vw]">
                <div className="relative  w-full h-full p-8 flex  justify-center items-center ">
                    
                    <input type="text" className="input    border border-gray-200 border-r-0 rounded-r-none focus:border-gray-200  focus:outline-none w-[calc(100%-200px)]" />
                    <button className="h-12 bg-[#fac900]  rounded-l-none rounded-lg text-white px-6">search</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;