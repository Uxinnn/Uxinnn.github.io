import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const Projects = props => {
    const projectsData = props.projectsData;
    const tabId = props.tabId;

    return (
        <Grid container id={tabId} justifyContent='space-around' alignItems='center' minHeight='100vh'  sx={{paddingTop: '50px'}}>
            <Grid item sm={12} md={6} sx={{ textAlign: 'center' }}>
                <Typography variant='h1' fontFamily='Agency FB'>
                    Projects
                </Typography>
            </Grid>
            <Grid container item sm={12} md={6} justifyContent='space-around' alignItems='stretch'>
                {projectsData.map(projectData => {return (<ProjectCard {...projectData} />)})}
            </Grid>
        </Grid>
    )
}

export default Projects
