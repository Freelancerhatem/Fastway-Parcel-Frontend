
import PropTypes from 'prop-types';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import img2 from '../../../assets/images/1.jpg'

const MyReviewsCard = ({ review, index }) => {
    const { name, img, date, rating, feedback } = review;
    const indexNum = parseInt(index)
    const indexSum = indexNum + 1
    return (
        <div>
            <div className={`   p-4 h-44 rounded-md mt-2 ${indexSum % 2 == 0 ? 'bg-green-200' : 'bg-gray-200'}`} >
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img src={img2} className='w-14 h-14 rounded-full ' alt="" />
                        <div>
                            <h1>{name}</h1>
                            <h1>{date}</h1>
                        </div>
                    </div>
                    <div className='pr-2'>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                        
                    </div>
                </div>

                <div className=''>
                    <span>{feedback}</span>
                </div>

            </div>


        </div>
    );
};

MyReviewsCard.propTypes = {
    review: PropTypes.object,
    index: PropTypes.number
};

export default MyReviewsCard;