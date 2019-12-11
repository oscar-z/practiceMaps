import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

function App() {
  const defaultProps = {
    center: {lat: 40.73, lng: -73.93},
    zoom: 20
  }
  return (
    <div className="App">
      <div className="map">
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
