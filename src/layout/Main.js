import React from 'react';
import {Link, Outlet} from "react-router-dom"

const Main = () => {
    return (
        <div>
            <h1>My Email Password Authentication</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;