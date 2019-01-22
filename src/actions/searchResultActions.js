import { FETCH_METADATASEARCHRESULTS, FETCH_ARTICLESEARCHRESULTS } from './types';

export const fetchMetadataSearchResults = (searchString = "") => dispatch => {
	fetch(`https://kartkatalog.dev.geonorge.no/api/search?text=${searchString}`)
	.then(res => res.json())
	.then(searchResults => dispatch({
		type: FETCH_METADATASEARCHRESULTS,
		payload: searchResults,
		searchString: searchString
	}))
}

export const fetchArticleSearchResults = (searchString = "") => dispatch => {
	fetch(`https://kartkatalog.dev.geonorge.no/api/articles?text=${searchString}`)
	.then(res => res.json())
	.then(searchResults => dispatch({
		type: FETCH_ARTICLESEARCHRESULTS,
		payload: searchResults,
		searchString: searchString
	}))
}
