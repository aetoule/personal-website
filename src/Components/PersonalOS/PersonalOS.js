import React, { Component } from 'react';
import './personalos.scss';
import personalLandingImg from '../../media/az-rain-cover-img.png';
import YouTube from 'react-youtube';


class PersonalOS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };
        return ( 
            <div className="design-page-container">
                <div className="personal-project-title">Personal OS</div>

                <div className="youtube-video-container">
                    <YouTube
                        videoId="Y5uheJfCook"
                        opts={opts}
                        onPlay={this._onPlay}
                    />
                </div>
                <div className="personal-section-title-and-container">
                    <div className="personal-section-title">Purpose</div>
                    <div className="project-description-intro-container">
                        <div className="personal-description-left-side-container">
                            <div className="personal-section-description-text"><p>The goal of this project was to design an entirely new operating system for a voice-based device. We decided to create a simple and convenient digital personal assistant & friend in the form of a tablet and small wearable. It can be with the user wherever they go and will blend in with every day life.</p></div>
                        </div>
                        <div className="personal-description-right-side-container">
                            <h3 className='description-title-bold'>Dates</h3>
                            <p className='description-text'>January 2018 - March 2018</p>
                            <h3 className='description-title-bold'>Role</h3>
                            <p className='description-text'>UX / Voice UI Designer</p>
                            <h3 className='description-title-bold'>Project</h3>
                            <p className='description-text'>Mobile Application Design course - Digital Personal Assistant</p>
                            <h3 className='description-title-bold'>Team</h3>
                            <p className='description-text'>Stephanie Burd, Joy Jaeger, Alex Bonilla, Mesfin Tesfaye</p>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container">
                    <div className="personal-section-title">Design Process</div>
                    <h4 className='section-subtitle'>Market Research</h4>
                    <p>We kicked off the task of designing an OS for voice UI by finding out what kinds of needs people have and what voice UI can do to help.</p>
                    <p>From our research we found that:</p>
                    <ul>
                        <li><p>Voice-activated devices & wearables are increasing in popularity due to convenience.</p></li>
                        <li><p>55% of users with access to these devices use them regularly.</p></li>
                        <li><p>The heaviest users of digital assistants are between 25 and 34 because they want functionality over entertainment.</p></li>
                    </ul>
                </div>
            </div> 
            );
    }
    _onPlay(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}
 
export default PersonalOS;