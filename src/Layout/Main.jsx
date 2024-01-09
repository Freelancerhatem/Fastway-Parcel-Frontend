import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    const location =useLocation();
    const noNavFooter = location.pathname.includes('signin') || location.pathname.includes('signup')
    return (
        <div>
            
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;