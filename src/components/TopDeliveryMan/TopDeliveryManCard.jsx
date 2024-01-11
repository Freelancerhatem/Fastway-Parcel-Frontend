
import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import profile from '../../assets/images/dman.png'
import profileCover from '../../assets/images/cover2.jpg'

const TopDeliveryManCard = ({ DeliveryData }) => {
    const { name, image, averageReview, parcelsDelivered } = DeliveryData;
    console.log(DeliveryData);
    const url = `url(${profileCover})`
    return (
        <div className=' space-y-2   ease-in-out transition hover:translate-y-1  h-64 bg-slate-100 shadow-xl rounded-xl text-black'>
            <div className='relative w-full rounded-t-xl h-20 bg-contain mb-8 ' style={{ backgroundImage: url }}>

                <img src={image || profile} className='w-24 absolute -bottom-6 border-4 border-[#fac900]   left-[calc(197px-48px)]  rounded-full bg-white' alt="" />
            </div>
            <div className=''>
                <p className='lg:text-xl text-base text-center font-bold flex flex-col items-center'>{name}<Rating
                    style={{ maxWidth: 80 }}
                    value={averageReview}
                    readOnly
                /></p>
                <div className='flex justify-between px-5 mt-3'>
                    <div className='flex items-center'>
                        <p className='bg-transparent px-1 py-2 text-black border-2 rounded-l-lg border-r-0  border-[#fac900]'>Ratings</p>
                        <p className='flex items-center border-2 gap-1 px-4 py-2 rounded-r-lg   bg-[#1db7ad] text-white rounded-sm border-[#1db7ad]'>{averageReview}</p>
                    </div>
                    <div className='flex items-center'>
                        <h2 className='bg-[#fac900]  px-1 py-2 text-white border-2 rounded-l-lg border-[#fac900]'>
                            Total Delivery

                        </h2>
                        <p className='flex items-center border-2 gap-1 px-4 py-2 rounded-r-lg  text-[#1db7ad] hover:bg-[#1db7ad] hover:text-white rounded-sm border-[#1db7ad]'>{parcelsDelivered}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopDeliveryManCard.propTypes = {
    DeliveryData: PropTypes.object
};

export default TopDeliveryManCard;