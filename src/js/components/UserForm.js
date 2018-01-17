import React, {Component} from 'react';

export default class UserForm extends Component{
	/*Элементы формы всегда выносить в отдельный копонент из-за того что при смене value в поле input будут перестраиваться все компоненты, а так перестроится только компонент формы*/
	state = {
		username:''
	}

	render(){
		return(
			<div>
				Name: <input type="text" value = {this.state.username} onChange = { this.handleUserChange }/>
			</div>
		)
	}

	handleUserChange = (ev) => {
		if (ev.target.value.length > 10) return 

		this.setState({
			username:ev.target.value
		})
	}
}

