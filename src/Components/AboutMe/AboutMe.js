import React, { Component } from 'react';
import './AboutMe.scss';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <div className="left-and-right-container">
                    <div className="left-side-container">img</div>
                    <div className="right-side-container">About me text</div>
                    </div>
                
            </div>
        );
    }
}
 
export default Portfolio;