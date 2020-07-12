
import React, { Component } from 'react';

import Widecard from '../components/Widecard';



class Education extends Component {
  render() {
    return (
      <div className="condiv">

        <h1 className="subtopic"> Education</h1>

        <Widecard title="A.A.S Web Development" where="Wake Tech Comm Coll"
        from="August 2017" to="May 2021" />

        <Widecard title="BFA Graphic Design" where="Univ. of Central Florida"
        from=" August 2007" to="May 2010" />
              
      </div>
    ) // END ReTURN
  } // END ReNDeR method
} // END EDuCAtion CLAss COMpoNEnT

//===================================================

export default Education