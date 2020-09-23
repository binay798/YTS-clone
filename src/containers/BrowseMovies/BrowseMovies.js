import React from 'react';
import classes from './BrowseMovies.module.css';
import Search from '../../components/Search/Search';
import Movie from '../../components/Movie/Movie';
import { connect } from 'react-redux';
import { getAllMovies as actionCreators } from '../../store/actions/getAllMovies';
class BrowseMovies extends React.Component {

    componentDidMount() {
        
        if(this.props.allMovies.movies.length === 0) {
            this.props.getMovies()

        }
    }

    render() {

        let displayMovies = (<div style={{color:'#fff',fontSize:"2.5rem",textAlign:"center"}}>Loading...</div>)
        if(!this.props.allMovies.loading) {
            displayMovies = this.props.allMovies.movies.map((item,id) => {
                return <Movie key={id} movie={item} />
            })
        }
        return (
            <div className={classes.browse}>
                <div className={classes.browse__search}>
                    <Search />
                </div>
                <div className={classes.browse__movies}>
                    <h3><span>20,814</span> YIFY Movies found</h3>

                    <div className={classes.browse__moviesContainer}>
                        {displayMovies}

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allMovies: state.allMovies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(actionCreators())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BrowseMovies);