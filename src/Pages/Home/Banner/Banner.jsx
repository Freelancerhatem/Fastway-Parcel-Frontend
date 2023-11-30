import { TbSearch } from "react-icons/tb";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/images/1.png'
import TypedTextComponent from "../../../components/TypedTextComponent/TypedTextComponent";

const Banner = () => {
    const backgroundImageUrl = `url(${img1})`;

    return (
        <div className='max-w-full   h-screen bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: backgroundImageUrl }}>
            <div className="absolute flex flex-col justify-center items-center bg-black inset-0 bg-opacity-30">
                <div className="   w-1/3  ">
                    <form className="relative" >
                        <input type="text" name="search" placeholder="search" className="input  relative input-bordered rounded-full  bg-[#1db7ad]  placeholder:text-gray-200    focus:outline-none mx-auto  w-full " required />
                        <button type="submit" className="absolute  text-white bottom-3 right-8 text-2xl" ><TbSearch title="search"></TbSearch></button>

                    </form>
                </div>
                <div className="  left-[30%] bottom-12 lg:text-3xl text-yellow-200 font-extrabold">
                    <TypedTextComponent></TypedTextComponent>
                </div>
            </div>
        </div>
    );
};

export default Banner;