import React from 'react'
import classes from './MovieSecondary.module.css';
import { extraction } from '../../../assets/images/images';

function MovieSecondary() {
    return (
        <div className={classes.movieSecondary}>
            <img src={extraction} alt="movie"/>
        </div>
    )
}

export default MovieSecondary
