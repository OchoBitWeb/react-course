import React, { Component } from 'react'
import Movement from '../Movement/Movement'

import './MovementList.css'

class MovementList extends Component {
	render() {
		return (
			<div className='movement-list'>
				<Movement description='Pago' amount={1000} />
				<Movement description='comida' amount={-200} />
				<Movement description='otro' amount={0} />
			</div>
		);
	}
} 

export default MovementList;