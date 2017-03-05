import React from 'react'
 
import { Link } from 'react-router'

 const breadCrumb = () => (
  	<div className="md-breadCrumb">
		<div className="md-breadcrumb flat">
		  	<Link to='/carofweek' activeClassName='active'>Home</Link>
		  	<Link to='/search' activeClassName='active'>search</Link>
	  	</div>
	</div>
)

 export default breadCrumb