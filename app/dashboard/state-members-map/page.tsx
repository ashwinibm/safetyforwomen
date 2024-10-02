"use client";
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DefaultIcon } from './markerIcon';
import type { StateData } from "./types";
import {statesData} from "./data";
const Page: React.FC = () => {
  const center: [number, number] = [20.5937, 78.9629];
  const [selectedState, setSelectedState] = useState<StateData | null>(null);

  return (
    <MapContainer center={center} zoom={5} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {statesData.map((state, index) => (
        <Marker
          key={index}
          position={[state.lat, state.lng]}
          icon={DefaultIcon as Icon}
          eventHandlers={{
            click: () => {
              setSelectedState(state);
            },
          }}
        >
          <Popup>
            <div>
              <h2>{state.state}</h2>
              <p>Participants: {state.participants}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Page;