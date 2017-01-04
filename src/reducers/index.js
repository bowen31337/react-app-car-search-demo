import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import fetchContentsReducer from './fetchContentsReducer'

// Updates an entity cache in response to any action with response.entities.

const rootReducer = combineReducers({
  fetchContents:fetchContentsReducer,
  routing
})

export default rootReducer
