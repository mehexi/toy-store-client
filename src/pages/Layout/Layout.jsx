import React from 'react';
import NavBar from '../Shared/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet></Outlet>
        </>
    );
};

export default Layout;