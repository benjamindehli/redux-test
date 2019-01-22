import { FETCH_METADATASEARCHRESULTS, FETCH_ARTICLESEARCHRESULTS } from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_METADATASEARCHRESULTS:
			return {
				...state,
				metadata: action.payload
			};
		case FETCH_ARTICLESEARCHRESULTS:
			return {
				...state,
				articles: action.payload
			};
		default:
			return state;
	}
}