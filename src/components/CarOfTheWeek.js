import React, {Component} from 'react'

import spinner from '../assets/images/infinity.gif'
import carComponent from './Cartpl.js'

class Widget extends Component{
	// constructor(props) {
	//   super(props)
	//   this.state = {page: 1}
	//   this.selectPage = this.selectPage.bind(this)
	// }

	componentWillMount(){
		this.props.fetchCarOfTheWeek()
	}

	carOftheWeek = data => (
		<div>
		{
			data.map( (car, index) => {
				const bgStyle = {
					backgroundImage: 'url(' + car.imageUrl + ')',
					backgroundPosition: 'center',
					backgroundClip:'cover'
				};
				return carComponent(car, index, bgStyle, 'Car of The Week')
					
			})
		}
		</div>
	)

	render(){
		const { data, loading, error } = this.props
		if( loading ) {
			return <div className="loader"><img src={spinner} /></div>
		}

		if( error ){
			return <p> {error} </p>
		}

		return (
			<div>
			{this.carOftheWeek( data )}
			</div>
		)
	}

}


export default Widget
