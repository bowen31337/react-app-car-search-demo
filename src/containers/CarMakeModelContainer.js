import { connect } from 'react-redux'
import CarMakeModel from '../components/CarMakeModel'

import * as action from '../actions/fetchCarMakeModel'

const mapStateToProps = state => ({
  		data:state.fetchCarMakeModel.payload || [],
      error:state.fetchCarMakeModel.error,
      loading:state.fetchCarMakeModel.loading
})

const mapDispatchToProps = (dispatch, ownPros) => {
  return {
   	fetchCarMakeModel:modelId => {
      let result = dispatch(action.fetchCarMakeModel(modelId)).payload
      result.then(response => {
          dispatch(action.fetchCarMakeModelSuccess(response))
        },
        error => {
          dispatch(action.fetchCarMakeModelFailture(error))
        }
      ).catch( error => dispatch(action.fetchCarMakeModelFailture("network error")))

   	}
  }
}


const CarMakeModelContainer = connect(mapStateToProps, mapDispatchToProps)(CarMakeModel)

export default CarMakeModelContainer
