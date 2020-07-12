

import React, { Component } from 'react';

import ReactTypingEffect from 'react-typing-effect';

import profilepic from '../img/krisphoto.png';

import Social from '../components/Social'  // ATTENTION may have to remove SEMIcolon


class Home extends Component {
  render () {
    return (
      <div className="condiv home">
        
        <img onError={this.addDefaultSrc} src={profilepic} alt={'Kris w Del Rio'} className="profilepic"></img>


        <ReactTypingEffect className="typingeffect" 
          text= {
            ['Hola! This is Kristian W. Del-Rio.', 'I am a Front-End Web Developer']
          }
          speed={100} eraseDelay={500}/>

          <br />
          <Social />
      </div>
    ) // END ReTurN
  } // END REnder
} // END Home ClAss COmPonEnt

export default Home