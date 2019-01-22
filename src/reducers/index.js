import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import postReducer from './postReducer';
import searchResultReducer from './searchResultReducer';

export default (history) => combineReducers({
	router: connectRouter(history),
	posts: postReducer,
	searchResults: searchResultReducer
});