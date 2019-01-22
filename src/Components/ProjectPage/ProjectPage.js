import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import './ProjectPage.scss';

class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDetails: []
          }
    }

    componentDidMount(){
        this.getOneCodeProject()
    }

    getOneCodeProject = () => {
        axios.get(`/api/onecodeproject/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({
                projectDetails: (res.data[0])
            })
        }).catch(err => {
            console.log('error axios getting one code project', err)
        })
    }

    render() { 
        console.log(this.state.projectDetails)
        const {project_name,
            landing_img,
            project_description, 
            technologies_used, 
            github_repo_link, 
            feature1_img, 
            feature1_title, 
            feature1_description, 
            feature1_link, 
            feature2_img, 
            feature2_title, 
            feature2_description, 
            feature2_link, 
            feature3_img, 
            feature3_title, 
            feature3_description, 
            feature3_link} = this.state.projectDetails;

        return ( 
            <div>
                <img className="landing-img" src={landing_img}/>
                <div className="area-under-landing-img">
                    <h1 className="project-title">{project_name}</h1>
                    <div className="intro-section">
                        <p className="project-description">{project_description}</p>
                        <div className="technologies-used">
                            <h3>Technologies used:</h3>
                            <p>{technologies_used}</p>
                            <p>Checkout my github repo <a href={github_repo_link} target="_blank">here</a>!</p>
                        </div>
                    </div>

                    <div className="feature-container">
                        <div className="feature-left-container">
                        <img className="feature-img" src={feature1_img}/>
                        </div>
                        <div className="feature-right-container">
                            <h2 className="feature-title">{feature1_title}</h2>
                            <p className="feature-description-text">{feature1_description}</p>
                            <button className="view-page-btn"><a href={feature1_link}><p className="view-page-btn-text">View Page</p></a></button>
                        </div>
                    </div>

                    <div className="feature-container">
                        <div className="feature-left-container">
                        <img className="feature-img" src={feature2_img}/>
                        </div>
                        <div className="feature-right-container">
                            <h2 className="feature-title">{feature2_title}</h2>
                            <p className="feature-description-text">{feature2_description}</p>
                            <button className="view-page-btn"><a href={feature2_link}><p className="view-page-btn-text">View Page</p></a></button>
                        </div>
                    </div>

                    <div className="feature-container">
                        <div className="feature-left-container">
                        <img className="feature-img" src={feature3_img}/>
                        </div>
                        <div className="feature-right-container">
                            <h2 className="feature-title">{feature3_title}</h2>
                            <p className="feature-description-text">{feature3_description}</p>
                            <button className="view-page-btn"><a href={feature3_link}><p className="view-page-btn-text">View page</p></a></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProjectPage;