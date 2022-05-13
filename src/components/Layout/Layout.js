import React from 'react'
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <div>
            <Outlet />
            Stopka
        </div>
    )
}

export default Layout;