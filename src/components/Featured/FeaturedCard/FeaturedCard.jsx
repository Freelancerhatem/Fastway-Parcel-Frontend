
import PropTypes from 'prop-types';

const FeaturedCard = ({singledata}) => {
    const {img,title,description} = singledata;
    return (
        <div className='h-[400px] bg-gray-50 rounded-lg hover:bg-green-300'>
            <img className='h-1/2 mx-auto pt-5' src={img} alt="" />
            
            <h1 className='text-center text-2xl font-semibold'>{title}</h1>
            <p className='px-5 mt-5'>{description}</p>
        </div>
    );
};

FeaturedCard.propTypes = {
    singledata:PropTypes.object
};

export default FeaturedCard;