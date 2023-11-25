
import PropTypes from 'prop-types';

const TopDeliveryManCard = ({DeliveryData}) => {
    const {name,image,ratings} = DeliveryData;
    return (
        <div className=' h-56 bg-slate-400 text-black'>
            <img src={image} alt="" />
            <span>{name}</span>
            <span>{ratings}</span>
        </div>
    );
};

TopDeliveryManCard.propTypes = {
    DeliveryData:PropTypes.object  
};

export default TopDeliveryManCard;