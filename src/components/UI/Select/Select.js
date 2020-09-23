import React from 'react'
import classes from './Select.module.css';

function Select(props) {
    return (
        <>
        <h4 className={classes.select__heading}>{props.type}</h4>
        <select name="" id="" className={classes.select}>
            {props.options?.map(item => {
                return (<option value={item}>{item}</option>)
            })}
        </select>
        </>
    )
}

export default Select
