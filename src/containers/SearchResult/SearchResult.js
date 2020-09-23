import React from 'react';
import Movie from '../../components/Movie/Movie';
import classes from './SearchResult.module.css';


class SearchResult extends React.Component {

    render() {

        return (
            <div className={classes.searchResult}>
                <h1 className={classes.searchResult__heading}>Search Result's</h1>

                <div className={classes.searchResult__container}>
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />

                </div>
            </div>
        )
    }
}

export default SearchResult;