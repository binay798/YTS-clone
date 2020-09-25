import React from 'react'
import classes from './Search.module.css';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button';
import * as actionCreators from '../../store/actions/getSearchedMovies';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Search(props) {

    const [details,setDetails] = React.useState({
        quality: '',
        name: '',
        order_by: '',
        rating: '',
        genre: '',
        year: '',
        language: ''
    })

    const changeHandler = (e,type) => {
        setDetails({...details,[type]: e.target.value})
        
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        props.search(details);
        props.history.push('/searchResult')
    }
    return (
        <div className={classes.search}>
            <form action="/" className={classes.search__form}>
                <div>
                    <h2>Search Term</h2>
                    <input type="text" value={details.name} onChange={(e) => changeHandler(e,"name")} className={classes.search__input}/>
                </div>
                <div>
                    <Select changed={changeHandler}  options={['All','720','1080','2160']} name='quality' type="Quality:" />
                </div>
                <div>
                    <Select changed={changeHandler}  options={['All','Action','Adventure','Animation']} name='genre' type="Genre:" />
                </div>
                <div>
                    <Select changed={changeHandler} options={['All','9+','8+','7+']} name='rating' type="Rating:" />
                </div>
                <div>
                    <Select changed={changeHandler} options={['All','2020','2019','2018']} name='year' type="Year:" />
                </div>
                <div>
                    <Select changed={changeHandler} options={['All','English','Japanese','French']} name='language' type="Language:" />
                </div>
                <div>
                    <Select changed={changeHandler} options={['All','Latest','old','Featured']} name='order_by' type="order By:" />
                </div>
                <div>
                    <Button clicked={submitHandler}>Search</Button>
                </div>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        search: (data) => dispatch(actionCreators.getBrowsedMovies(data))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Search));
