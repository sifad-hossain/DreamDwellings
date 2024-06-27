import { Outlet } from 'react-router-dom'
import Navbar from './shared/navbar/Navbar';
import Footer from './shared/footer/Footer';

const Root = () => {
    return (
        <div className=' mx-auto '>
            <Navbar></Navbar>            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;