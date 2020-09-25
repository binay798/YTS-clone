import React from 'react'
import classes from './Layout.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

function Layout({children}) {

    const [showSidebar,setShowSidebar] = React.useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    return (
        <div className={classes.layout}>
            <Header show={showSidebar} handleSidebar={toggleSidebar} />
            <Sidebar show={showSidebar} />
            <Backdrop show={showSidebar} clicked={toggleSidebar} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
