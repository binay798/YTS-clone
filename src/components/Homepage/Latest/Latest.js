import React from 'react'
import { Link } from 'react-router-dom';
import Movie from '../../Movie/Movie';
import classes from './Latest.module.css';


function Latest() {
    return (
        <div className={classes.latest}>
            <div className={classes.latest__headContent}>
                <h3 className={classes.latest__heading}>Latest YIFY Movies Torrents</h3>
                <Link className={classes.latest__link} to='/browse'>Browse All</Link>
            </div>
            <div className={classes.latest__container}>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </div>
    )
}

export default Latest
