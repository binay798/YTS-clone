import React from 'react';
import classes from './MovieResult.module.css';
import MovieSecondary from '../../components/Movie/MovieSecondary/MovieSecondary';
import Button from '../../components/UI/Button/Button';
import {heart,imdb,star} from '../../assets/images/images';
import TechSpecs from '../../components/TechSpecs/TechSpecs';


class MovieResult extends React.Component {

    

    render() {

        return (
            <div className={classes.movieResult}>
                {/*  Movie Result */}
                <div className={classes.movieResult__container}>
                    <div className={classes.movieResult__image}>
                        <MovieSecondary />
                        <Button >Download</Button>
                    </div>

                    <div className={classes.movieResult__details}>
                        
                        <h1>Marionette</h1>
                        
                        <h3>2020 <br/>Mystery / Thriller</h3>
                        
                        <div className={classes.movieResult__availability}>
                            <p>
                                Available in:
                            </p>
                            <div className={classes.movieResult__availabilityContainer}>
                                <a href="/" className={classes.movieResult__availabilityContainerLink}>720p.WEB</a>
                                <a href="/" className={classes.movieResult__availabilityContainerLink}>1080p.WEB</a>
                                <a href="/" className={classes.movieResult__availabilityContainerLink}>2160p.WEB</a>

                            </div>
                        </div>
                        {/* likes */}
                        <div className={classes.movieResult__likes}>
                            <img src={heart} alt="heart"/>
                            <h3>15</h3>
                            <img src={imdb} alt="imdb"/>
                            <h3 className={classes.movieResult__star}>
                                <span>8</span>
                                <img src={star} alt="star"/>
                            </h3>
                        </div>
                        
                    </div>
                    <div className={classes.movieResult__similar}>
                        <MovieSecondary />
                        <MovieSecondary />
                        <MovieSecondary />
                        <MovieSecondary />

                    </div>
                </div>

                {/* Tech Specs */}
                <div className={classes.movieResult__techSpecs}>
                    <TechSpecs />
                </div>

                {/* Comments and reviews */}
            </div>
        )
    }
}

export default MovieResult;