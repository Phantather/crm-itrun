import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <div className='layout' style={{width:"100%"}}>
            <Header/>
            <Outlet/>

        </div>
    );
};

export default Layout;