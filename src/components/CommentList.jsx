import React,{useState, useEffect} from 'react'
import AddCommentAndEdit from './AddAndEditComment';

const API = import.meta.env.VITE_FEATURE_API_URL;

function CommentList({feature_id}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
      }, []);
    
    const fetchComments = async () => {
        let urlComments = `${API}comments/feature/${feature_id}`;
        
        const responseComments = await fetch(urlComments, {
          headers: {
            'Content-Type': 'application/vnd.api+json',
            'Cache-Control': 'no-cache'
          }
        })
        const dataComments = await responseComments.json();
        setComments(dataComments);
      };
  
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
    <h2 className="text-lg font-semibold mb-4">Comentarios ({comments.length})</h2>
    {comments?.map((comment, index) => (
      <div key={index} className="flex items-start mb-4">
        <img src="https://via.placeholder.com/40" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
        <div className="flex-1">
          <p className="text-sm text-gray-700 mb-1">{comment.body}</p>
          <div className="flex items-center space-x-2">
            <button onClick={() => onEdit(comment.id)} className="text-xs text-gray-600 hover:text-gray-900 focus:outline-none">
              Editar
            </button>
            <button onClick={() => onDelete(comment.id)} className="text-xs text-gray-600 hover:text-gray-900 focus:outline-none">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    ))}
    <AddCommentAndEdit feature_id={feature_id} />
  </div>
  )
}

export default CommentList