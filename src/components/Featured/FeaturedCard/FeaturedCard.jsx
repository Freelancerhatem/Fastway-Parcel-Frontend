
import PropTypes from 'prop-types';
import LottieAnimation from '../../LottieAnimation/LottieAnimation';
import fast from '../../../assets/animation/cardanim1.json'
import safety from '../../../assets/animation/safe.json'
import support from '../../../assets/animation/support.json'


const FeaturedCard = ({singledata}) => {
    const {id,title,description} = singledata;
    return (
        <div className='h-[400px] bg-gray-50 rounded-lg hover:'>
            <LottieAnimation anim={id=='1'?fast: id=='2'? safety:support}></LottieAnimation>
            <h1 className='text-center text-2xl font-semibold'>{title}</h1>
            <p className='px-5 mt-5'>{description}</p>
        </div>
    );
};

FeaturedCard.propTypes = {
    singledata:PropTypes.object
};

export default FeaturedCard;