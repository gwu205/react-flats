import React, { Component } from 'react';

class Flat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flat">
                <h2>
                    {this.props.name}
                </h2>
                <img src={this.props.imageUrl} />
                <small>
                    {this.props.price}
                </small>
            </div>
        )
    }
}

export default Flat;