import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from '../pages/App'
import Search from '../pages/Search'
import CarOfTheWeek from '../pages/CarOfTheWeek'
import CarMakeModel from '../pages/CarMakeModel'
import BreadCrumb from '../components/BreadCrumb'

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="carofweek"/>
    <Route path="carofweek" components={{header:BreadCrumb,main:CarOfTheWeek}} />
	<Route path="search" components={{header:BreadCrumb,main:Search}} />
	<Route path="/make/model/:modelId" components={{header:BreadCrumb,main:CarMakeModel}}/>
  </Route>
)
