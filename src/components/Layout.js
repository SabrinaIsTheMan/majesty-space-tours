import { Outlet } from 'react-router-dom';
import Counter from './Counter';


function Layout( {count, counterDisplay} ) {

    return (
        <div className="layout">
            <Outlet />
            <Counter count={count} counterDisplay={counterDisplay} />
        </div>
    )
};

export default Layout;
