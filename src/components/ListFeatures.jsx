import React, { useState } from 'react';
import AddComment from './AddComment';

function ListFeatures({ features, filteredMagType }) {
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

  
  const filteredFeatures = filteredMagType
    ? features.filter(feature => feature.attributes.mag_type === filteredMagType)
    : features;
    
  return (
    <ul>
      {filteredFeatures.map((feature) => (
        <li key={feature.id}>
          <p><span className='font-bold'>Title:</span> {feature.attributes.title}</p>
          <p><span className='font-bold'>Place:</span> {feature.attributes.place}</p>
          <p><span className='font-bold'>Time:</span> {feature.attributes.time}</p>
          <p><span className='font-bold'>Magnitude:</span> {feature.attributes.magnitude}</p>
          <p> <span className='font-bold'>Magnitude type:</span> {feature.attributes.mag_type}</p>
          <p><span className='font-bold'>Coordinates:</span> {feature.attributes.coordinates.longitude}, {feature.attributes.coordinates.latitude}</p>
          <a href={feature.links.external_url} target="_blank" rel="noopener noreferrer" className='text-blue-500'>{feature.attributes.title}</a>
          <AddComment createComment={createComment}
            featureId={commentFeatureId}
            commentBody={commentBody}
            setCommentFeatureId={setCommentFeatureId}
            setCommentBody={setCommentBody}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListFeatures;
