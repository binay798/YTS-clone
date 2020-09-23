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
                <img src={movieImg} alt="movies"/>
                <div className={classes.overlay}>
                    <img src={star} alt="star"/>
                    <h2>5.7 / 10</h2>
                    <h2>Action</h2>
                    <Button clicked={nextpage}>View Details</Button>
                </div>
            </div>
            
            <h3>Extraction</h3>
            <p>2020</p>
        </div>
        
        </>
    )
}

export default withRouter(Movie);
