import React, { useState } from 'react';
import './ComparePic.css';

function ComparePic() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    setComments([...comments, comment]);
    event.target.reset();
  };

  const handleCommentEdit = (index, newComment) => {
    const updatedComments = [...comments];
    updatedComments[index] = newComment;
    setComments(updatedComments);
  };

  return (
    <div className="ComparisonPage">
      <div className="picture-container">
        <div className="picture">
          <img src="left_picture.jpg" alt="Left Picture" />
          <p>Left Picture Description</p>
        </div>
        <div className="picture">
          <img src="right_picture.jpg" alt="Right Picture" />
          <p>Right Picture Description</p>
        </div>
      </div>
      <div className="comparison-container">
        <div className="compare-tips">
          <h2>Comparison Tips</h2>
          <ul>
            <li>Tip 1</li>
            <li>Tip 2</li>
            <li>Tip 3</li>
          </ul>
        </div>
        <div className="comments-container">
          <h2>Comments</h2>
          <form onSubmit={handleCommentSubmit}>
            <input type="text" name="comment" placeholder="Write a comment..." required />
            <button type="submit">Submit</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <span>{comment}</span>
                <button onClick={() => handleCommentEdit(index, prompt("Edit comment:", comment))}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ComparePic;