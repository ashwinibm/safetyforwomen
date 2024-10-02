"use client";
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const statesData = [
  { "state": "Maharashtra", "participants": 150 },
  { "state": "Karnataka", "participants": 120 },
  { "state": "Tamil Nadu", "participants": 100 },
  { "state": "West Bengal", "participants": 80 },
  { "state": "Gujarat", "participants": 140 }
]

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 20.5937,
  lng: 78.9629
};

export default function StatesMapGoogle() {
  const [selectedState, setSelectedState] = useState(null);
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
      >
        {statesData.map((state, index) => (
          <Marker
            key={index}
            position={{ lat: state.lat, lng: state.lng }}
            onClick={() => setSelectedState(state)}
          />
        ))}

        {selectedState && (
          <InfoWindow
            position={{ lat: selectedState.lat, lng: selectedState.lng }}
            onCloseClick={() => setSelectedState(null)}
          >
            <div>
              <h2>{selectedState.state}</h2>
              <p>Participants: {selectedState.participants}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}