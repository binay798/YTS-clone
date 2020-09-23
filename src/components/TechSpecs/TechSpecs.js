import React from 'react'
import classes from './TechSpecs.module.css';
import Spec from './Spec/Spec';

function TechSpecs() {

    const [current,setCurrent] = React.useState('small');

    const [spec,setSpec] = React.useState({
        size:{
            main:"990.22 MB",
            icon: "icon-folder-open"
        },
        res: {
            main: "1280*528",
            icon: "icon-enlarge"
        },
        lang: {
            main: "English 2.0",
            icon: "icon-volume-medium"
        },
        view: {
            main: "NR",
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
            main: "1hr 47 min",
            icon: "icon-clock"
        },
        total: {
            main: "895 / 1,462",
            icon: "icon-folder-open"
        }
    });

    let arr = [];

    for(let i in spec) {
        arr.push(<Spec key={i} content={spec[i].main} icon={spec[i].icon} />)
    }
    return (
        <div className={classes.techSpecs}>
            <div className={classes.techSpecs__header}>
                <h3>Tech specs</h3>
                <div>
                    <p className={classes.active}>720.WEB</p>
                    <p>1080.WEB</p>
                </div>
            </div>
            <div className={classes.techSpecs__container}>
                
                {arr}
                

            </div>
        </div>
    )
}

export default TechSpecs
