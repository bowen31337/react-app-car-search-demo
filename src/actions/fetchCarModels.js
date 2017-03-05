import * as types from '../constants/actionTypes'
import axios from 'axios'
import * as endpoint from '../constants/endpoints'

import { fetchCarMakes } from './fetchCarMakes'




export const fetchCarModels = () => {
	const request = axios({
		method: 'get',
		url: endpoint.CAR_MODELS_ENDPOINT,
		headers: []
	})
	return {
		type:types.FETCH_CAR_MODELS,
		payload:request
	}
}

export const fetchCarModelsSuccess = (data) => {
	return {
		type:types.FETCH_CAR_MODELS_SUCCESS,
		payload:data
	}
}

export const fetchCarModelsFailture = (error) => {
	return {
		type:types.FETCH_CAR_MODELS_FAILURE,
		payload:error
	}
}


export const fetchCarMakeModel = (modelId) => {
	const request = axios.all([ fetchCarModels().payload, fetchCarMakes().payload]).then(axios.spread( (models, makes) => {
  			let carMakeModel = models.data.filter(e => e.id === modelId ).map(e => {
	  			let carMake = makes.data.find( make => make.id === e.makeId ).name
  				return { ...e, carMake}
  			 } )
  			return carMakeModel
	 }))
	return {
		type:types.FETCH_CAR_MAKE_MODEL,
		payload:request
	}
}

export const fetchCarMakeModelSuccess = (data) => {
	return {
		type:types.FETCH_CAR_MAKE_MODEL_SUCCESS,
		payload:data
	}
}

export const fetchCarMakeModelFailture = (error) => {
	return {
		type:types.FETCH_CAR_MAKE_MODEL_FAILURE,
		payload:error
	}
}
