import React from 'react'
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { yts } from '../../../assets/images/images'; 

function Sidebar(props) {

    const hideSidebar = () => {
        props.handleSidebar()
    }
    return (
        <div className={classes.sidebar} style={{ transform: props.show ? "translateX(0%)" : "translateX(-100%)"}} >
            <div className={classes.sidebar__img}>
                <Link to='/'>
                    <img src={yts} alt="Logo"/>
                </Link>
            </div>

            <div className={classes.sidebar__navContainer}>
                <Link onClick={hideSidebar} className={classes.header__link} to="/">Home</Link>
                <Link onClick={hideSidebar} className={classes.header__link} to="/browse">4k</Link>
                <Link onClick={hideSidebar} className={classes.header__link} to='/browse'>Trending</Link>
                <Link onClick={hideSidebar} className={classes.header__link} to="/browse">Browse movies</Link>

            </div>
        </div>
    )
}

export default Sidebar
