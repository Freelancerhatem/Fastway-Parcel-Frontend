
import PropTypes from 'prop-types';

const DeliveryMansCard = ({ parcelContent }) => {
   const{name,averageReview,parcelsDelivered,phoneNumber} = parcelContent;
    return (
        <tr>
            <td className='grid grid-cols-4 '>
                <span>{name}</span>
                <span className='ml-4'>{parcelsDelivered}</span>
                <span>{phoneNumber}</span>
                <span className="ml-6">{averageReview}</span>
            </td>
        </tr>)
    
};

DeliveryMansCard.propTypes = {
    parcelContent:PropTypes.object
};

export default DeliveryMansCard;