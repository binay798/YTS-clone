import React from 'react'
import classes from './Header.module.css';
import logo from '../../assets/images/yts-logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actionCreators from '../../store/actions/getSearchedMovies';
import { search } from '../../assets/images/images';
import { withRouter } from 'react-router-dom';
import Ham from '../UI/Ham/Ham';



function Header(props) {

    const [movie,setMovie] = React.useState('');

    const changeHandler = e => {
        
        setMovie(e.target.value)
        
    }
    
    // Submit handler
    const submitHandler = () => {
        if(movie !== '' ) {
            
            props.searchMovies(movie)
            setMovie('');
            props.history.push('/searchResult')
        }
    }
    // window.removeEventListener('keypress',e => {})

    return (
        <div className={classes.header}>
            <Link to='/'>
                <img src={logo} alt="Logo"/>
            </Link>
            <div className={classes.header__nav}>
                <div className={classes.header__navSearch}>
                    <input value={movie} onChange={changeHandler} type="text" placeholder="Quick search"/>
                    <img onClick={submitHandler} className={classes.header__navSearchImg} src={search} alt="search"/>
                </div>
                <div className={classes.header__navContainer}>
                    <Link className={classes.header__link} to="/">Home</Link>
                    <Link className={classes.header__link} to="/browse">4k</Link>
                    <Link className={classes.header__link} to='/browse'>Trending</Link>
                    <Link className={classes.header__link} to="/browse">Browse movies</Link>

                </div>
            </div>
            <div className={classes.ham}>
                <Ham clicked={props.handleSidebar} />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        searchMovies: (name) => dispatch(actionCreators(name)),
        
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Header));
