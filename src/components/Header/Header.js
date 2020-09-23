import React from 'react'
import classes from './Header.module.css';
import logo from '../../assets/images/yts-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={classes.header}>
            <Link to='/'>
                <img src={logo} alt="Logo"/>
            </Link>
            <div className={classes.header__nav}>
                <div className={classes.header__navSearch}>
                    <input type="text" placeholder="Quick search"/>

                </div>
                <div className={classes.header__navContainer}>
                    <Link className={classes.header__link} to="/">Home</Link>
                    <Link className={classes.header__link} to="/">4k</Link>
                    <Link className={classes.header__link} to='/searchResult'>Trending</Link>
                    <Link className={classes.header__link} to="/browse">Browse movies</Link>

                </div>
            </div>
        </div>
    )
}

export default Header
