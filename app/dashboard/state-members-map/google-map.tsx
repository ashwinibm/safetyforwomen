"use client";

import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import type { StateData } from './types';
import { statesData } from './data';

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Make sure to set this in your .env.local file
  });
  const [selectedState, setSelectedState] = useState<StateData | null>(null);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={5}
      center={center}
      options={options}
    >
      {statesData.map((state, index) => (
        <Marker
          key={index}
          position={{ lat: state.lat, lng: state.lng }}
          onClick={() => {
            setSelectedState(state);
          }}
        />
      ))}

      {selectedState && (
        <InfoWindow
          position={{ lat: selectedState.lat, lng: selectedState.lng }}
          onCloseClick={() => {
            setSelectedState(null);
          }}
        >
          <div>
            <h2>{selectedState.state}</h2>
            <p>Participants: {selectedState.participants}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;