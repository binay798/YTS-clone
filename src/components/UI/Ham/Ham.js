import React from 'react'
import classes from './Ham.module.css';


function Ham(props) {
    return (
        <div onClick={props.clicked} className={classes.ham}>
            
        </div>
    )
}

export default Ham
