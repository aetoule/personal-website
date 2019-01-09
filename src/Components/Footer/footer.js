import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer-container">
                <h2 className="footer-text">developed and designed by aisha toulegenova</h2>        
            </div>
         );
    }
}
 
export default Footer;