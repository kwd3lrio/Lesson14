
import React, { Component } from 'react';

import Navitem from './Navitem';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            'NavItemActive':'',
        } // END State Object NavItemActive
    } // END Constructor
    
    

    activeitem=(x)=> {
        if(this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        } //END Condition
        this.setState({'NavItemActive':x}, () => { 
                document.getElementById(this.state.NavItemActive).classList.add('active');
            } //END arrow Call Back FUnction
        ); // END SETstate ()
    }; // END activeitem Function. added semicolon b/c its an arrow function


    render() {
        return (
                /* NOTE: in Navitem elements, item and tolink are props whose values are passed from this Component, into the Navitem components as a link path to the actual content contained in those components (which act as html pages when rendered as html) */
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}>
                    </Navitem>
                    
                    <Navitem item="About" tolink="/about" activec={this.activeitem}>
                    </Navitem>
                    
                    <Navitem item="Education" tolink="/education" activec={this.activeitem}>
                    </Navitem>
                    
                    <Navitem item="Skills" tolink="/skills" activec={this.activeitem}>
                    </Navitem>

                    <Navitem item="Contact" tolink="/contact" activec={this.activeitem}>
                    </Navitem>                    
                </ul>
            </nav>
        )
    } // END RENDER method
} // END Navbar class component

// Export statement below allows other components to access the Navbar component "Navbar js as an external component"

export default Navbar 