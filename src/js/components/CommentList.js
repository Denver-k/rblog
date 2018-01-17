import React, {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

function CommentList(comments = [], isOpen, toggleOpen) {

	const text = isOpen ? 'hide comments' : 'show comments';

	return(
        <div>
            <button onClick = { toggleOpen }>{ text }</button>
            {getBody({comments, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
	comments:PropTypes.array,
	//from toggleOpen decorator
	isOpen:PropTypes.bool,
	toggleOpen:PropTypes.func
}

function getBody({comments, isOpen}){

	if (!isOpen) return null;
	if (!comments.length) return <p>No Commets yet</p>

	return(
		<ul>
			{comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
		</ul>
	)
}

export default toggleOpen(CommentList);
