import React, { useState } from 'react';
import CommentList from './CommentList';
import './App.css';  // Ensure the CSS file is imported

const Comment = ({ comment }) => {
    const [showReply, setShowReply] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [replies, setReplies] = useState(comment.replies || []);

    const handleReply = () => {
        if (replyText.trim()) {
            setReplies([...replies, { id: Date.now(), text: replyText, replies: [] }]);
            setReplyText('');
            setShowReply(false);
        }
    };

    return (
        <div className="comment">
            <p>{comment.text}</p>
            <button className="reply-button" onClick={() => setShowReply(!showReply)}>
                {showReply ? 'Cancel' : 'Reply'}
            </button>
            {showReply && (
                <div className="reply-container">
                    <textarea
                        className="textarea"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Add a reply..."
                    ></textarea>
                    <button className="add-button" onClick={handleReply}>Submit Reply</button>
                </div>
            )}
            {replies.length > 0 && <CommentList comments={replies} />}
        </div>
    );
};

export default Comment;
