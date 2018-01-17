import React, {Component} from 'react';
import UserForm from './UserForm';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class App extends Component{

	state = {
		selection:null
	}



    render(){
    	const options = this.props.articles.map(article => ({
    		label:article.title,
    		value:article.id
    	}))

    	return(
    		<div>
    			<UserForm/>
    			<Select options = { options } value = {this.state.selection} onChange = {this.handleSelection} multi/>
	            <ArticleList articles = { this.props.articles }/>
	        </div>
    	)
    }

    handleSelection = selection => this.setState({selection})
}
