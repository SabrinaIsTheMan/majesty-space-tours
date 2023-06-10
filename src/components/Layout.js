import { Outlet } from 'react-router-dom';
import Counter from './Counter';
import { useEffect, useState } from 'react';

function Layout( {count} ) {

    return (
        <>
            <Outlet />
            <Counter count={count}/>
        </>
    )
};

export default Layout;
