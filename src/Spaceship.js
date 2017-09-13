import React, { Component } from 'react';
import propTypes from 'prop-types';
// Render is the only lifecycle method required for a class component.
class Spaceship extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
       const { name } = this.props;

       return (
        <div>
            <h1>{name}</h1>
        </div>
       );
    }
}

export default Spaceship;