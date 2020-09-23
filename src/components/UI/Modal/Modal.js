import React from 'react'
import classes from './Modal.module.css';


function Modal(props) {
    return (
        <div 
            className={classes.modal} 
            style={
                {
                    backgroundColor: props.show ? " rgba(255, 255, 255, 1)" : " rgba(255, 255, 255, 0)",
                    
                    visibility: props.show ? "visible" : "hidden"
                }
            }  >
            {props.children}
        </div>
    )
}

export default Modal
