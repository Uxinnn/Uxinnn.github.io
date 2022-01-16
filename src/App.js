import './App.css'
import React from "react";
import { Container, CssBaseline } from '@mui/material';
import NavBar from "./components/NavBar.js";
import Intro from './components/Intro.js'
import Skills from './components/Skills.js'
import Projects from "./components/Projects.js";
import WorkExperience from "./components/WorkExperience.js";
import Contact from "./components/Contact.js";
import data from './components/Data.js';

function App() {
    return (
        <div>
            <CssBaseline />
            <NavBar tabsData={data.tabsData}/>
            <Container maxWidth='xl'>
                <Intro />
                <Skills skillsData={data.skillsData} tabId={data.tabsData.at(0).id}/>
                <Projects projectsData={data.projectsData} tabId={data.tabsData.at(1).id} />
                <WorkExperience workExperienceData={data.workExperienceData} tabId={data.tabsData.at(2).id} />
                <Contact tabId={data.tabsData.at(3).id} />
            </Container>
        </div>
    );
}

export default App;
