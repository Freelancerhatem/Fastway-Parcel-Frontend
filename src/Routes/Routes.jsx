import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Layout/Dashboard/Dashboard";
import BookedParcel from "../Layout/Dashboard/BookedParcel/BookedParcel";
import MyParcel from "../Layout/Dashboard/MyParcel/MyParcel";
import MyProfile from "../Layout/Dashboard/MyProfile/MyProfile";
import AllParcel from "../Layout/AdminDashboard/AllParcel/AllParcel";
import DeliveryMans from "../Layout/AdminDashboard/DeliveryMans/DeliveryMans";
import AllUser from "../Layout/AdminDashboard/AllUser/AllUser";
import MyDelivery from "../Layout/DeliveryManDashBoard/MyDelivery/MyDelivery";
import MyReviews from "../Layout/DeliveryManDashBoard/MyReviews/MyReviews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: 'this is error page',
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>,

            },
            {
                path: 'signup',
                element: <SignUp></SignUp>,
            },
            


        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            // normal user routes
            {
                path:'parcel-book',
                element:<BookedParcel></BookedParcel>,

            },
            {
                path:'my-parcel',
                element:<MyParcel></MyParcel>,
                loader:()=>fetch('http://localhost:5000/reviews')
            },
            {
                path:'my-profile',
                element:<MyProfile></MyProfile>
            },
            // admin routes
            {
                path:'all-parcel',
                element:<AllParcel></AllParcel>
            },
            {
                path:'employees',
                element:<DeliveryMans></DeliveryMans>
            },
            {
                path:'users',
                element:<AllUser></AllUser>
            },
            // deliveryman routes
            {
                path:'mydelivery',
                element: <MyDelivery></MyDelivery>
            },
            {
                path:'reviews',
                element: <MyReviews></MyReviews>,
                
            },
            
            
        ]
    }
]);

//
