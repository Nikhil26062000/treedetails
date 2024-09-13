// src/MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define the green dot icon
const greenIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  // Dummy data with places in Pune
  const places = [
    { name: 'Shaniwar Wada', position: [18.5196, 73.8553] },
    { name: 'Aga Khan Palace', position: [18.5523, 73.9043] },
    { name: 'Sinhagad Fort', position: [18.3666, 73.7550] },
  ];

  return (
    <MapContainer center={[18.5204, 73.8567]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map((place, index) => (
        <Marker key={index} position={place.position} icon={greenIcon}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
