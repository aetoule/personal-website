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
        const {projectid, project_name, project_thumbnail,
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
                <h1 className="project-title">{project_name}</h1>
                <div className="intro-section">
                    <p>{project_description}</p>
                    <div>
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
                        <p>{feature1_description}</p>
                        <button><a href={feature1_link}><p>Vist page here</p></a></button>
                    </div>
                </div>

                <div className="feature-container">
                    <div className="feature-left-container">
                    <img className="feature-img" src={feature2_img}/>
                    </div>
                    <div className="feature-right-container">
                        <h2 className="feature-title">{feature2_title}</h2>
                        <p>{feature2_description}</p>
                        <button><a href={feature2_link}><p>Vist page here</p></a></button>
                    </div>
                </div>

                <div className="feature-container">
                    <div className="feature-left-container">
                    <img className="feature-img" src={feature3_img}/>
                    </div>
                    <div className="feature-right-container">
                        <h2 className="feature-title">{feature3_title}</h2>
                        <p>{feature3_description}</p>
                        <button><a href={feature3_link}><p>Vist page here</p></a></button>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default ProjectPage;