import React, { Component } from 'react';
import './home.scss';
import axios from 'axios';
import azrainThumbnail from '../../media/az-rain-cropped-thumbnail.jpg';
import airbnbThumbnail from '../../media/airbnb-cropped-thumbnail.jpg';
import babyNameThumbnail from '../../media/babyname-cropped-thumbnail.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            codeProjectsList: [],
            designProjectsList: []
          }
    }

    componentDidMount(){
        this.getCodeProjects();
        console.log(this.state.codeProjectsList)
        this.getDesignProjects();
    }

    getCodeProjects = () => {
        axios.get('/api/codeprojects').then(res=>{
            this.setState({
                codeProjectsList: res.data
            })
        })
    }

    getDesignProjects = () => {
        console.log('entered getDesignProjects')
        axios.get('/api/designprojects').then(res=>{
            this.setState({
                codeProjectsList: res.data
            })
        })
        console.log(this.state.codeProjectsList)
    }

    // function scrollTo(to, duration){

    // }
    render() { 
        console.log(this.state.codeProjectsList)
        const codeProjectsListDisplay = this.state.codeProjectsList.map((project, i) => {
            return (
                <div className="individual-project-container">
                    <img className="project-thumbnail-img" src={project.project_thumbnail}/>
                            <h3 className="project-title">{project.project_name}</h3>
                </div>
            )
        })

        const designProjectsListDisplay = this.state.designProjectsList.map((project, i) => {
            return (
                <div className="individual-project-container">
                    <img className="project-thumbnail-img" src={project.project_thumbnail}/>
                            <h3 className="project-title">{project.project_name}</h3>
                </div>
            )
        })
        console.log(this.state.toggle)

        return (  
            <div className="home-body">
                <div className="landing-intro-container">
                    <div className="landing-left-side">
                        <h2 className="home-page-p">I'm a developer & designer based in Seattle <span role="img" aria-label="rain-emoji">☁️</span></h2>
                    </div>
                    <div className="landing-right-side">
                        <div className="my-img"></div>
                    </div>
                </div>
                <br></br>
                <div className="down-arrow"><a href="#target"></a></div>
                <p className="home-page-p" id="target">I live at the intersection between design and development. Not only do I love to ideate and map how a product will look, I also enjoy building the frontend side of things <span role="img" aria-label="girl-computer-emoji">👩🏻‍💻</span></p>

                {/* <p className="home-page-p">I wanted to be able to take my designs to a further step by learning how to make them come alive.</p>

                <p className="home-page-p">Over the course of this journey I’ve built some applications I’m really proud of! Check them out below 😊</p> */}

                <div className="my-work-container">
                    <div className="type-titles">
                        <button onClick={()=> this.setState({toggle: true})}><h2 className="toggle-title">CODE</h2></button>
                        <button onClick={()=> this.setState({toggle: false})}><h2 className="toggle-title">DESIGN</h2></button>
                    </div>
                    
                    
                    {this.state.toggle ?
                        <div className="projects-container">
                            {codeProjectsListDisplay}
                        </div>
                        :
                        <div className="projects-container">
                            {designProjectsListDisplay}       
                        </div>
                        
                     }
                    {/* <div className="projects-container">
                        {codeProjectsListDisplay} */}
                        {/*  */}
                        {/* <div className="individual-project-container code">
                            <img className="project-thumbnail-img" src={azrainThumbnail}/>
                            <h3 className="project-title">AZ Rain</h3>
                        </div>
                        <div className="individual-project-container code">
                            <img className="project-thumbnail-img" src={airbnbThumbnail}/>
                            <h3 className="project-title">Airbnb Clone</h3>
                        </div>
                        <div className="individual-project-container code">
                            <img className="project-thumbnail-img" src={babyNameThumbnail}/>
                            <h3 className="project-title">Baby Name Generator</h3>
                        </div>
                        <div className="individual-project-container design">
                            <img className="project-thumbnail-img" src={babyNameThumbnail}/>
                            <h3 className="project-title">Cup of Tea</h3>
                        </div>
                        <div className="individual-project-container design">
                            <img className="project-thumbnail-img" src={babyNameThumbnail}/>
                            <h3 className="project-title">Personal OS</h3>
                        </div> */}
                    {/* </div> */}
                    
                </div>
            </div>
        );
    }
}
 
export default Home;