import { Outlet } from 'react-router-dom';

const LayoutIndex = () => {
    return (
        <section className='container'>
            <h3>Đây là trang index</h3>
            <Outlet />
        </section>
    );
};

export default LayoutIndex;
