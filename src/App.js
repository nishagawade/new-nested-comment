import React, { useState } from 'react';
import CommentList from './CommentList';
import './App.css';  // Make sure to import the CSS file

const App = () => {
    
    const [comments, setComments] = useState([
        { id: 1, text: 'This is the first comment', replies: [] },
        { id: 2, text: 'This is the second comment', replies: [] }
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const handleAddComment = () => {
        if (newCommentText.trim()) {
            setComments([...comments, { id: Date.now(), text: newCommentText, replies: [] }]);
            setNewCommentText('');
        }
    };

    return (
        <div className="app">
            <h1 className="title">Nested Comment Section</h1>
            <div className="new-comment">
                <textarea
                    className="textarea"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Add a new comment..."
                ></textarea>
                <button className="add-button" onClick={handleAddComment}>Add Comment</button>
            </div>
            <CommentList comments={comments} />
        </div>
    );
};

//AIzaSyCAq7S_T9NcUhql4xLt2gdyC3PejwePcLE
export default App;
