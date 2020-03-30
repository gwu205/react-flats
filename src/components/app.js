import React, { Component } from 'react';

import FlatList from './flatList.js';
import Map from './map.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <FlatList />
                <Map />
            </div>
        )
    }
}

export default App;