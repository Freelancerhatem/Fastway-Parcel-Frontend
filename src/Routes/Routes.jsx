import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

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
                element: 'sign',

            },
            {
                path: 'signup',
                element: 'signup',
            }


        ]
    },
]);

//
