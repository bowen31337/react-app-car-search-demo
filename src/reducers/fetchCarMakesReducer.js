import * as types from '../constants/actionTypes'

const INIT_STATE = {
		error:null,
		loading:true,
		payload:[]
}

const fetchCarMakesReducer = (state = INIT_STATE, action) => {
	const { type } = action

	switch(type) {
		case types.FETCH_CAR_MAKES:
			return {
					...INIT_STATE,
					loading:true

			}
		case types.FETCH_CAR_MAKES_SUCCESS:
			return {
					...INIT_STATE,
					loading:false,
					payload:action.payload
			}
		case types.FETCH_CAR_MAKES_FAILURE:
			return {
					...INIT_STATE,
					error:action.payload,
					loading:false
			}
		default:
		      return state
	}

}

export default fetchCarMakesReducer
