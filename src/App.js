import './App.css';
import Profile from './profile/component';
import image from './profile/photo_fall.jpg'
import React, { Component } from 'react';
class App extends Component {
  
 state = {
   fullName : "Fall Alioune",
   bio : "Diplômé à l'Institut technique supérieur au Maroc, étudiant à GoMyCode et passionné par l'informatique.",
   profession : "Developpeur Full-Stack JS",
   image : "profile/photo_fall.jpg",
   bool1: true,
   bool2: false,
  }

  render () {
   
   return (
    <div className="App">

  <Profile name = {this.state.fullName} bio = {this.state.bio} profession = {this.state.profession}>
  <img src={image} alt=''/>
  </Profile>
  <button>Display</button>


  
   
    </div>
   
  );
}
}

export default App;
