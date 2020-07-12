
import React, { Component } from 'react';

// NOTE: This import statement will import the “Link” class from the “react-router-dom” module.

import { Link } from "react-router-dom";


/* NOTE:
    * Inside our return method, Getting the values of “item” and “tolink” prop and setting to the Link component.
    * <Link> tag is the component imported above from the “react-router-dom”. behave like an <a> tag in html and the "to" prop acts like an href att.
    * Comment: Below we are Passing the “activeitem()” method as a prop to the “Navitem” component, so that the function is triggered when  a Navitem element component is clicked. We do so by setting the "activeitem() function in the onClick att of <Link>.
    * The bind() method is used to include the current instance into 1st paramenter and the user's input click into the 2nd paramenter 
*/


class Navitem extends Component {
  render () {
    return (

      <li id={this.props.item}>
        <Link 
          to={this.props.tolink} 
          onClick={this.props.activec.bind(this, this.props.item)}>
            {this.props.item}
        </Link>
      </li>
    ) // END Return
  } // END Render METHOD
} // END NAVitem Class React Component

// =========================================================

/* NOTE:
   * The export statement below will get the values of “item” and “tolink” prop from Navbar comp. and sets them to the Link component above.
*/

export default Navitem