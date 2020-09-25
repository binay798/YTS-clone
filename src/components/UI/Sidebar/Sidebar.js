import React from 'react'
import classes from './Sidebar.module.css';


function Sidebar(props) {
    return (
        <div className={classes.sidebar} style={{width: props.show ? "65vw" : "0vw"}} >
            
        </div>
    )
}

export default Sidebar
