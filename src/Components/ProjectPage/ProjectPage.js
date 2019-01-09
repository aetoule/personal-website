import React, { Component } from 'react';
import axios from 'axios';
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
        console.log(this.state.projectDetails)
    }

    render() { 
        console.log(this.state.projectDetails)

        return ( 
            <div>
                <img className="landing-img" src={this.state.projectDetails.landing_img}/>
            </div>
         );
    }
}
 
export default ProjectPage;