import React, {Component} from 'react'

import spinner from '../assets/images/infinity.gif'
import carComponent from './Cartpl.js'

class CarMakeModel extends Component{
	componentWillMount(){
		this.props.fetchCarMakeModel(this.props.params.modelId)
	}

	carMakeModel = data => (
		<div>
		{
			data.map( (car, index) => {
				const bgStyle = {
					backgroundImage: 'url(' + car.imageUrl + ')',
					backgroundPosition: 'center',
					backgroundClip:'cover'
				};
				return carComponent(car, index, bgStyle)
					
			})
		}
		</div>
	)

	render(){
		const { data, loading, error } = this.props
		if( loading ) {
			return <div className="loader"><img src={spinner} role="presentation"/></div>
		}

		if( error ){
			return <p> {error} </p>
		}

		return (
			<div>
			{this.carMakeModel( data )}
			</div>
		)
	}

}


export default CarMakeModel
