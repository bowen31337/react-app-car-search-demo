import * as types from '../constants/actionTypes'
import axios from 'axios'
import * as endpoint from '../constants/endpoints'

import { fetchCarModels } from './fetchCarModels'
import { fetchCarMakes } from './fetchCarMakes'

export const fetchCarOfTheWeekSingle = () => {
	const request = axios({
		method: 'get',
		url: endpoint.CAR_OF_THE_WEEK_ENDPOINT,
		headers: []
	})
	return {
		type:types.FETCH_CAR_OF_THE_WEEK,
		payload:request
	}
}

export const fetchCarOfTheWeek = () => {
	const request = axios.all([fetchCarOfTheWeekSingle().payload, fetchCarModels().payload, fetchCarMakes().payload]).then(axios.spread( (car, models, makes) => {
  			let carOfTheWeek = models.data.filter(e => e.id === car.data.modelId ).map(e => {
  				let review = car.data.review
  				let carMake = makes.data.find( make => make.id === e.makeId ).name
  				return { ...e, review, carMake}
  			 } )
  			return carOfTheWeek
	 }))
	return {
		type:types.FETCH_CAR_OF_THE_WEEK,
		payload:request
	}
}


export const fetchCarOfTheWeekSuccess = (data) => {
	return {
		type:types.FETCH_CAR_OF_THE_WEEK_SUCCESS,
		payload:data
	}
}

export const fetchCarOfTheWeekFailture = (error) => {
	return {
		type:types.FETCH_CAR_OF_THE_WEEK_FAILURE,
		payload:error
	}
}
