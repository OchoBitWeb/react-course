import React, { Component } from 'react'
import Account from '../Account/Account' 

class AccountList extends Component {
	render() {
		return (
			<div className='account-name'>
				<Account name='Nombre 1' />
				<Account name='Nombre 2' />
				<Account name='Nombre 3' />
			</div>
		)
	}
}

export default AccountList;