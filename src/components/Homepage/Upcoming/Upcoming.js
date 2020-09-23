import React from 'react'
import Movie from '../../Movie/Movie';
import classes from './Upcoming.module.css';
import { connect } from 'react-redux';



function Upcoming(props) {

    let displayMovies = (<div style={{color:'#fff',fontSize:"2.5rem",textAlign:"center"}}>Loading...</div>);
    if(props.homepageMovies.length !== 0) {

        displayMovies = props.homepageMovies.map((item,id) => {
                            return (<Movie key={id} movie={item} />)
                        })
    }
    return (
        <div className={classes.upcoming}>
            <div className={classes.upcoming__headContent}>
                <h3>Upcoming YIFY Movies</h3>
                <a href="/" className={classes.upcoming__headContentLink}>Request a movie</a>
            </div>

            <div className={classes.upcoming__container}>
                {displayMovies}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allMovies: state.allMovies,
        homepageMovies: state.homepage.upcoming
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getMovies: () => dispatch(actionCreators())
//     }
// }

export default connect(mapStateToProps)(Upcoming);
