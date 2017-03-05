import * as types from '../constants/actionTypes'
import axios from 'axios'

import { fetchCarMakes } from './fetchCarMakes'
import { fetchCarModels } from './fetchCarModels'



export const fetchCarMakeModel = (modelId) => {
	const request = axios.all([ fetchCarModels().payload, fetchCarMakes().payload]).then(axios.spread( (models, makes) => {
  			let carMakeModel = models.data.filter(e => e.id === modelId*1 ).map(e => {
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
