import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import CreateDashboard from "../pages/admin/CreateDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'about',
                element:<About></About>
            },

        ]
    },
    {
        path:'/admin',
        element:<App></App>,
        children:[
            {
                index: true,
                // path:'dashboard',
                element:<AdminDashboard></AdminDashboard>
            },
            {
                // index: true,
                path:'dashboard',
                element:<AdminDashboard></AdminDashboard>
            },
            {
                path:"create",
                element:<CreateDashboard></CreateDashboard>
            }
        ]
    },
    
])

export default router;