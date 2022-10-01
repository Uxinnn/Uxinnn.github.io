import './App.css'
import React from "react";
import { Container, CssBaseline } from '@mui/material';
import NavBar from "./components/NavBar.js";
import Intro from './components/Intro.js'
import Skills from './components/Skills.js'
import ProjectsV2 from "./components/ProjectsV2.js";
import WorkExperience from "./components/WorkExperience.js";
import TestimonialV2 from './components/TestimonialV2.js';
import ExtraCurricular from './components/ExtraCurricular.js';
import Contact from "./components/Contact.js";
import data from './components/Data.js';
import background from './img/background.png';

function App() {
    return (
        <div>
            <CssBaseline />
            <NavBar tabsData={data.tabsData} linksData={data.linksData}/>
            <Intro linksData={data.linksData} />
            <TestimonialV2 testimonialsData={data.testimonialsData} />
            <Container sx={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center top',  backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', alignItems: 'center'}} maxWidth='xl'>
                <Skills skillsData={data.skillsData} tabId={data.tabsData.at(0).id}/>
                <ProjectsV2 projectsData={data.projectsData} tabId={data.tabsData.at(1).id} />
                <WorkExperience workExperienceData={data.workExperienceData} tabId={data.tabsData.at(2).id} />
                <ExtraCurricular extraCurricularsData={data.extraCurricularsData} tabId={data.tabsData.at(3).id} />
                <Contact linksData={data.linksData} tabId={data.tabsData.at(4).id} />
            </Container>
        </div>
    );
}

export default App;
