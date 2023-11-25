
import PropTypes from 'prop-types';

const UsersCard = ({userData,index}) => {
    const{name,totalSpentAmount,parcelsDelivered,phoneNumber} = userData;
    const indexNum = parseInt(index)
     const indexSum = indexNum +1
    return (
        <tr>
            <td className={`grid grid-cols-8 gap-2 text-center rounded-md mt-2 ${indexSum%2 == 0 ? 'bg-green-200' :'bg-gray-200' }`}>
                <span>{indexSum}</span>
                <span>{name}</span>
                <span>{phoneNumber}</span>
                <span>{parcelsDelivered}</span>
                <span>{totalSpentAmount}</span>
                <button className='btn btn-sm'>Make D. Man</button>
                <button className='btn btn-sm'>Make Admin</button>
                
            </td>
        </tr>
    );
};

UsersCard.propTypes = {
    userData:PropTypes.object,
    index:PropTypes.number
};

export default UsersCard;