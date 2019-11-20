//ACtual state go here in reducers
import { GET_CITIES } from '../Actions/types';

const initialState = {
	cities: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CITIES:
			return {
				...state,
				cities: action.payload
			};
		default:
			return state;
	}
}
