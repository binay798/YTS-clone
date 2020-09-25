import React from 'react';
import Movie from '../../components/Movie/Movie';
import classes from './SearchResult.module.css';
import { connect } from 'react-redux'
import Loader from '../../components/UI/Loader/Loader';

class SearchResult extends React.Component {

    render() {
        
        // let displayMovies = (<div style={{height: "100vh",width:'80vw', color:'#fff',backgroundColor: "var(--color-dark)",fontSize:"2.5rem",textAlign:"center"}}>Loading...</div>);
        let displayMovies = (<div className={classes.Loader}><Loader /></div>)
        if(this.props.movies.searchedMovies !== null) {
            displayMovies = this.props.movies.searchedMovies.map((movie,id) => {
                return (<Movie key={id} movie={movie} />)
            })
        }
        return (
            <div className={classes.searchResult}>
                <h1 className={classes.searchResult__heading}>Search Result's</h1>

                <div className={classes.searchResult__container}>
                    {displayMovies}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.searchedMovies
    }
}



export default connect(mapStateToProps)(SearchResult);