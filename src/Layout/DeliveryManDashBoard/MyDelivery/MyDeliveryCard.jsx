import { GiCancel } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import PropTypes from 'prop-types';

const MyDeliveryCard = ({parcelContent,index,handleDelivery}) => {
    const { userName, userPhone, bookingDate, requestedDeliveryDate, cost, status,_id } = parcelContent;
    
     const indexNum = parseInt(index)
     const indexSum = indexNum +1
    return (
        <div>
        <div className={`grid w-[1100px] grid-cols-9 h-20   justify-center items-center rounded-md mt-2 ${indexSum%2 == 0 ? 'bg-green-200' :'bg-gray-200' }`} >
                <span className='ml-4'>{index+1}</span>
                <span>{userName}</span>
                <span>{userPhone}</span>
                <span className='ml-2'>{bookingDate}</span>
                <span className='ml-4'>{requestedDeliveryDate}</span>
                <span className=''>{cost}</span>
                <span className=''>{status}</span>
                <button   className=' text-2xl font-semibold ml-4'><GiCancel/></button>
                <div className="flex  items-center justify-center bg-green-200 ">
                <MdOutlineShoppingCart> </MdOutlineShoppingCart>
                <button onClick={()=>handleDelivery(_id)}  className='  rounded-md text-base font-semibold  w-1/2'>Delivered</button>

                
                </div>
        </div>
            
                
            
        
    </div>
    );
};

MyDeliveryCard.propTypes = {
    parcelContent:PropTypes.object,
    index:PropTypes.number,
    handleDelivery:PropTypes.func
};

export default MyDeliveryCard;