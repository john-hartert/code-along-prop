import React, { Component } from 'react';
import './App.css';

import Spaceship from './Spaceship';
import CrewMember from './CrewMember';
import BadAlien from './BadAlien';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Spaceship name = 'Enterprise' 
        commanderType = 'CrewMember'>
        <CrewMember name = 'Riker' rank='Commander' />
        <CrewMember name = 'Cool guy' rank='Captain' />
        <BadAlien name = 'Borg' species = 'Borg' />
        </Spaceship> 
      </div>
    );
  }
}

export default App;
