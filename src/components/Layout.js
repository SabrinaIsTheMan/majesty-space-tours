import { Outlet } from 'react-router-dom';
import Counter from './Counter';

function Layout() {
    return (
        <>
            <Outlet />
            <Counter />
        </>
    )
};

export default Layout;
