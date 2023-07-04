import { Outlet } from 'react-router-dom';
import Counter from './Counter';


function Layout({ count }) {

    return (
        <section className="layout">
            <Counter count={count} />
            <Outlet />
        </section>
    )
};

export default Layout;
