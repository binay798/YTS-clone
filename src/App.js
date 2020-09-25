import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';
import BrowseMovies from './containers/BrowseMovies/BrowseMovies';
import MovieResult from './containers/MovieResult/MovieResult';
import SearchResult from './containers/SearchResult/SearchResult';
import { connect } from 'react-redux';


function App(props) {

  
  
  return (
    <Layout>
        <div className="App">
          <Switch>
            <Route path='/result' component={MovieResult} />
            <Route path='/browse' component={BrowseMovies} />
            <Route path='/searchResult' component={SearchResult} />
            <Route path='/' component={Homepage} />

          </Switch>
        </div>
    </Layout>
    
  );
}

const mapStateToProps = state => {
  return {
    all: state.allMovies,
    single: state.singleMovie,
    searched: state.searchedMovies
  }
}

export default connect(mapStateToProps)(App);
