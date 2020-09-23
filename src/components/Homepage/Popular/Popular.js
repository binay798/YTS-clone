import React from 'react'
import Movie from '../../Movie/Movie';
import classes from './Popular.module.css';


function Popular() {
    return (
        <div className={classes.popular}>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
        </div>
    )
}

export default Popular
