
import PropTypes from 'prop-types';

const ParcelCardData = ({ parcelContent,index }) => {
    const { userName, userPhone, bookingDate, requestedDeliveryDate, cost, status } = parcelContent;
     const indexNum = parseInt(index)
     const indexSum = indexNum +1
    

    return (
        <tr>
            <td className={`grid grid-cols-8 rounded-md mt-2 ${indexSum%2 == 0 ? 'bg-green-200' :'bg-gray-200' }`} >
                    <span>{index+1}</span>
                    <span>{userName}</span>
                    <span>{userPhone}</span>
                    <span className='ml-2'>{bookingDate}</span>
                    <span className='ml-4'>{requestedDeliveryDate}</span>
                    <span className='ml-6'>{cost}</span>
                    <span className='ml-6'>{status}</span>
                    <button className='bg-yellow-100 ml-6 rounded-md text-base font-semibold p-1 w-1/2'>Manage</button>
            </td>
                
                    
                
            
        </tr>
    );
};

ParcelCardData.propTypes = {
    parcelContent: PropTypes.object,
    index:PropTypes.number
};

export default ParcelCardData;