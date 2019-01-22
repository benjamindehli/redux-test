import { FETCH_SEARCHRESULTS } from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_SEARCHRESULTS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}