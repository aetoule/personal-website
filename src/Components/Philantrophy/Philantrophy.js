import React, { Component } from 'react';
import './philantrophy.scss';

import landingImg from '../../media/philantrophy-landing.jpeg';
import initialMockup1 from '../../media/ph-initialmockup-1.jpg';
import initialMockup2 from '../../media/ph-initialmockup-2.jpg';
import initialMockup3 from '../../media/ph-initialmockup-3.jpg';


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
                </div>




                <br></br>
                <h4>OLD CONTENT STARTS HERE</h4>
                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title philantrophy">User Research</div>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>During a conversation with our classmate Sunho, he expressed frustration about his daily struggle to buy food on campus. When he gets hungry between classes, he is often unsure of whether he should take the risk to walk all the way to the cafeteria to buy food at a vendor only to find the lines are too long to wait in, or if he should settle for a less satisfying but quick bagel from a nearby cafe to be on time for class.</p>
                               
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={personaImg}/>
                        </div>
                    </div>
                </div>
                
                <div className="personal-section-title-and-container-under-description-3">
                    <h5 className='sprint-label'>Initial Impression</h5>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>During a conversation with our classmate Sunho, he expressed frustration about his daily struggle to buy food on campus. When he gets hungry between classes, he is often unsure of whether he should take the risk to walk all the way to the cafeteria to buy food at a vendor only to find the lines are too long to wait in, or if he should settle for a less satisfying but quick bagel from a nearby cafe to be on time for class.</p>             <br></br>  
                                <p>Upon further research we found that long lines on campus are a very relevant issue -  according to the College & University Consumer Trend Report, over half of students (54%) purchase food and beverages on campus at least twice a week. (With such limited time dedicated to eating, there is a significant problem of not knowing where to get food that fits within your schedule.)</p>
                                <br></br> 
                                <p>We realized that the problem would be solved if students could somehow see how long a line is without actually having to walk there. If we could come up with an application that would give users some form of indication for how much time they would spend in any given line, students could save time by avoiding long lines.</p>
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={initialImpressionSketch}/>
                            <h6>Initial mockup of our main screen</h6>
                        </div>
                    </div>
                </div>

                <div className="personal-section-title-and-container-under-description-3">
                    <div className="personal-section-title philantrophy">Design</div>
                    <div className="personal-section-text-and-img-container">
                        <div className="text-left-side">
                            <div>
                                <p>The biggest challenge we faced when developing this idea was how we would access and present the information about how long one would wait in a line. At first we wanted to rely on crowdsourcing to relay how long lines are at any given vendor.</p>
                                <br></br>
                                <p>We came up with a point incentive program called "Crumbs." A user could earn Crumbs by creating an account, or by making posts (to incentivize users to share information about how a line might be). These points could then be used in the form of coupons, redeemable at vendors on campus.</p>
                                <br></br>
                                <p>However we were unsure of whether our users would be honest, and if not many Linery users were in the area, there would be no data to display on our application.</p>
                                <br></br>
                                <p>Then we thought about partnering with Square to calculate and display how many customers were in line by how fast and how often sales were being logged. This would only work with the assumption that every University of Washington food vendor uses Square, and if the calculation of wait time was accurate every time, which we were not certain of. </p>

                               
                            </div>
                        </div>
                        <div className="personal-section-left-side-img-container">
                            <img className="iphone-siri-img" src={designSectionSketch}/>
                        </div>
                    </div>
                </div>

                <h5 className='sprint-label'>Initial Mockups</h5>
                <div>
                    <img className="full-width-img" src={gallery1}/>
                </div>
                <div className="rationale-feedback-test">
                    <div className="rationale-feedback-section">
                        <h3 className='rationale-feedback-test-headers'>Our Rationale</h3>
                        <p>Users could make accounts in order to rate lines to earn Crumbs, or to save their searches. They would enter their phone number to keep users as accountable and honest as possible. We wanted to display vendors in the form of a list view and map view to cater to varying user preferences.</p>
                        <br></br>
                        <h3 className="feedback-section rationale-feedback-test-headers">Feedback</h3>
                        <p>A user said that the application does not answer the question how much time one will be spending in line. In terms of the interface, users were generally unsure of what the emojis were indicating. They wanted to see a scale for what the emojis mean, or a different format. They also wanted to be able to sort the list by distance from current location and they wanted to be able to click on a vendor and find out more information about it, like building information,  or popular menu items.</p>
                    </div>
                    <div className="test-section">
                    <h3 className="rationale-feedback-test-headers">Test</h3>
                        <p>We conducted a few user tests with our paper prototypes. We asked users to conduct a few questions to find out whether our interface was clear:</p>
                        <br></br>

                        <ul>
                            <li className="design-page-bulletted-list"><p>What was confusing to you?</p></li>
                            <li className="design-page-bulletted-list"><p>Is there anything you'd like to see included?</p></li>
                            <li className="design-page-bulletted-list"><p>Do the icons make sense to you?</p></li>                 
                        </ul>
                    </div>
                </div>


                <div className="personal-section-title philantrophy">Develop</div>
                <h5 className='sprint-label'>Version 1</h5>
                <div>
                    <img className="full-width-img" src={gallery2}/>
                </div>
                <div className="rationale-feedback-test">
                    <div className="rationale-feedback-section">
                        <h3 className='rationale-feedback-test-headers'>Our Rationale</h3>
                        <p>We got rid of user accounts and point programs altogether in order to prioritize quick results. We figured if a student is using our application, it is to quickly find out how many minutes a line will take to wait in. We wanted to make the application as simple as possible.</p>
                        <br></br>
                        <p>After many iterations of ideas, we found a company called SenSource that manufactures 3D people counter devices that can be installed at any vendor and will return how many minutes one would wait in the vendor's line with Vea Analytics Software. We would hypothetically partner with the company to install SenSource cameras at every vendor on campus. Our application would display the data gathered through the sensors.</p>
                    
                        <br></br>
                        <h3 className="feedback-section rationale-feedback-test-headers">Feedback</h3>
                        <p>The color scheme was a bit difficult to see for users. It was suggested to add a distance indicator on the list view.</p>
                    </div>
                    <div className="test-section">
                    <h3 className="rationale-feedback-test-headers">Test</h3>
                        <p>We asked our users about their opinion on the color scheme and overall appearance of the application.</p>
                    </div>
                </div>

                <h5 className='sprint-label'>Version 2</h5>
                <div>
                    <img className="full-width-img" src={gallery3}/>
                </div>
                <div className="rationale-feedback-test">
                    <div className="rationale-feedback-section">
                        <h3 className='rationale-feedback-test-headers'>Our Rationale</h3>
                        <p>We came up with a scale of green numbers for a short wait of 1-3 minutes, yellow for 4-6 minutes, orange for 7-9 minutes, and red was for a long wait 10 minutes or greater. We also integrated Google information for busy places tend to be based on past history. On the map view, the flags would also be colored by their wait time for a quick overview before clicking on a particular vendor.</p>
                        <br></br>
                        <p>The color scheme was appreciated for the way it looked, but it would not be as useful for colorblind users, and the contrast between the light blue text in the top bar and the white was still low. Users wanted to see distance indicators on every vendor, on both Time sorted list view and Distance sorted list view.</p>
                    
                        <br></br>
                        <h3 className="feedback-section rationale-feedback-test-headers">Feedback</h3>
                        <p>The color scheme was a bit difficult to see for users. It was suggested to add a distance indicator on the list view.</p>
                    </div>
                    <div className="test-section">
                    <h3 className="rationale-feedback-test-headers">Test</h3>
                        <p>We asked participants about their thoughts on our new rainbow scheme, and if they felt the application was missing anything vital.</p>
                    </div>
                </div>

                <h5 className='sprint-label'>Version 3</h5>
                <div>
                    <img className="full-width-img" src={gallery4}/>
                </div>
                <div className="rationale-feedback-test">
                    <div className="rationale-feedback-section our-rationale">
                        <h3 className='rationale-feedback-test-headers'>Our Rationale</h3>
                        <p>The new progress bar was more colorblind friendly, while still keeping the color scale idea. We darkened the color of blue for the header and the map for improved visibility.  We added distance indicators for every result on the list view screen.</p>
                        <br></br>
                        <p>*As this was our final version, we did not run any tests or receive feedback*</p>
                    </div>
                    
                </div>

                <div className="rationale-feedback-test">
                    <div className="rationale-feedback-section our-rationale">
                        <div className="personal-section-title philantrophy">Deliver</div>
                        <p>In addition to our prototype, we wrote an extensive specification document detailing the application's in depth problem statement, scope, solution (explanation, rationalization), and limitations. Our project was selected by the professor as an exemplary sample for the subsequent INFO 360 class.</p>
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