import React, { Component } from 'react';
import './personalos.scss';
import personalLandingImg from '../../media/az-rain-cover-img.png';

class PersonalOS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="landing-img">{personalLandingImg}</div>
                <div className="project-title">Personal OS</div>
                <div className="project-description">

                </div>
            </div> );
    }
}
 
export default PersonalOS;