import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Layout/Dashboard/Dashboard";
import BookedParcel from "../Layout/Dashboard/BookedParcel/BookedParcel";
import MyParcel from "../Layout/Dashboard/MyParcel/MyParcel";
import MyProfile from "../Layout/Dashboard/MyProfile/MyProfile";

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
            {
                path:'parcel-book',
                element:<BookedParcel></BookedParcel>,

            },
            {
                path:'my-parcel',
                element:<MyParcel></MyParcel>
            },
            {
                path:'my-profile',
                element:<MyProfile></MyProfile>
            }
        ]
    }
]);

//
