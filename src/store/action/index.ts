import axios from 'axios';
import { GET_DATA, SET_HISTORY } from '../type';
import moment from 'moment';

export const getData = (pageLimit) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`https://www.breakingbadapi.com/api/characters?limit=${pageLimit}&offset=0`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			dispatch({
				type: GET_DATA,
				data: response.data,
			});
		} catch (error) {
			let message;
			if (error.response !== undefined) {
				message = error.response.data.Message;
			} else {
				message = error;
			}
			throw message;
		}
	};
};

export const setHistory = (detail) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: SET_HISTORY,
				payload: [
					{
						lastViewed: moment(new Date()).format('DD/MM/YYYY hh:mm:ss'),
						...detail,
					},
				],
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchData = (text) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`https://www.breakingbadapi.com/api/characters?name=${text}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			dispatch({
				type: GET_DATA,
				data: response.data,
			});
		} catch (error) {
			let message;
			if (error.response !== undefined) {
				message = error.response.data.Message;
			} else {
				message = error;
			}
			throw message;
		}
	};
};
