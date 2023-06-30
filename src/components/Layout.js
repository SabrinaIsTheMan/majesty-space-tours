import { Outlet } from 'react-router-dom';
import Counter from './Counter';


function Layout({ count }) {

    return (
        <div className="layout">
            <Outlet />
            <Counter count={count} />
        </div>
    )
};

export default Layout;
