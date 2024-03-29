
import PropTypes from 'prop-types';
const SectionTitle = ({header,text}) => {
    return (
        <div className='my-12  px-14  w-1/2 mx-auto'>
            <h1 className='lg:text-3xl font-extrabold text-base text-center'>{header}</h1>
            <h1 className='text-gray-400 text-center'>{text}</h1>

           
        </div>
    );
};
SectionTitle.propTypes = {
    header:PropTypes.any,
    text:PropTypes.any,
};

export default SectionTitle;

