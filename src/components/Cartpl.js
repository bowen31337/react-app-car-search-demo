import React from 'react'

const car = (car, index , bgStyle, byline = '') => (
<div className="demo-card-wide mdl-card mdl-shadow--2dp" key={index}>
	<div className="mdl-card__title" style={bgStyle} >
		<h2 className="mdl-card__title-text" >{byline !==""?byline+':': ''}{[car.carMake,car.name].join(" ")}</h2>
	</div>
	<div className="mdl-card__supporting-text">
		{car.review}
	</div>
	<div className="mdl-card__actions mdl-card--border">
		<span className="card-price_amount">
		AUD:{car.price}
		</span>
	</div>
</div>
)

export default car