import React from 'react';
import Comment from './Comment';
import './App.css';  // Import the CSS file

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;
