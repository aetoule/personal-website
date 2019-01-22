import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './projectmenufooter.scss';

class ProjectMenuFooter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            designProjectsList: [],

         }
    }

    componentDidMount(){
        this.getDesignProjects();
    }

    getDesignProjects = () => {
        axios.get('/api/designprojects').then(res => {
            this.setState({
                designProjectsList: res.data
            })
        })
    }

    render() { 
        const projectId = this.props.projectNumber;
        const mappedDesignProjectList = this.state.designProjectsList.slice(projectId).map((project, i) => {
            return(                
                <div className="individual-project-container">
                    <Link to= {`/designprojectpage/${project.projectid}`}>
                        <img className="project-thumbnail-img" src= {project.project_thumbnail}/>
                        <h3 className="project-title">{project.project_name}</h3>
                    </Link>
                </div>                
            )
        })
        return ( 
            <div>
                <div className='project-footer-links'>
                    <Link to= '/' ><h5 className='back-to-projects-link'>Back to Projects</h5></Link>
                    {(projectId != 5) 
                        ?
                        <div>
                        <Link to= {`/designprojectpage/${projectId + 1}`} ><h5 className='back-to-projects-link'>Next project</h5></Link></div>
                        : 
                        <div>
                        <Link to= '/designprojectpage/1'><h5 className='back-to-projects-link'>Next project</h5></Link></div>
                    }
                    
                </div>
                <div className="projects-container">
                    {mappedDesignProjectList}
                </div>
            </div> 
            );
    }
}
 
export default ProjectMenuFooter;