import { FETCH_METADATASEARCHRESULTS, FETCH_ARTICLESEARCHRESULTS, FETCH_DROPDOWNSEARCHRESULTS } from './types';

export const fetchMetadataSearchResults = (searchString = "", facets = null) => dispatch => {
	if(facets) {
		const facetsParameter = facets.map((facet, facetIndex) => {
			return `facets[${facetIndex}]name=${facet.Type}&facets[${facetIndex}]value=${facet.Name}`;
		})
	}
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

export const fetchDropdownSearchResults = (searchString = "") => dispatch => {
	const urlParameterStrings = {
		software: `search?text=${searchString}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=software`,
		service: `search?text=${searchString}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=service`,
		dataset: `search?text=${searchString}&facets%5B1%5Dname=type&facets%5B1%5Dvalue=dataset`,
		articles: `articles?text=${searchString}`
	};
	
	Object.keys(urlParameterStrings).map((searchResultsType) => {
		let urlParameterString = urlParameterStrings[searchResultsType];
		fetch(`https://kartkatalog.dev.geonorge.no/api/${urlParameterString}`)
		.then(res => res.json())
		.then(searchResults => dispatch({
			type: FETCH_DROPDOWNSEARCHRESULTS,
			payload: searchResults,
			searchString: searchString,
			searchResultsType: searchResultsType
		}))
	})
}
