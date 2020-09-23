import React from 'react'
import classes from './MovieSecondary.module.css';
import { extraction } from '../../../assets/images/images';

function MovieSecondary(props) {
    return (
        <div className={classes.movieSecondary}>
            <img src={ props.img ||extraction} alt="movie"/>
        </div>
    )
}

export default MovieSecondary
