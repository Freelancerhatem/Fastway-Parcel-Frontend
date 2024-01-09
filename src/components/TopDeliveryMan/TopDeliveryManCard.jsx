
import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';

const TopDeliveryManCard = ({ DeliveryData }) => {
    const { name, image, averageReview, parcelsDelivered } = DeliveryData;
    return (
        <div className='px-12 space-y-2 lg:pt-8 pt-2 ease-in-out transition hover:translate-y-2 lg:h-56 h-64 bg-slate-100 shadow-xl rounded-xl text-black'>
            <img src={image} alt="" />
            <span className=''>Name:<p className='lg:text-xl text-base font-bold'>{name}</p></span>
            <p> User Ratings:{averageReview}
                <Rating
                    style={{ maxWidth: 120 }}
                    value={averageReview}
                    readOnly
                />
            </p>
            <h2>
                Total Parcel Delivery:{parcelsDelivered}

            </h2>
        </div>
    );
};

TopDeliveryManCard.propTypes = {
    DeliveryData: PropTypes.object
};

export default TopDeliveryManCard;