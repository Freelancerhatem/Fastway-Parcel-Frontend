import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    const isUser =false;
    if (isUser){
        return (
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                        
                        <ul className="menu p-4  min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><Link to='/dashboard/parcel-book'>Book A Parcel</Link></li>
                            <li><Link to='/dashboard/my-parcel'>My Parcel</Link></li>
                            <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                            
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
    
};

export default Dashboard;