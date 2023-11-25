import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

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
            }


        ]
    },
]);

//
