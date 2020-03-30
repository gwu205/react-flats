import React, { Component } from 'react';

import FlatList from './flatList.js';

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
            </div>
        )
    }
}

export default App;