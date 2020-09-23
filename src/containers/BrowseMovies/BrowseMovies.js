import React from 'react';
import classes from './BrowseMovies.module.css';
import Search from '../../components/Search/Search';
import Movie from '../../components/Movie/Movie';

class BrowseMovies extends React.Component {

    render() {

        return (
            <div className={classes.browse}>
                <div className={classes.browse__search}>
                    <Search />
                </div>
                <div className={classes.browse__movies}>
                    <h3><span>20,814</span> YIFY Movies found</h3>

                    <div className={classes.browse__moviesContainer}>
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />

                    </div>
                </div>
            </div>
        )
    }
}

export default BrowseMovies;