import MapView from "../components/events/MapView";

export default function Map() {
  return (
    <div className="p-6 h-screen">
      <h1 className="text-2xl font-bold mb-4">Earthquake Map</h1>
      <MapView />
    </div>
  );
}
