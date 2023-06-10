import { Outlet } from 'react-router-dom';
import Counter from './Counter';

function Layout( {count} ) {

    return (
        <>
            <Outlet />
            <Counter count={count}/>
        </>
    )
};

export default Layout;
