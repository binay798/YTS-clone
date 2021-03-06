import React from 'react'
import Movie from '../../Movie/Movie';
import classes from './Popular.module.css';
import { connect } from 'react-redux';
import Loader from '../../UI/Loader/Loader';

function Popular(props) {
    
    // let displayMovies = (<div style={{color:'#fff',fontSize:"2.5rem",textAlign:"center"}}>Loading...</div>);
    let displayMovies = (<Loader />)
    if(!props.allMovies.loading) {

        displayMovies = props.homepageMovies.map((item,id) => {
                            return (<Movie key={id} movie={item} />)
                        })
    }

    return (
        <div className={classes.popular}>
            {displayMovies}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allMovies: state.allMovies,
        homepageMovies: state.homepage.popular
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getMovies: () => dispatch(actionCreators())
//     }
// }

export default connect(mapStateToProps)(Popular);
