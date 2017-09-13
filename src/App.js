import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Spaceship from './Spaceship';
import CrewMember from './CrewMember';
import BadAlien from './BadAlien';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Spaceship name = 'Enterprise' />
        <CrewMember name = 'Riker' rank='Commander' />
        <CrewMember name = 'Cool guy' rank='Captain' />
        <BadAlien name = 'Borg' species = 'Borg' />
        {/* </Spaceship> Why isn't this working */}
      </div>
    );
  }
}

export default App;
