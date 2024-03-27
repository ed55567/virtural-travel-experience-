//UnserInteraction.js
import React, { useState } from "react";

const UnserInteraction = ({ city }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

const handleSubmitComment = () => {
    //logic submit comment to backend
    console.log('Submitted comment:', comment);
};

return (
    <div>
        <h2>User Interaction for {city.name}</h2>
         <textarea 
            value={comment}
            onChange={handleCommentChange}
            placeholder="leave a comment...."
        />
        <button onClick={handleSubmitComment}>Submit Comment</button>  
    </div>
    );
};

export default UnserInteraction;