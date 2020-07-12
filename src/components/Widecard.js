
import React, { Component } from 'react';

/** NOTES:
  * In this Widecard component below, we have an <h3> element to display the value of “title” prop, <h4> element to display the value of “where” prop, another <h4> element to display the value of “from” and “to” props. 
 */

class Widecard extends Component {
  render() {
    return (
      <div className="widecard">
           
        <div className="compdet">

          <h3>{this.props.title}</h3>

          <h4 className="secondtext">{this.props.where}</h4>

          <h4 className="secondtext">{this.props.from} - {this.props.to}</h4>
        
        </div>

      </div>
    ) // END ReTuRN
  } // END RenDEr
} // END Widecard Class COMPONEnt

// =================================================

export default Widecard