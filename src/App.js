import React, { Component } from 'react';
import './App.css';

import Spaceship from './Spaceship';
import CrewMember from './CrewMember';
import BadAlien from './BadAlien';
import Planet from './Planet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Planet name="Pluto">
            <CrewMember name="Uhuru" rank="Commander" />
            <CrewMember name="Kirk" rank="Captain" />
            <BadAlien name="Khan" species="Super weird" />
        </Planet>
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
