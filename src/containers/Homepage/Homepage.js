import React from 'react';
import classes from './Homepage.module.css';
import wifiImg from '../../assets/images/wifi.png';
import Latest from '../../components/Homepage/Latest/Latest';
import Popular from '../../components/Homepage/Popular/Popular';
import starImg from '../../assets/images/star.svg';
import Upcoming from '../../components/Homepage/Upcoming/Upcoming';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllMovies as actionCreators } from '../../store/actions/getAllMovies';

class Homepage extends React.Component {

    componentDidMount() {
        window.document.title = "The Official Home of YIFY movies";
        if(this.props.allMovies.movies.length === 0) {
            this.props.getMovies()

        }        
    }

    render() {
        
        
        return (
            <div className={classes.homepage}>
                
                
                <div className={classes.homepage__popular}>
                    <h1 className={classes.homepage__heading}>
                        Download YTS YIFY movies: HD smallest size
                    </h1>
                    <p>
                        Welcome to the official YTS.MX (.LT) website. 
                        Here you can browse and download YIFY movies in excellent 
                        720p, 1080p, 2160p 4K and 3D quality, all at the smallest 
                        file size. YTS Movies Torrents.
                    </p>
                    <a href="/">
                        IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
                    </a>

                    <div className={classes.homepage__popularHeader}>
                        <h3>
                            <img src={starImg} alt="star"/>
                            <span>Popular Downloads</span>
                        </h3>

                        <Link to='/browse' className={classes.homepage__popularLink} >
                            <img src={wifiImg} alt="wifi"/>
                            <p>more...</p>
                        </Link>
                    </div>

                    <div>
                        <Popular />
                    </div>
                </div>

                <div className={classes.homepage__latest}>
                        <Latest />
                </div>

                <div className={classes.homepage__upcoming}>
                        <Upcoming />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allMovies: state.allMovies,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(actionCreators())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);