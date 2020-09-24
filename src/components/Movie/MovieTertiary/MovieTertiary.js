import React from 'react'
import classes from './MovieTertiary.module.css';
import { extraction } from '../../../assets/images/images';
import { connect } from 'react-redux';
import {getSingleMovie as actionCreators} from '../../../store/actions/getSingleMovie';
import { withRouter } from 'react-router-dom';

function MovieTertiary(props) {

    const nextpage = () => {
        window.document.title = props.name;
        props.history.push('/result')
        props.getMovieDetail(props.id)
    }
    return (
        <div className={classes.movieTertiary} onClick={nextpage}>
            <img src={ props.img ||extraction} alt="movie"/>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        getMovieDetail: (id) => dispatch(actionCreators(id))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(MovieTertiary));