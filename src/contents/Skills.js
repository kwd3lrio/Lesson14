
import React, { Component } from 'react';



class Skills extends Component {

  constructor(props) {
    
    super(props);

    this.state= {
      'myskills': ['HTML','CSS','JS','PHP','SQL/MySQL','REACT JS','KNOCKOUT JS', 'GRUNT JS', 'YEOMAN jS']

    } // END IniTIal STAtE OBJect

  } // END CONStruCTOR


/* NOTES:
  * To generate DOM elements dynamically from our state.myskills javascript array below, we'll bind a map funct to the state object containing our array and pass a callback arrow funct within the map funct. 
  * The callback arrow func will loop through the myskills array and render to the DOM our array elements as <li> html items.
*/


  render() {

    return (

      <div className="condiv skills">
        
        <h1 className="subtopic"> My Skills </h1>

        <ul>
          
          {/* UL */}
          {this.state.myskills.map((value) => {
                return <li>{value}</li>
              }
            )
          }

        </ul>
      </div>
    ) // END ReTuRN

  } // END REnDER

} // END Skills ClaSS COMpONeNT

// ====================================================

export default Skills

