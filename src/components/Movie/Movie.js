import React from 'react';
import classes from './Movie.module.css';
import movieImg from '../../assets/images/extraction.jpg';
import Button from '../UI/Button/Button';
import star from '../../assets/images/star.svg';
import { withRouter } from 'react-router-dom';
function Movie(props) {
    
    const nextpage = () => {
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

export default withRouter(Movie);
