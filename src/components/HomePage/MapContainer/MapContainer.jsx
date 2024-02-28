import { GoogleMap, DirectionsRenderer, MarkerF } from '@react-google-maps/api';
import './MapContainer.css';

const MapContainer = ({
  index,
  isLoaded,
  setMap,
  center,
  directionsResponse,
}) => {
  return (
    <div className='map-container-main'>
      {/* map container */}
      <div className='map-container'>
        {/* Loading Map */}
        <div className='map-box'>
          {isLoaded && (
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{
                width: '400px',
                height: '585px',
              }}
              options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              {index === 1 && <MarkerF position={center} />}
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
