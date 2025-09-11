import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Estilos del mapa
const containerStyle = {
  width: "100%",
  height: "500px"
};

// Coordenadas iniciales (ejemplo: Santo Domingo, RD)
const center = {
  lat: 18.4861,
  lng: -69.9312
};

function MapView() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {/* Ejemplo: marcador en el centro */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;


