import { connect } from 'react-redux'
import CarSearch from '../components/CarSearch'

import * as carMakesAction from '../actions/fetchCarMakes'
import * as carModelsAction from '../actions/fetchCarModels'

const mapStateToProps = state => ({
			dataCarMakes:state.fetchCarMakes.payload || [],
			errorCarMakes:state.fetchCarMakes.error,
			loadingCarMakes:state.fetchCarMakes.loading,
			dataCarModels:state.fetchCarModels.payload || [],
			errorCarModels:state.fetchCarModels.error,
			loadingCarModels:state.fetchCarModels.loading
})

const mapDispatchToProps = (dispatch, ownPros) => {
	return {
		fetchCarMakes:() => {
			let result = dispatch(carMakesAction.fetchCarMakes()).payload
			result.then(response => {
					if( 200 === response.status ) {
						dispatch(carMakesAction.fetchCarMakesSuccess(response.data))
					} else {
						dispatch(carMakesAction.fetchCarMakesFailture(response.statusText))
					}
				},
				error => {
					dispatch(carMakesAction.fetchCarMakesFailture(error))
				}
			).catch( error => dispatch(carMakesAction.fetchCarMakesFailture("network error")))
		},
		fetchCarModels: makeId => {
			let result = dispatch(carModelsAction.fetchCarModels()).payload
			result.then(response => {
					let carModels = response.data.filter( model => model.makeId === makeId*1)
					dispatch(carModelsAction.fetchCarModelsSuccess(carModels))
				},
				error => {
					dispatch(carModelsAction.fetchCarModelsFailture(error))
				}
			).catch( error => dispatch(carModelsAction.fetchCarModelsFailture("network error")))
		},
		resetCarModels: () => {
			dispatch(carModelsAction.fetchCarModelsSuccess([]))
		}
	}
}


const CarSearchContainer = connect(mapStateToProps, mapDispatchToProps)(CarSearch)

export default CarSearchContainer
