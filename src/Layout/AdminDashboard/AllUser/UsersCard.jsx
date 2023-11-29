
import PropTypes from 'prop-types';

const UsersCard = ({userData,index,handleDeliveryMan,handleAdmin}) => {
    const{name,_id,TypeOfUser,phone,parcelsDelivered,totalSpentAmount,userType} = userData;
    const indexNum = parseInt(index)
     const indexSum = indexNum +1;
     console.log(TypeOfUser)
    return (
        <tr>
            <td className={`grid grid-cols-8 gap-2 text-center items-center rounded-md mt-2 ${indexSum%2 == 0 ? 'bg-green-200' :'bg-gray-200' }`}>
                <span>{indexSum}</span>
                <span>{name}</span>
                <span>{phone? phone : 'N/A'}</span>
                <span> {parcelsDelivered? parcelsDelivered : 'N/A'}</span>
                <span>{totalSpentAmount?totalSpentAmount :'N/A'}</span>
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
                <span>{TypeOfUser === 'isAdmin'? 'admin':TypeOfUser === 'isdeliveryMan'? 'delivery man' :'N/A'}</span>
                
                
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