import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header-container">
                <div className="header-left-side">
                    <h6 className='aishatoulegenova'><Link to="/">AISHA TOULEGENOVA</Link></h6>
                </div>
                <div className="header-right-side-nav">
                    <ul>
                        <li><Link to="/skills">SKILLS</Link></li>
                        <li><Link to="/portfolio">PORTFOLIO</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
                
            </div>
         );
    }
}
 
export default Header;