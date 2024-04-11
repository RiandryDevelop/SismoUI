import CommentList from './CommentList';
function ListFeatures({ features, filteredMagType,  }) {

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
          <CommentList feature_id = {feature.id} />
        </li>
      ))}
    </ul>
  );
}

export default ListFeatures;
