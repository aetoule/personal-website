import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import ProjectPage from './Components/ProjectPage/ProjectPage';
import PersonalOS from './Components/PersonalOS/PersonalOS';
import CupOfTea from './Components/CupOfTea/CupOfTea';
import Transform from './Components/Transform/Transform';
import Linery from './Components/Linery/Linery';
import Philantrophy from './Components/Philantrophy/Philantrophy';

export default (
    <Switch>
        <Route exact to path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />

        <Route path="/projectpage/code/:id" component={ProjectPage}/>

        {/* Personal OS */}
        <Route path="/designprojectpage/1" component={PersonalOS}/>
        {/* Cup of Tea */}
        <Route path="/designprojectpage/2" component={CupOfTea}/>
        {/* Internship at Transform */}
        <Route path="/designprojectpage/3" component={Transform}/>
        {/* Linery Mobile App */}
        <Route path="/designprojectpage/4" component={Linery}/>
        {/* Philantrophy Mobile App */}
        <Route path="/designprojectpage/5" component={Philantrophy}/>

    </Switch>
)