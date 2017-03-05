import { connect } from 'react-redux'
import CarOfTheWeek from '../components/CarOfTheWeek'

import * as action from '../actions/fetchCarOfTheWeek'

const mapStateToProps = state => ({
  		data:state.fetchCarOfTheWeek.payload || [],
      error:state.fetchCarOfTheWeek.error,
      loading:state.fetchCarOfTheWeek.loading
})

const mapDispatchToProps = (dispatch, ownPros) => {
  return {
   	fetchCarOfTheWeek:() => {
      let result = dispatch(action.fetchCarOfTheWeek()).payload
      result.then(response => {
          dispatch(action.fetchCarOfTheWeekSuccess(response))
        },
        error => {
          dispatch(action.fetchCarOfTheWeekFailture(error))
        }
      ).catch( error => dispatch(action.fetchCarOfTheWeekFailture("network error")))

   	}
  }
}


const CarOfTheWeekContainer = connect(mapStateToProps, mapDispatchToProps)(CarOfTheWeek)

export default CarOfTheWeekContainer
