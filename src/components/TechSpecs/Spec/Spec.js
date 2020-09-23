import React from 'react'
import classes from './Spec.module.css';
import svg from '../../../assets/images/sprite.svg';
function Spec(props) {
    return (
        <div className={classes.spec}>
            <svg>
                <use href={`${svg}#${props.icon}`} />
            </svg>
            <p>{props.content}</p>
        </div>
    )
}

export default Spec
