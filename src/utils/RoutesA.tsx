import React from 'react';
import {useRoutes} from "react-router-dom";
import Layout from "../components/Loyout/Layout";
import Groups from "../pages/Groups/Groups";
import SingleGroup from "../pages/SingleGroup/SingleGroup";

const RoutesA = () => {
    const routes = useRoutes([

        {
            path: "/register",
            // element: <Register/>
        },
        {
            path:"/",
            element: <Layout/>,
            children :[
                {
                    path:"/groups",
                    element:<Groups/>
                },
                {
                    path:"/SingleGroup",
                    element:<SingleGroup/>
                }
            ]
        }
    ])
    return routes
};
export default RoutesA