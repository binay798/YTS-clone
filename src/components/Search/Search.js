import React from 'react'
import classes from './Search.module.css';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button';

function Search() {
    return (
        <div className={classes.search}>
            <form action="/" className={classes.search__form}>
                <div>
                    <h2>Search Term</h2>
                    <input type="text" className={classes.search__input}/>
                </div>
                <div>
                    <Select options={['All','720','1080','2160']} type="Quality:" />
                </div>
                <div>
                    <Select options={['All','Action','Adventure','Animation']} type="Genre:" />
                </div>
                <div>
                    <Select options={['All','9+','8+','7+']} type="Rating:" />
                </div>
                <div>
                    <Select options={['All','2020','2019','2018']} type="Year:" />
                </div>
                <div>
                    <Select options={['All','English','Japanese','French']} type="Language:" />
                </div>
                <div>
                    <Select options={['All','Latest','old','Featured']} type="order By:" />
                </div>
                <div>
                    <Button>Search</Button>
                </div>

            </form>
        </div>
    )
}

export default Search
