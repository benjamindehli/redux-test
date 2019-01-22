import { FETCH_SEARCHRESULTS } from './types';

export const fetchSearchResults = (searchString = "") => dispatch => {
	fetch(`https://kartkatalog.dev.geonorge.no/api/search?text=${searchString}`)
	.then(res => res.json())
	.then(searchResults => dispatch({
		type: FETCH_SEARCHRESULTS,
		payload: searchResults,
		searchString: searchString
	}))
}
