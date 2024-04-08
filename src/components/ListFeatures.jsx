import React,{useState} from 'react'
import AddComment from './AddComment'

function ListFeatures({features}) {
  const [commentBody, setCommentBody] = useState('');
  const [commentFeatureId, setCommentFeatureId] = useState('');
  const createComment = async (featureId) => {
    const response = await fetch(`http://127.0.0.1:3000/api/features/${featureId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({ body: commentBody })
    });

  };
  return (
    <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <p>{feature.attributes.title}</p>
            <p>{feature.attributes.place}</p>
            {/* Agregar más información si es necesario */}
            <AddComment createComment={createComment} 
                  featureId={commentFeatureId} 
                  commentBody={commentBody} 
                  setCommentFeatureId={setCommentFeatureId} 
                  setCommentBody={setCommentBody}
                  />
          </li>
        ))}
      </ul>
  )
}

export default ListFeatures