/* eslint-disable react/no-unescaped-entities */
import LottieAnimation from "../LottieAnimation/LottieAnimation";
import anim from '../../assets/animation/anim2.json'
import { IoCall } from "react-icons/io5";

const Promotion = () => {
    return (
        <div className="grid grid-cols-2 justify-center items-end h-[60vh]">
            <div>
                <LottieAnimation anim={anim}></LottieAnimation>
            </div>
            <div>
                <h1 className="text-3xl font-extrabold">Do You Want A Fast Service? <br /> Just Call Us.</h1>
                <p>In the hustle and bustle of today's world, timely deliveries are crucial. At [Your Company Name], we understand the need for speed, and that's why we offer a Fast Delivery Service that's just a call away!</p>
                <p>Our delivery service is designed for speed without compromising on safety. Your packages are handled with care, and our efficient logistics ensure a swift journey from sender to receiver.</p>
                <button className='flex items-center border-2 gap-1 px-4 py-2 text-[#1db7ad] hover:bg-[#1db7ad] hover:text-white rounded-sm border-[#1db7ad]'><IoCall />Call Now
                </button>
            </div>
        </div>
    );
};

export default Promotion;