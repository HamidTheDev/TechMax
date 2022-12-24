import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Cart from "../Components/Cart/Cart";
import Home from "../Components/Home/Home";
import Details from "../Components/ServiceDetails/Details";
import Services from "../Components/Services/Services";
import Signin from "../Components/Signin/Signin";
import Signup from "../Components/Signup/Signup";
import Main from "../Layout/Main";
import MyReviews from './../Components/Reviews/MyReviews';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch("https://techmaxa.vercel.app/services")
                }

            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: async () => {
                    return fetch("https://techmaxa.vercel.app/services")
                }
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    return fetch(`https://techmaxa.vercel.app/services/${params.id}`)
                }
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreview',
                element: <MyReviews></MyReviews>
            }
        ]
    }
]
)

export default routes;