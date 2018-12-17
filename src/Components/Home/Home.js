import React, { Component } from 'react';
import './home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="home-body">
                <div className="landing-intro-container">
                    <div className="landing-left-side">
                        {/* <h2>Hey there, welcome!</h2>  */}
                        <h2 className="home-page-p">I'm a Front-End Developer and UX Designer based in Phoenix, AZ 🌵</h2>
                        <div className="down-arrow"><a href="#page-1">1</a></div>
                    </div>
                    <div className="landing-right-side">
                        <div className="my-img"></div>
                    </div>
                </div>
                <br></br>
                <p className="home-page-p">In addition to my UX Design work, I have experience building some projects as a front end developer 👩🏻‍💻</p>

                <p className="home-page-p">I wanted to be able to take my designs to a further step by learning how to make them come alive.</p>

                <p className="home-page-p">Over the course of this journey I’ve built some applications I’m really proud of! Check them out below 😊</p>

                <h2>My Work</h2>
            </div>
        );
    }
}
 
export default Home;