import { useState, useEffect } from 'react';
import FormComment from './FormComment';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';


const API = import.meta.env.VITE_FEATURE_API_URL;

function CommentList({ feature_id }) {
  const [comments, setComments] = useState([]);
  const [commentExist, setCommentExist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updatedCommentsSaved, setUpdatedCommentsSaved] = useState({ id: '', body: '' });

  useEffect(() => {
    fetchComments().finally(() => setLoading(false));
  }, []);

  const fetchComments = async () => {
    try {
      let urlComments = `${API}comments/feature/${feature_id}`;
      const responseComments = await fetch(urlComments, {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Cache-Control': 'no-cache'
        }
      });
      if (!responseComments.ok) {
        throw new Error('Failed to fetch comments');
      }
      const dataComments = await responseComments.json();
      setComments(dataComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const updateComment = (updatedComment) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === updatedComment.id) {
        return { ...comment, body: updatedComment.body };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const onDelete = async (comment_id) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        const response = await fetch(`${API}comments/${comment_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
        });
        if (response.ok) {
          const updatedComments = comments.filter(comment => comment.id !== comment_id);
          setComments(updatedComments);
        }
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    }
  };

  const onEdit = async (comment_id, commentBody) => {
    try {
      setUpdatedCommentsSaved({ id: comment_id, body: commentBody });
      
      const response = await fetch(`${API}comments/${comment_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({body: commentBody})
      });
      if (response.ok) {
        setCommentExist(true);
      }
      }
     catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  // Aplica debounce al método onEdit para evitar múltiples llamadas
  const debouncedOnEdit = debounce(onEdit, 300);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold mb-4">Comentarios ({comments.length})</h2>
      {loading && <p>Loading...</p>}
      {comments?.map((comment, index) => (
        <div key={index} className="flex items-start mb-4">
          <img src="https://via.placeholder.com/40" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-1">{comment.body}</p>
            <div className="flex items-center space-x-2">
              <button onClick={() => debouncedOnEdit(comment.id, comment.body)} className="text-xs text-gray-600 hover:text-gray-900 focus:outline-none">
                Editar
              </button>
              <button onClick={() => onDelete(comment.id)} className="text-xs text-gray-600 hover:text-gray-900 focus:outline-none">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
      <FormComment 
        feature_id={feature_id}
        setComments={setComments}
        comments={comments}
        commentExist={commentExist}
        setCommentExist={setCommentExist}
        onEdit={onEdit}
        setUpdatedCommentsSaved={setUpdatedCommentsSaved}
        updatedCommentsSaved={updatedCommentsSaved}
        updateComment={updateComment}
      />
    </div>
  )
}
CommentList.propTypes = {
  feature_id: PropTypes.number.isRequired,
};
export default CommentList;
