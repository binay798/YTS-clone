import React from 'react';
import classes from './Movie.module.css';
import movieImg from '../../assets/images/extraction.jpg';
import Button from '../UI/Button/Button';
import star from '../../assets/images/star.svg';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getSingleMovie as actionCreators} from '../../store/actions/getSingleMovie';


function Movie(props) {
    
    const nextpage = () => {
        window.document.title = props.movie.title
        
        props.getMovieDetail(props.movie.id)
        props.history.push('/result')
    }
    return (
        <>
        <div className={classes.movie} onClick={nextpage}>
            <div className={classes.movie__container}>
                <img src={props.movie?.medium_cover_image || movieImg} alt="movies"/>
                <div className={classes.overlay}>
                    <img src={star} alt="star"/>
                    <h2>{props.movie?.rating || 5} / 10</h2>
                    <h2>{props.movie?.genres[0] || "Action"}</h2>
                    <Button clicked={nextpage}>View Details</Button>
                </div>
            </div>
            
            <h3>{props.movie?.title}</h3>
            <p>{props.movie?.year}</p>
        </div>
        
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieDetail: (id) => dispatch(actionCreators(id))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Movie));
