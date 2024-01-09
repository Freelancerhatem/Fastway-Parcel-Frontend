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
import UpdateParcel from "../Layout/Dashboard/UpdateParcel/UpdateParcel";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../Private/PrivateRoute";
import TraceParcel from "../Pages/TraceParcel/TraceParcel";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
            {
                path: 'trace_parcel',
                element: <TraceParcel></TraceParcel>,
            },
            


        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            // normal user routes
            {
                path:'parcel-book',
                element:<BookedParcel></BookedParcel>,

            },
            {
                path:'my-parcel',
                element:<MyParcel></MyParcel>,
                
            },
            {
                path:'updateParcel/:id',
                element:<UpdateParcel></UpdateParcel>,
                
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
