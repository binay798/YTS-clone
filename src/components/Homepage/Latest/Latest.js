import React from 'react'
import { Link } from 'react-router-dom';
import Movie from '../../Movie/Movie';
import classes from './Latest.module.css';
import { connect } from 'react-redux';


function Latest(props) {

    let displayMovies = (<div style={{color:'#fff',fontSize:"2.5rem",textAlign:"center"}}>Loading...</div>);
    if(props.homepageMovies.length !== 0) {

        displayMovies = props.homepageMovies.map((item,id) => {
                            return (<Movie key={id} movie={item} />)
                        })
    }

    return (
        <div className={classes.latest}>
            <div className={classes.latest__headContent}>
                <h3 className={classes.latest__heading}>Latest YIFY Movies Torrents</h3>
                <Link className={classes.latest__link} to='/browse'>Browse All</Link>
            </div>
            <div className={classes.latest__container}>
                {displayMovies}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allMovies: state.allMovies,
        homepageMovies: state.homepage.latest
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getMovies: () => dispatch(actionCreators())
//     }
// }

export default connect(mapStateToProps)(Latest);
