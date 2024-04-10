import React, { useState } from 'react';

function AddCommentAndEdit({comment_id, feature_id}) {
 
  const [commentFeatureId, setCommentFeatureId] = useState(null);
  const [commentBody, setCommentBody] = useState("");

  const createComment = async (featureID, commentBody) => {
    const response = await fetch(`${API}comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({feature_id: featureID , body: commentBody })
    });
  };

  // const editComment = async (featureID, commentBody) => {
  //   const response = await fetch(`${API}comments`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Cache-Control': 'no-cache'
  //     },
  //     body: JSON.stringify({feature_id: featureID , body: commentBody })
  //   });
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    createComment(feature_id,commentBody);
    setCommentFeatureId('');
    setCommentBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <label htmlFor="comment" className="sr-only">Your comment</label>
        <textarea
          id="comment"
          rows="2"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a comment..."
          required
        />
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          {comment_id ? 'Update comment' : 'Post comment'}
        </button>
      </div>
    </form>
  );
}

export default AddCommentAndEdit;
