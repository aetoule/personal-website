import React, { Component } from 'react';
import './philantrophy.scss';

import landingImg from '../../media/philantrophy-landing.jpeg';
import initialMockupGallery from '../../media/ph-initialmockup-gallery.svg';
import version2Img from '../../media/ph-version2.jpg';
import finalGallery from '../../media/ph-gallery3-imgs.svg';

import ProjectMenuFooter from '../ProjectMenuFooter/ProjectMenuFooter';


// delete later
import personaImg from '../../media/li-sunho.jpeg';
import initialImpressionSketch from '../../media/li-initial-impression.jpeg';
import designSectionSketch from '../../media/li-design-sketch.jpg';
import gallery1 from '../../media/gallery1-imgs.svg';
import gallery2 from '../../media/gallery2.svg';
import gallery3 from '../../media/gallery3.svg';
import gallery4 from '../../media/gallery4.svg';
// 


class Philantrophy extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            designProjectNumber: 5

         }
    }
    render() { 
        return ( 
            <div>
                <div className="personal-project-title philantrophy">Philantrophy</div>
                <img className='landing-img' src={landingImg} alt='cup of tea landing image' />
            <div className="design-page-container">
                
                <div className="personal-section-title-and-container">
                    <div className="personal-section-title philantrophy">Purpose</div>
                    <div className="project-description-intro-container">
                        <div className="personal-description-left-side-container">
                            <div className="personal-section-description-text"><p>The goal of this project was to find a way to help unify the Seattle Community by ameliorating the problem of homelessness.</p>
                            <br></br>
                            <p>This application was developed within 8 hours for WINFO's Hackathon with an Experience Design Process of 4 phases: Discover, Design, Develop, Deliver. </p>
                            </div>
                        </div>
                        <div className="personal-description-right-side-container">
                            <h3 className='description-title-bold'>Date</h3>
                            <p className='description-text'>January 28 2016</p>
                            <h3 className='description-title-bold'>Role</h3>
                            <p className='description-text'>UX Designer</p>
                            <h3 className='description-title-bold'>Project</h3>
                            <p className='description-text'>Mobile Application</p>
                            <h3 className='description-title-bold'>Team</h3>
                            <p className='description-text'>Joyce Huang, Christy Lu, Jing Wen Pan</p>
                        </div>
                    </div>
                </div>
                <hr className="section-divider-line-upper"></hr>

                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title philantrophy">Overview</div>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side philantrophy-section">
                            <div>
                                <p>Within the eight hours we had for during WINFO's 5th Annual Hackathon, we created a mobile application that facilitates donations from people who are willing to donate to organizations who operate to help the homeless population. Users are incentivized by a point system where they can earn coupons or discounts from a variety of companies.</p>
                                <br></br>
                                <p>Our project won <a target='_blank' href='https://ischool.uw.edu/news/2017/04/200-students-dream-big-and-work-fast-winfo-hackathon'><b>Best Design Award</b></a> after being selected among the top 6 teams after a 2 minute pitch to judges, then a 5 minute presentation to the entire hackathon audience. </p>
                               
                            </div>
                        </div>
                        {/* <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={personaImg}/>
                        </div> */}
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title philantrophy">Discover</div>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side philantrophy-section">
                            <div>
                                <p>We spent the first few hours of the hackathon discussing our idea and planning every aspect of the application. </p>
                                <br></br>

                                <p>With some research, we found that there are as many as 4,505 homeless people a night in Seattle. People in our community want to help, but they are not sure how. There is no source of communication between donors and organizations.</p>
                                <br></br>
                                <p>After much discussion, we decided to make an application in which charitable organizations (food banks, homeless shelters) can post inventory items they need. Then, people who would like to help can use our application to see which organizations near them need what.</p>
                                <br></br>
                                <p>We initially wanted to split our 4 person team into two: two of us would work on the mobile application for the donors to use while the other two would code a website for the organizations to post and manage their requests. However, due to lack of time, we decided against coding the website.</p>
                                <br></br>                             
                            </div>
                        </div>
                          
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title philantrophy">Design</div>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side philantrophy-section">
                            <div>
                                <p>We set out to make our application into a form of a social media platform like Twitter. People in the community can easily see what a food bank needs.</p>
                                <br></br>

                                <p>We also really liked the idea of points and gamifying the application. We wanted it to become a small competition, because people can definitely thrive off of that. We wanted to add a leadership board, but ran out of time. In addition to this, integrating with Facebook would be another good way to incentivize people to donate.</p>
                                                          
                            </div>
                        </div>

                    </div>
                    <h5 className='sprint-label'>Initial Sketches</h5>
                    <img className="full-width-img" src={initialMockupGallery}/>
                    
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                <h5 className='sprint-label'>Initial Sketches</h5>

                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side philantrophy-section">
                            <div>
                                <p>This version was simply a neater and clearer way to express what we wanted to create in Adobe Experience Design, since the first version was messy and more for us to get all of our ideas out.</p>
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={version2Img}/>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                <h5 className='sprint-label'>Version 3</h5>

                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side philantrophy-section">
                            <div>
                                <p>A mentor at the hackathon helps us get to the idea of using Location Services and push notifications to notify users when they are at a grocery store. Then, if they agree to donate, they could be rewarded with 10% off of their grocery store purchase. Our application could collaborate with grocery stores among other interested companies.</p>

                            </div>
                            <br></br>
                        </div>

                    </div>
                    <img className="full-width-img" src={finalGallery}/>
                    
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                <div className="personal-section-title philantrophy">Deliver</div>

                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side philantrophy-section">
                            <div>
                                <p>We pitched and presented our project. An interactive prototype can be found <a target='_blank' href="https://xd.adobe.com/view/e9683acf-f059-40bd-9776-6990930f9280/">here</a>. </p>
                            </div>
                        </div>
                        {/* <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={version2Img}/>
                        </div> */}
                    </div>
                </div>





                

                

                

                <hr className="section-divider-line"></hr>

                <ProjectMenuFooter projectNumber = {this.state.designProjectNumber}/>
            </div>
        </div>
         );
    }
}
 
export default Philantrophy;