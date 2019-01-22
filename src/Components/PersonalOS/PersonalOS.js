import React, { Component } from 'react';
import './personalos.scss';
import personalLandingImg from '../../media/az-rain-cover-img.png';
import YouTube from 'react-youtube';
import iPhoneSiriImg from '../../media/voice-ui-siri-img.jpg';
import PersonalWhiteboardDrawing from '../../media/personal-whiteboard-drawing.jpg';
import WearableSketches from '../../media/Wearable-sketches.jpg';
import CustomizeSketches from '../../media/Customize-sketch.jpg';
import AlexIllustration from '../../media/alex-illustration.png';
import TabletIllustration from '../../media/tablet-illustration.png';
import Sprint1Img1 from '../../media/sprint1img1.png';
import Sprint1Img2 from '../../media/sprint1img2.png';
import Sprint1Img3 from '../../media/sprint1img3.png';
import Sprint1Img4 from '../../media/sprint1img4.png';
import Sprint2Img1 from '../../media/sprint2img1.png';
import Sprint2Img2 from '../../media/sprint2img2.png';
import Sprint3Img1 from '../../media/sprint3img1.png';
import Sprint3Img2 from '../../media/sprint3img2.png';
import Sprint4Img1 from '../../media/sprint4img1.png';
import Sprint4Img2 from '../../media/sprint4img1.png';


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

                <div className="personal-section-title-and-container-under-description">
                    <div className="personal-section-title">Design Process</div>
                    <h4 className='section-subtitle'>Market Research</h4>
                    <p>We kicked off the task of designing an OS for voice UI by finding out what kinds of needs people have and what voice UI can do to help.</p>
                    <p>From our research we found that:</p>
                    <ul>
                        <li className="design-page-bulletted-list"><p>Voice-activated devices & wearables are increasing in popularity due to convenience.</p></li>
                        <li className="design-page-bulletted-list"><p>55% of users with access to these devices use them regularly.</p></li>
                        <li className="design-page-bulletted-list"><p>The heaviest users of digital assistants are between 25 and 34 because they want functionality over entertainment.</p></li>
                    </ul>
                </div>

                <div className="personal-section-title-and-container-under-description-2">
                    <div className="personal-section-left-side-img-container">          
                        <img className="iphone-siri-img" src={iPhoneSiriImg}/>
                    </div>
                    <div className="personal-section-right-side-container">
                        <div><p> We found there was a real audience need to:</p></div>
                        <div className="second-paragraph">
                            <ul>
                                <li className="design-page-bulletted-list"><p>Simplify their lives.</p></li>
                                <li className="design-page-bulletted-list"><p>Streamline interaction with devices.</p></li>
                                <li className="design-page-bulletted-list"><p>Customize their voice controlled device.</p></li>
                                <li className="design-page-bulletted-list"><p>Increase accessibility to home and office.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h4 className='section-subtitle'>Ideation</h4>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <p>After much debate and idea exploration, we came to the decision that we wanted to create a digital personal assistant that can be with you at all times—even when your phone is not with you.</p>
                            <p className="second-paragraph">We came up with the idea of having a tablet device to work with a small token device.</p>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={PersonalWhiteboardDrawing}/>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-2">
                    <div className="personal-section-left-side-img-container">          
                        <img className="wearable-sketch-img" src={WearableSketches}/>
                    </div>
                    <div className="personal-section-right-side-container">
                        <div className="right-side-text"><p>We came up with the idea of a little token device that can be placed inside or on existing accessories, like necklaces, bracelets, watches, etc. </p></div>
                    </div>
                </div>
                
                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <p>Current technologies like Alexa or Siri lack the ability to fully customize them. We thought: what if you could name your assistant whatever you want? From that point on, the assistant would respond to that name. </p>
                            
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={CustomizeSketches}/>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-2">
                    <div className="personal-section-left-side-img-container">          
                        <img className="wearable-sketch-img" src={AlexIllustration}/>
                    </div>
                    <div className="personal-section-right-side-container">
                        <h4 className='section-subtitle'>Persona</h4>
                        <div><p>We created a persona to guide our design decisions.</p></div>
                        <div><p className="second-paragraph">Meet Jack! He is:</p></div>
                        <div className="second-paragraph">
                            <ul>
                                <li className="design-page-bulletted-list"><p>a busy software engineer</p></li>
                                <li className="design-page-bulletted-list"><p>in his late 20's</p></li>
                                <li className="design-page-bulletted-list"><p>living in an apartment.</p></li>
                                <li className="design-page-bulletted-list"><p>forgetful</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h4 className='section-subtitle'>Ideation</h4>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                        <div>
                            <ul>
                                <li className="design-page-bulletted-list"><p>Natural</p></li>
                                <li className="design-page-bulletted-list"><p>Accessible</p></li>
                                <li className="design-page-bulletted-list"><p>Simple</p></li>
                                <li className="design-page-bulletted-list"><p>Customizable</p></li>
                                <li className="design-page-bulletted-list"><p>Personable</p></li>
                            </ul>
                        </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={TabletIllustration}/>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h4 className='section-subtitle'>Design</h4>
                    <h5 className='sprint-label'>1st Design Sprint</h5>
                    <h4 className='section-sub-subtitle'>Our Style Guide</h4>
                    <p>We chose our desired bezel size, fonts, and color scheme.</p>
                    <div className='set-of-two-imgs'>
                        <img className='sprint-img left-img' src={Sprint1Img1} alt='style guide'/>
                        <img className='sprint-img' src={Sprint1Img2} alt='style guide' />
                    </div>
                    <div className='set-of-two-imgs second-row'>
                        <div className='sprint-3-img'>
                            <p>Music player app</p>
                            <img className='sprint-img-second-row left-img' src={Sprint1Img3} alt='music player application'/>
                        </div>
                        <div className='sprint-3-img'>
                            <p>Calendar app</p>
                            <img className='sprint-img-second-row' src={Sprint1Img4} alt='calendar application'/>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>2nd Design Sprint</h5>
                    <p className='img-label'>Dialer App</p>
                    <div className='set-of-two-imgs'>
                        <img className='sprint-img left-img' src={Sprint2Img1} alt='style guide'/>
                        <img className='sprint-img' src={Sprint2Img2} alt='style guide' />
                    </div>                 
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>3rd Design Sprint</h5>
                    <div className='set-of-two-imgs'>
                        <img className='sprint-img left-img' src={Sprint3Img1} alt='style guide'/>
                        <img className='sprint-img' src={Sprint3Img2} alt='style guide' />
                    </div>                 
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>Final Design Sprint</h5>
                    <div className='set-of-two-imgs'>
                        <img className='sprint-img left-img' src={Sprint4Img1} alt='style guide'/>
                        <img className='sprint-img' src={Sprint4Img2} alt='style guide' />
                    </div>                 
                </div>
                <hr className="section-divider-line"></hr>
                <div>
                    <div className="personal-section-title">Reflection</div>
                    <p className="half-sized-text">Out of all the classes I have taken in college, this class was my favorite. It further solidified my love for problem solving in UX. Class time was solely for team brainstorming / ideation and the time would fly by so quickly. This course was a fantastic opportunity to learn and practice my UI design skills.</p>
                </div>
                <hr className="section-divider-line"></hr>

            </div> 
           
                
            );
    }
    _onPlay(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}
 
export default PersonalOS;