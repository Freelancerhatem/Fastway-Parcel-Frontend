
import PropTypes from 'prop-types';

const UsersCard = ({userData,index,handleDeliveryMan,handleAdmin}) => {
    const{name,totalSpentAmount,parcelsDelivered,phoneNumber,_id,userType} = userData;
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
                {
                    userType !== 'deliveryMan' ?
                <button onClick={()=>handleDeliveryMan(_id)} className={`btn btn-sm`}>Make D. Man</button>
                    :
                    <span>Delivery Man</span>
                }
                {
                    userType !== 'admin' ?
                    <button onClick={()=>handleAdmin(_id)} className={`btn btn-sm`}>Make Admin</button>
                    :
                    <span>Admin</span>
                }
                
                
            </td>
        </tr>
    );
};

UsersCard.propTypes = {
    userData:PropTypes.object,
    index:PropTypes.number,
    handleDeliveryMan:PropTypes.func,
    handleAdmin:PropTypes.func
};

export default UsersCard;