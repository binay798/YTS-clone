import React from 'react'
import classes from './Backdrop.module.css';


function Backdrop(props) {
    return (
        <div 
            className={classes.backdrop} 
            style={
                {
                    backgroundColor: props.show ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)" ,
                    visibility: props.show ? "visible" : "hidden"
                }
                }
            onClick={props.clicked}
            >
            
        </div>
    )
}

export default Backdrop
// background-color: rgba(0,0,0,0.5);