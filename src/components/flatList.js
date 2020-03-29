import React, { Component } from 'react';

import Flat from './flat.js';

import flats from '../data/flats.js';

class FlatList extends Component {
    render() {
        return (
            <div className="flat-list">
                { flats.map(flat => {
                    return <Flat name={flat.name} price={flat.price} imageUrl={flat.imageUrl} />
                })}
            </div>
        );
    }
}

export default FlatList;