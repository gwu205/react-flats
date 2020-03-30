import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
              },
            zoom: 11
        }
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '40%' }}>
                <GoogleMapReact
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                >
                    <Marker />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;