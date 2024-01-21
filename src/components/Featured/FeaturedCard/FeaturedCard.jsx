
import PropTypes from 'prop-types';
import LottieAnimation from '../../LottieAnimation/LottieAnimation';
import fast from '../../../assets/animation/cardanim1.json'
import safety from '../../../assets/animation/safe.json'
import support from '../../../assets/animation/support.json'


const FeaturedCard = ({singledata}) => {
    const {id,title,description} = singledata;
    return (
        <div className=' bg-gray-50  shadow rounded-lg hover:transition-all p-5 hover:translate-y-1'>
            <LottieAnimation anim={id=='1'?fast: id=='2'? safety:support}></LottieAnimation>
            <h1 className='text-center bg-yellow-200  rounded-xl text-2xl font-semibold'>{title}</h1>
            <p className=' text-justify mt-5'>{description}</p>
        </div>
    );
};

FeaturedCard.propTypes = {
    singledata:PropTypes.object
};

export default FeaturedCard;