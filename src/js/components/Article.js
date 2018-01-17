import React, {Component, PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import CSSTransitionGroup from 'react-transition-group'
import  './article.css'

class Article extends PureComponent {
    //PureComponent Это компонент который сравнивает изменения пропсов и обновляет только те в которых изменения произошли
    static propTypes = {
        article: PropTypes.shape({
            id:PropTypes.string.isRequired,
            title:PropTypes.string.isRequired,
            text:PropTypes.string
        }).isRequired,
        isOpen:PropTypes.bool,
        toggleOpen:PropTypes.func
    }

    state = {
        updateIndex: 0
    }
    /* Это используется ждя того чтобы не обновлять компонентны в которых не было изменений
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen
    }
    */

    componentWillReceiveProps(nextProps) {
        console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
    }

    componentWillMount(){
        console.log('---', 'mounting')
    }

    render() {

        const {article, isOpen, toggleOpen} = this.props;

        /* 
            так было в версии 1й, а во второй по другому уже всё (нужно переделать)
            <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    transitionAppearTimeout = {500}
                    component = 'div'
                >
                    
                    <h3>{article.title}</h3>
                </CSSTransitionGroup>
         */

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}> 
                    { isOpen ? 'close' : 'open' }
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref =>{
        this.container = ref;
        console.log('---', ref)
    }

    componentDidMount(){
        console.log('---', 'mounted')
    }

    getBody() {

        const {article, isOpen} = this.props;

        if (!isOpen) return null;

        return(
            <section> 
                {article.text} 
                <button onClick = {()=> this.setState({updateIndex:this.state.updateIndex + 1})}>Update</button>>
                <CommentList comments = {article.comments} key = {this.state.updateIndex} />
            </section>
        )
    }

    getComments() {

        if (!this.state.isOpenComments) return null;
        const {article} = this.props;
        const commentsElements = article.comments.map((comment) => <div> { comment } </div>)
        return(
            <div>
                {commentsElements}
            </div>
        )
    }
/*
    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    toggleOpenComments = () => {
        this.setState({isOpenComments: !this.state.isOpenComments});
    }
    */
    

}

export default Article

