import { Link, Outlet, useLocation } from "react-router-dom";
import BarChartComponents from "../AdminDashboard/Charts/BarChartComponents";
import LineChartsComponents from "../AdminDashboard/Charts/LineChartsComponents";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import img from '../../assets/images/1.png'


const Dashboard = () => {
    const axiosSecure = useAxiosSecure();


    const location = useLocation();
    const path = location.pathname;
    const mypath = '/dashboard';

    // check user type
    const { user,signOutUser } = useContext(AuthContext);
    const [userDbData, setuserDbData] = useState({})
    const { email } = user || "";

    useEffect(() => {
        axiosSecure.get(`/loginUserType?user=${email}`)
            .then(res => setuserDbData(res.data))
    }, [axiosSecure, email])


    if (email === userDbData.email && userDbData.userType === 'user' || email === userDbData.email && userDbData.TypeOfUser === 'isdeliveryMan') {
        return (
            <div style={{backgroundImage:`url(${img})`}} className="grid bg-center bg-cover bg-no-repeat object-cover  grid-cols-6">
                <div className="col-span-1">

                    <ul className="menu p-4  min-h-screen bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard/parcel-book'>Book A Parcel</Link></li>
                        <li><Link to='/dashboard/my-parcel'>My Parcel</Link></li>
                        <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                        <li><Link to='/'>Go Home</Link></li>
                        <hr />
                        <button onClick={signOutUser} className="btn btn-sm  text-center absolute bottom-4 bg-slate-200">Logout</button>

                    </ul>

                </div>

                <div className="col-span-5">

                    <div className="">
                        <Outlet></Outlet>


                    </div>

                </div>
            </div>
        );
    }
    else if (email === userDbData.email && userDbData.userType === 'admin') {
        return (
            <div className="grid grid-cols-6 ">
                <div className="col-span-1 fixed">

                    <ul className="menu p-4 min-h-screen    bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard'>Dashboard Home</Link></li>
                        <li><Link to='/dashboard/all-parcel'>All Parcel</Link></li>
                        <li><Link to='/dashboard/employees'>All Delivery Man</Link></li>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/'>Go Home</Link></li>
                        <button onClick={signOutUser} className="btn btn-sm  text-center absolute bottom-4 bg-slate-200">Logout</button>



                    </ul>

                </div>

                <div className="col-span-5 relative left-56 mb-12">
                    {
                        path == mypath ?
                            <div className="flex justify-center mt-32">
                                <BarChartComponents></BarChartComponents>
                                <LineChartsComponents></LineChartsComponents>

                            </div>
                            :
                            <>
                                <div>
                                    <Outlet></Outlet>


                                </div>
                            </>
                    }



                </div>
            </div>
        );
    }
    else if (email === userDbData.email && userDbData.userType === 'deliveryMan') {
        return (
            <div className="grid grid-cols-6 ">
                <div className="col-span-1 fixed">

                    <ul className="menu p-4 min-h-screen    bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="hover:bg-gray-300 hover:rounded-md"><Link to='/dashboard/mydelivery'>My Delivery</Link></li>
                        <li className="hover:bg-gray-300 hover:rounded-md"><Link to='/dashboard/allparcel'>All Parcel</Link></li>
                        <li className="hover:bg-gray-300 hover:rounded-md"><Link to='/dashboard/reviews'>Reviews</Link></li>
                        <li className="hover:bg-gray-300 hover:rounded-md"><Link to='/'>Go Home</Link></li>
                        <button onClick={signOutUser} className="btn btn-sm  text-center absolute bottom-4 bg-slate-200">Logout</button>


                    </ul>

                </div>

                <div className="col-span-5 relative left-56 mb-12">
                    <div className="">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
        );
    }
    // else{
    //     return (
    //         <div className="grid grid-cols-6">
    //             <div className="col-span-1">

    //                 <ul className="menu p-4  min-h-screen bg-base-200 text-base-content">
    //                     {/* Sidebar content here */}
    //                     <li><Link to='/dashboard/parcel-book'>Book A Parcel</Link></li>
    //                     <li><Link to='/dashboard/my-parcel'>My Parcel</Link></li>
    //                     <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
    //                     <li><Link to='/'>Go Home</Link></li>

    //                 </ul>

    //             </div>

    //             <div className="col-span-5">

    //                 <div className="">
    //                     <Outlet></Outlet>


    //                 </div>

    //             </div>
    //         </div>
    //     );
    // }

};

export default Dashboard;