import PropTypes from 'prop-types';
import { AiOutlineEdit } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { CiStar } from "react-icons/ci";
import { SiAmazonpay } from "react-icons/si";
const MyParcelCard = ({ parcelContent, index }) => {
    const { userName, userPhone, bookingDate, requestedDeliveryDate, cost, status } = parcelContent;
    const indexNum = parseInt(index)
    const indexSum = indexNum + 1

    return (
        <tr>
            <td className={`grid grid-cols-10 rounded-md mt-2 ${indexSum % 2 == 0 ? 'bg-green-200' : 'bg-gray-200'}`} >
                
                <span>{'userName'}</span>
                <span>{'userPhone'}</span>
                <span className='ml-2'>{'bookingDate'}</span>
                <span className='ml-4'>{'request'}</span>
                <span className='ml-6'>{'cost'}</span>
                <span className='ml-4'>{'status'}</span>
                <button className="ml-6 bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><AiOutlineEdit></AiOutlineEdit></button>
                <button className="ml-6 bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><ImCancelCircle></ImCancelCircle></button>
                <button className="ml-8 bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><CiStar></CiStar></button>
                <button className=" ml-6 bg-green-300 w-8 h-8 flex justify-center items-center rounded-full"><SiAmazonpay></SiAmazonpay></button>
            </td>
        </tr>
    );
};
MyParcelCard.propTypes = {
    parcelContent: PropTypes.object,
    index: PropTypes.number

};

export default MyParcelCard;

