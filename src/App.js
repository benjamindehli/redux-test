import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import SearchResults from './components/partials/SearchResults';
import MainNavigation from './components/partials/MainNavigation';
import style from './App.scss';



const initialState = {};
const store = configureStore(initialState);


class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <MainNavigation />
            <div className={style.pageContent}>
              <Switch>
                <Route exact path="/" render={() => (<SearchResults />)} />
                <Route exact path="/sok" render={() => (<SearchResults />)} />
                <Route render={() => (<div>Miss</div>)} />
                <div className="App">
                  <header className="App-header">
                  </header>
                </div>
              </Switch>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
