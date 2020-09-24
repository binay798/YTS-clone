import React from 'react';
import classes from './MovieResult.module.css';
import MovieTertiary from '../../components/Movie/MovieTertiary/MovieTertiary';
import MovieSecondary from '../../components/Movie/MovieSecondary/MovieSecondary';

import Button from '../../components/UI/Button/Button';
import {heart,imdb,star} from '../../assets/images/images';
import TechSpecs from '../../components/TechSpecs/TechSpecs';
import { connect } from 'react-redux';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import { tv,cross } from '../../assets/images/images';


class MovieResult extends React.Component {
    state = {
        showModal: false
    }

    

    render() {
        // set the href to the torrent url
        const clickedToLink = (url) => {
            window.location.href = url;
            this.setState({showModal: false})
        }
        // scroll to top of the page
        window.scrollTo(0,0);
        // Current Selected movie
        
        let movie = this.props.selectedMovie.currentMovie;
        // while movie is in fetching mode from the server then displayMovieDetails is set to loading
        let displayMovieDetails = (<div style={{height: "100vh", color:'#fff',backgroundColor: "var(--color-dark)",fontSize:"2.5rem",textAlign:"center"}}>Loading...</div>);
        
        const suggestedMovies = this.props.selectedMovie.suggestedMovies
        if(movie !== null) {
            
            // list of genre of selected movie

            let genres = movie.genres;
            
            genres = genres.map(item => {
                return (<span key={item}> {item} /</span>)
            })

            
            

            let quality = movie.torrents.map((item,id) => {
                
                return (<p key={id}  onClick={() => clickedToLink(item.url)} className={classes.movieResult__availabilityContainerLink} >{item.quality}</p>)
            })
            
            
            displayMovieDetails = (
                <>
                    <div className={classes.movieResult__container}>
                    <div className={classes.movieResult__image}>
                        <MovieSecondary img={movie.large_cover_image} />
                        <Button clicked={() => this.setState({showModal: true})} >Download</Button>
                    </div>

                    <div className={classes.movieResult__details}>
                        
                        <h1>{movie.title}</h1>
                        
                        <h3>{movie.year} <br/>{genres}</h3>
                        
                        <div className={classes.movieResult__availability}>
                            <p>
                                Available in:
                            </p>
                            <div className={classes.movieResult__availabilityContainer}>
                                
                                {quality}
                            </div>
                        </div>
                        {/* likes */}
                        <div className={classes.movieResult__likes}>
                            <img src={heart} alt="heart"/>
                            <h3>{movie.like_count}</h3>
                            <img src={imdb} alt="imdb"/>
                            <h3 className={classes.movieResult__star}>
                                <span>{movie.rating}</span>
                                <img src={star} alt="star"/>
                            </h3>
                        </div>
                        
                    </div>
                    <div className={classes.movieResult__similar}>
                        
                        {suggestedMovies.map((movie,id) => {
                            return (<MovieTertiary key={id} name={movie.title} img={movie.medium_cover_image} id={movie.id} />)
                        })}
                    </div>
                </div>

                {/* Tech Specs */}
                <div className={classes.movieResult__techSpecs}>
                    <TechSpecs mpa={movie?.mpa_rating} lang={movie?.language} spec={movie?.torrents} duration={movie.runtime} />
                </div>
                </>
            )
        }

        
        
        return (
            <div 
                className={classes.movieResult} 
                style={{backgroundImage:`linear-gradient(to bottom,rgba(43, 40, 40, 0.822), rgba(36, 29, 29, 0.897)),url(${movie?.background_image})`}}>
                
                
                {/*  Movie Result */}
                {displayMovieDetails}
                <Modal show={this.state.showModal} >
                    <div className={classes.movieResult__popup}>
                        <img onClick={() => this.setState({showModal: false})} src={cross} className={classes.movieResult__popupCross} alt="cross"/>
                        <h2>Select movie quality</h2>
                        <div className={classes.movieResult__popupContainer}>
                            <div className={classes.movieResult__popupLeft}>
                                <div className={classes.movieResult__popupTvSmall}>
                                    <img src={tv}  alt="720p"/>
                                    <h2>720p</h2>
                                </div>
                                
                                <h4>BluRay</h4>
                                <p>File Size</p>
                                <h4>{movie?.torrents[0].size}</h4>
                                <Button clicked={() => clickedToLink(movie?.torrents[0].url)}>Download</Button>
                            </div>

                            <div className={classes.movieResult__popupRight}>
                                <div className={classes.movieResult__popupTvLarge}>
                                    <img src={tv}  alt="720p"/>
                                    <h2>1080p</h2>
                                </div>
                                <h4>BluRay</h4>
                                <p>File Size</p>
                                <h4>{movie?.torrents[1].size}</h4>
                                <Button clicked={() => clickedToLink(movie?.torrents[1].url)}>Download</Button>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Backdrop clicked={() => this.setState({showModal: false})} show={this.state.showModal} />

                {/* Comments and reviews */}
            </div>
        )
    }
}

// This function connects Global state to current component
const mapStateToProps = state => {
    return {
        selectedMovie: state.singleMovie
    }
}

export default connect(mapStateToProps)(MovieResult);

