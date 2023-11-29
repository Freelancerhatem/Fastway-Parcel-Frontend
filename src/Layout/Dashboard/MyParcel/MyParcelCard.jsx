import PropTypes from 'prop-types';
import { AiOutlineEdit } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { CiStar } from "react-icons/ci";
import { SiAmazonpay } from "react-icons/si";
const MyParcelCard = ({ parcelContent, index }) => {
    const{_id,email,category,deliveryDate,status, deliveryMan,bookingDate,}=parcelContent;
    const indexNum = parseInt(index)
    const indexSum = indexNum + 1

    return (
        <div>
            <div className={`grid grid-cols-10 text-center justify-center items-center h-16 rounded-md mt-2 ${indexSum % 2 == 0 ? 'bg-green-200' : 'bg-gray-200'}`} >
                
                <span>{category}</span>
                <span>{deliveryDate}</span>
                <span className='ml-2'>{deliveryDate}</span>
                <span className='ml-4'>{bookingDate}</span>
                <span className='ml-6'>{deliveryMan? deliveryMan : 'N/A'}</span>
                <span className='ml-4'>{status}</span>
                <button className="mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><AiOutlineEdit></AiOutlineEdit></button>
                <button className="mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><ImCancelCircle></ImCancelCircle></button>
                <button className="mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><CiStar></CiStar></button>
                <button className=" mx-auto bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><SiAmazonpay></SiAmazonpay></button>
            </div>
        </div>
    );
};
MyParcelCard.propTypes = {
    parcelContent: PropTypes.object,
    index: PropTypes.number

};

export default MyParcelCard;

