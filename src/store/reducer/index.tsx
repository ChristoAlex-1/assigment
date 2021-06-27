const initialState = {
	data: [],
	history: [],
};

import { GET_DATA, SET_HISTORY } from '../type';

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				data: action.data,
			};
			break;
		case SET_HISTORY:
			return {
				...state,
				history: [action.payload, ...state.history],
			};
			break;
		default:
			return state;
	}
};
