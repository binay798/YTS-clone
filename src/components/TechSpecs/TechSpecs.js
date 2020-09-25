import React from 'react'
import classes from './TechSpecs.module.css';
import Spec from './Spec/Spec';

function displayTime(time) {
    let hour = Math.floor(time / 60);
    let min = time % 60;
    if(time === 0) {
        return "1 hr"
    }
    
    return `${hour} hr ${min} min`
}

function TechSpecs(props) {
    let techSpec = null;
    
    let allSpecs = [...props.spec].slice(0,2);
    
    
    
    const [current,setCurrent] = React.useState('first');

    techSpec = {
        size:{
            main:current === 'first' ? allSpecs[0]?.size : allSpecs[1]?.size ,
            icon: "icon-folder-open"
        },
        res: {
            main: "1280*528",
            icon: "icon-enlarge"
        },
        lang: {
            main: props.lang,
            icon: "icon-volume-medium"
        },
        view: {
            main: props.mpa || "NR",
            icon: "icon-eye"
        },
        cc:{
            main:"990.22 MB",
            icon: "icon-folder-open"
        },
        rate: {
            main: "25 fps",
            icon: "icon-film"
        },
        time: {
            main: displayTime(props.duration),
            icon: "icon-clock"
        },
        total: {
            main: "895 / 1,462",
            icon: "icon-folder-open"
        }
    }

    let arr = [];

    for(let i in techSpec) {
        arr.push(<Spec key={i} content={techSpec[i].main} icon={techSpec[i].icon} />)
    }

    const changeActiveStatus = (data) => {
        setCurrent(data)
    }

    
    
    return (
        <div className={classes.techSpecs}>
            <div className={classes.techSpecs__header}>
                <h3>Tech specs</h3>
                <div>
                    <p className={current === 'first' ? classes.active: null} onClick={() => changeActiveStatus('first')}>720.WEB</p>
                    <p className={current === 'second' ? classes.active: null} onClick={() => changeActiveStatus('second')}>1080.WEB</p>
                </div>
            </div>
            <div className={classes.techSpecs__container}>
                
                {arr}
                

            </div>
        </div>
    )
}

export default TechSpecs
