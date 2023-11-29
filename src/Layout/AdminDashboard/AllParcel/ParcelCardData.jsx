
import PropTypes from 'prop-types';

const ParcelCardData = ({ parcelContent,index,handleShowModal}) => {
    const { userName,name, userPhone, number, bookingDate, requestedDeliveryDate,deliveryDate, cost,price, status,_id } = parcelContent;
     const indexNum = parseInt(index)
     const indexSum = indexNum +1
    

    return (
        <tr>
            <td className={`grid grid-cols-8 rounded-md mt-2 ${indexSum%2 == 0 ? 'bg-green-200' :'bg-gray-200' }`} >
                    <span>{index+1}</span>
                    <span>{userName || name}</span>
                    <span>{userPhone || number}</span>
                    <span className='ml-2'>{bookingDate}</span>
                    <span className='ml-4'>{requestedDeliveryDate || deliveryDate}</span>
                    <span className='ml-6'>{cost ||price}</span>
                    <span className='ml-6'>{status}</span>
                    <button onClick={()=>handleShowModal(_id)}  className='bg-yellow-100 ml-6 rounded-md text-base font-semibold p-1 w-1/2'>Manage</button>
            </td>
                
                    
                
            
        </tr>
    );
};

ParcelCardData.propTypes = {
    parcelContent: PropTypes.object,
    index:PropTypes.number,
    handleShowModal:PropTypes.func
    
};

export default ParcelCardData;