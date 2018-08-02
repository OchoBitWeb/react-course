import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MovementList from './components/MovementList/MovementList'
import MovementList from './components/AccountName/AccountName'
import FinancialAxios from './utils/FinancialAxios'

class App extends Component {
	componentWillMount() {
		FinancialAxios.get('status')
		.then(response => {
			console.log(response.data);
		})
	}

	render() {

		return (
			<AccountName />
			<MovementList />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));