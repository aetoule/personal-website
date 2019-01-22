import React, { Component } from 'react';
import './transform.scss';
import ProjectMenuFooter from '../ProjectMenuFooter/ProjectMenuFooter';

import backgroundImg from '../../media/tr-background-img.png';
import iteration1Img from '../../media/tr-iteration1-img1.png';
import iteration2Img from '../../media/tr-iteration2-img1.png';
import finalImg from '../../media/tr-final-img.png';

class Transform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designProjectNumber: 3
          }
    }
    render() { 
        return (
            <div>
                <div className="personal-project-title transform">Internship Project</div>
                {/* <img className='landing-img' src={landingImg} alt='cup of tea landing image' /> */}
            <div className="design-page-container">
                
                <div className="personal-section-title-and-container">
                    <div className="personal-section-title transform">Purpose</div>
                    <div className="project-description-intro-container">
                        <div className="personal-description-left-side-container">
                            <div className="personal-section-description-text"><p>Over the summer (2017), I had the unique opportunity to intern at Transform. Inc, a SaaS startup in Seattle. What I loved most was that I was able to take on many roles, from UX Researcher to Product Designer. I contributed to three distinct projects during my internship.</p></div>
                            <div className="personal-section-description-text"><p>My last project was a re-imagination of an existing web application created for Xerox (one of our clients), where I redesigned the experience and made drastic feature changes to construct a simpler and more cohesive product. While I cannot display two of them, I can discuss the last project! </p></div>
                        </div>
                        <div className="personal-description-right-side-container">
                            <h3 className='description-title-bold'>Dates</h3>
                            <p className='description-text'>July 2017-September 2017</p>
                            <h3 className='description-title-bold'>Role</h3>
                            <p className='description-text'>UX Designer</p>
                            <h3 className='description-title-bold'>Project</h3>
                            <p className='description-text'>Chrome Web Extension redesign</p>
                            <h3 className='description-title-bold'>Team</h3>
                            <p className='description-text'>Transform, Inc. Product Engineering Team</p>
                        </div>
                    </div>
                </div>
                <hr className="section-divider-line-upper"></hr>

                <div className="personal-section-title-and-container-under-description">
                    <div className="personal-section-title transform">Background</div>
                    <p>Scanning documents can be a very tedious process- naming, saving the file, remembering what the file was named in order to find it, etc.</p>
                    <p>Xerox Web Capture is a Chrome extension created to facilitate and streamline this process. However, the product needed some improvement. I was approached by my product manager to help redesign the existing experience for a simpler and cleaner one. </p>
                    
                </div>
                <img className='full-width-img' src={backgroundImg} alt='dating app market analysis chart'/>

                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title transform">Design Process</div>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>Things that stood out to me immediately:</p>
                                <ul>
                                    <li className="design-page-bulletted-list"><p>Inconsistent types of input boxes</p></li>
                                    <li className="design-page-bulletted-list"><p>Offers users too many options</p></li>
                                    <li className="design-page-bulletted-list"><p>Option meanings are unclear about what they apply to</p></li>
                                    <li className="design-page-bulletted-list"><p>Inconsistent alignments</p></li>
                                    <li className="design-page-bulletted-list"><p>Too much use of red (cultural meanings associated with it like stop, alert, etc.)</p></li>
                                    <li className="design-page-bulletted-list"><p>Overall clunky look</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">

                            {/* ADD A CAROUSEL HERE */}
                            {/* <img className="iphone-siri-img" src={lofiImg1}/>
                            <img className="iphone-siri-img" src={lofiImg2}/> */}
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>1st Iteration</h5>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>My first instinct was to round out the harsh edges and clean up the scanner settings. </p>
                                <p>In the second image (editor screen), you can see there are less tools. This was because I found that many of them were unnecessary or repetitive and were only making the page more confusing to navigate. </p>
                                
                            </div>
                        </div>
                       
                    </div>
                    <div>
                        <img className="full-width-img" src={iteration1Img}/>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>2nd Iteration</h5>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>I felt that the liberal use of the Xerox red color was creating a jarring and unapproachable experience. We proposed to use the Xerox Web Capture logo's purple color to replace the red, and Xerox then approved. </p>
                                <p>In this version, as can be seen in the second image, I found a way to remove the left side menu that was taking a up a lot of space, and keeping the application from having a sleek look. </p>
                                <p>Here we also introduced the idea of company branding (image 2). A company can pay an additional amount in order to remove the Xerox Web Capture branding and replace it with their own.</p>
                            </div>
                        </div>                   
                    </div>
                    <div>
                        <img className="full-width-img" src={iteration2Img}/>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>2nd Iteration</h5>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>In this version, I introduced a redesigned tab navigation.</p>
                                <p>It was unnecessary to give users the option to choose between portrait view and landscape. Looking at data from the existing set of users, most people used XWC in portrait mode. Thus we decided to remove this setting.</p>
                                <p>I brought back the Xerox red color (image 2) as an alert message, which I felt to be a more appropriate use of the color. </p>
                            </div>
                        </div>                   
                    </div>
                    <div>
                        <img className="full-width-img" src={finalImg}/>
                    </div>
                </div>

                <div>
                    <div className="personal-section-title transform">Reflection</div>
                    <p className="half-sized-text">My takeaway from this project is that obtaining user data is extremely crucial as it is very important to avoid creating something people cannot use.</p>
                    <p className="half-sized-text">Update (November 2017) : I am currently working as a contractor to produce the mobile version of this product!</p>
                    

                </div>
                <hr className="section-divider-line"></hr>

                <ProjectMenuFooter projectNumber = {this.state.designProjectNumber}/>

            </div>
        </div>
        );
    }
}
 
export default Transform;