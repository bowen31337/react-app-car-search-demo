import React from 'react'
import CarSearch from '../containers/CarSearchContainer'

const Search = props => {
	return (
		<div className="search-containter" >
			<CarSearch {...props}/>
		</div>
		)
}

export default Search
