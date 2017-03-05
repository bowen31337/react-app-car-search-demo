import * as types from '../constants/actionTypes'
import axios from 'axios'
import * as endpoint from '../constants/endpoints'


export const fetchCarMakes = () => {
	const request = axios({
		method: 'get',
		url: endpoint.CAR_MAKES_ENDPOINT,
		headers: []
	})
	return {
		type:types.FETCH_CAR_MAKES,
		payload:request
	}
}

export const fetchCarMakesSuccess = (data) => {
	return {
		type:types.FETCH_CAR_MAKES_SUCCESS,
		payload:data
	}
}

export const fetchCarMakesFailture = (error) => {
	return {
		type:types.FETCH_CAR_MAKES_FAILURE,
		payload:error
	}
}
