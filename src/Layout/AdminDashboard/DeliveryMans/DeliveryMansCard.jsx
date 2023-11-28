
import PropTypes from 'prop-types';

const DeliveryMansCard = ({ parcelContent }) => {
   const{name,averageReview,parcelsDelivered,phoneNumber} = parcelContent;
    return (
        <tr>
            <td className='grid grid-cols-4 '>
                <span>{name}</span>
                <span className='ml-4'>{phoneNumber}</span>
                <span>{parcelsDelivered}</span>
                <span className="ml-6">{averageReview}</span>
            </td>
        </tr>)
    
};

DeliveryMansCard.propTypes = {
    parcelContent:PropTypes.object
};

export default DeliveryMansCard;