import { Link } from 'react-router-dom';
import img from '../../assets/images/404.jpg'

const Error = () => {
    const backImg = `url${img}`
    return (
        <div className="w-screen flex relative justify-center items-center bg-green-200 h-screen bg-cover bg-center " style={{ backgroundImage: backImg }}>
            
                <img className='w-1/2 h-1/2  rounded-full' src={img} alt="" />
                <h1 className="text-7xl font-extrabold top-28 absolute text-gray-800">No Data Found</h1>
                <Link to='/'><button className='btn btn-success absolute top-8 left-12 text-white'>Go Home</button></Link>
        </div>
    );
};

export default Error;