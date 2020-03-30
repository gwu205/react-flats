import React, { Component } from 'react';

class Flat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flat" 
                 style={{backgroundImage: `linear-gradient(0deg, rgba(30,30,30,0.5), rgba(30,30,30,0.2)), url(${this.props.imageUrl})`}}>
                <small>
                    {this.props.price}
                    &nbsp;
                    {this.props.currency}
                </small>
                <p className="flat--title">
                    {this.props.name}
                </p>
            </div>
        )
    }
}

export default Flat;