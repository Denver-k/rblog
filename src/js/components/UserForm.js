import react, {Component} from 'react';

export default class UserForm extends Component{
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

