import React, { Component } from 'react';

import Flat from './flat.js';

import flats from '../data/flats.js';

class FlatList extends Component {
    render() {
        return (
            <div className="flat-list">
                { flats.map(flat => {
                    return <Flat key={flat.lat} name={flat.name} price={flat.price} currency={flat.priceCurrency} imageUrl={flat.imageUrl} />
                })}
            </div>
        );
    }
}

export default FlatList;