import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import fetchCarOfTheWeekReducer from './fetchCarOfTheWeekReducer'
import fetchCarMakesReducer from './fetchCarMakesReducer'
import fetchCarModelsReducer from './fetchCarModelsReducer'
import fetchCarMakeModelReducer from './fetchCarMakeModelReducer'

// Updates an entity cache in response to any action with response.entities.

const rootReducer = combineReducers({
  fetchCarOfTheWeek:fetchCarOfTheWeekReducer,
  fetchCarMakes:fetchCarMakesReducer,
  fetchCarModels:fetchCarModelsReducer,
  fetchCarMakeModel:fetchCarMakeModelReducer,
  routing
})

export default rootReducer
