import React, {Component} from 'react'

import spinner from '../assets/images/infinity.gif'
import FormGroup  from 'react-bootstrap/lib/FormGroup'
import FormControl  from 'react-bootstrap/lib/FormControl'
import ControlLabel  from 'react-bootstrap/lib/ControlLabel'
import { Link } from 'react-router'

class CarSearch extends Component{

	state = {
		disableSubmit:true,
		modelId:null
	}

	componentWillMount(){
		this.props.fetchCarMakes()
	}
	componentWillUnmount() {
		this.props.resetCarModels()
		this.setState({disableSubmit:true})
	}

	changeCarMakes = e => {
		this.props.fetchCarModels(e.target.value)
		if( '' === e.target.value ) {
			this.setState({disableSubmit:true})
		}
	}

	changeCarModels = e => {
		this.setState({disableSubmit:true})

		if( '' !== e.target.value ) {
			this.setState({disableSubmit:false,modelId:e.target.value})
		}
	}


	carMakesList = makes => (
				<div className="col-md-4">
					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Select Car Make</ControlLabel>
						<FormControl componentClass="select" placeholder="select" onChange={this.changeCarMakes}>
						<option value="">select</option>
						{
							makes.map( make => (
								<option value={make.id} key={make.id}>{make.name}</option>
							))
						}
						</FormControl>
					</FormGroup>
			    </div>

			)
	submitCarSearch = () => (
	<div className="col-md-12">
		<Link to={`/make/model/${this.state.modelId}`} disabled={this.state.disableSubmit} className="btn btn-default">Search</Link>
	</div>
	)						

	carModelsList = models => {
		if (Array.isArray(models) && models.length > 0) {
		return (
					<div className="col-md-4">
						<FormGroup controlId="formControlsSelect">
							<ControlLabel>Select Car Model</ControlLabel>
							<FormControl componentClass="select" placeholder="select" onChange={this.changeCarModels}>
							<option value="">select</option>
							{
								models.map( model => (
									<option value={model.id} key={model.id}>{model.name}</option>
								))
							}
							</FormControl>
						</FormGroup>
				    </div>

				)
							}
		return ''
	}




	render(){
		const { dataCarMakes, loadingCarMakes, errorCarMakes,dataCarModels, loadingCarModels, errorCarModels } = this.props

		if( loadingCarMakes ) {
			return <div className="loader"><img src={spinner} role="presentation"/></div>
		}

		if( errorCarMakes ){
			return <p> {errorCarMakes} </p>
		}


		return (
			<div className="row">
				{this.carMakesList(dataCarMakes)}
				{loadingCarModels || this.carModelsList(dataCarModels) }
				{this.submitCarSearch()}
			 </div>


		)
	}

}


export default CarSearch
