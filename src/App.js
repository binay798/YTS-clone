import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';
import BrowseMovies from './containers/BrowseMovies/BrowseMovies';
import MovieResult from './containers/MovieResult/MovieResult';
import SearchResult from './containers/SearchResult/SearchResult';
function App() {
  
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

export default App;
