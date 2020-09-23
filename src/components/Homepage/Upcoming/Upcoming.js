import React from 'react'
import Movie from '../../Movie/Movie';
import classes from './Upcoming.module.css';


function Upcoming() {
    return (
        <div className={classes.upcoming}>
            <div className={classes.upcoming__headContent}>
                <h3>Upcoming YIFY Movies</h3>
                <a href="/" className={classes.upcoming__headContentLink}>Request a movie</a>
            </div>

            <div className={classes.upcoming__container}>
                <Movie />
                <Movie />
                <Movie />
                <Movie />

            </div>
        </div>
    )
}

export default Upcoming;
