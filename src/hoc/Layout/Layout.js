import React from 'react'
import classes from './Layout.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Layout({children}) {
    return (
        <div className={classes.layout}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
