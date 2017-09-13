import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Render is the only lifecycle method required for a class component.
class Spaceship extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
       const { name, children } = this.props;

       return (
        <div>
            <h1>{name}</h1>
            {children}
        </div>
       );
    }
}

export default Spaceship;