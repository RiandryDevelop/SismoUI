import { useState, useEffect } from 'react';
import propTypes from 'prop-types'


const API = import.meta.env.VITE_FEATURE_API_URL;

function FormComment({ feature_id, comments, setComments, commentExist, setCommentExist, onEdit, updatedCommentsSaved,setUpdatedCommentsSaved, updateComment }) {
  const [commentBody, setCommentBody] = useState("");
  

  useEffect(() => {
    const updateCommentsFunction = async () => {
        if (updatedCommentsSaved.body !== '') {
        await onEdit(updatedCommentsSaved.id, updatedCommentsSaved.body);
        updateComment(updatedCommentsSaved);
        setCommentExist(false);
      }
    }
      updateCommentsFunction();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (commentExist) {
        await onEdit(updatedCommentsSaved.id, updatedCommentsSaved.body);
        updateComment(updatedCommentsSaved);
        setCommentExist(false);
      } else {
        const response = await fetch(`${API}comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
          body: JSON.stringify({ feature_id: feature_id, body: commentBody })
        });
        const newComment = await response.json();
        setComments([...comments, newComment]);
        setCommentBody('');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setCommentExist(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <label htmlFor="comment" className="sr-only">Your comment</label>
        <textarea
          id="comment"
          rows="2"
          value={commentExist ? updatedCommentsSaved.body : commentBody}
          onChange={(e) =>commentExist ? setUpdatedCommentsSaved(prevState => ({
            ...prevState,
            body: e.target.value
          })) : setCommentBody(e.target.value)}
          className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a comment..."
          required
        />
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          {commentExist ? 'Update comment' : 'Post comment'}
        </button>
      </div>
    </form>
  );
}

FormComment.propTypes = {
  feature_id: propTypes.number.isRequired,
  comments: propTypes.array.isRequired,
  setComments: propTypes.func.isRequired,
  commentExist: propTypes.bool.isRequired,
  setCommentExist: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
  updatedCommentsSaved: propTypes.object.isRequired,
  setUpdatedCommentsSaved: propTypes.func.isRequired,
  updateComment: propTypes.func.isRequired
}

export default FormComment;
