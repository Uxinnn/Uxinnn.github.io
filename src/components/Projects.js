import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const Projects = props => {
    const projectsData = props.projectsData;
    const tabId = props.tabId;

    return (
        <Grid 
            container id={tabId} 
            justifyContent='space-around' 
            alignItems='center' 
            minHeight='100vh'  
            sx={{
                paddingTop: '50px'
            }}
        >
            <Grid 
                item 
                sm={12} 
                md={6} 
                sx={{ 
                    textAlign: 'center' 
                }}
            >
                <Typography 
                    variant='h2' 
                    fontWeight='bold' 
                    paddingLeft='50px'
                >
                    Projects
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    fontStyle='italic' 
                    paddingLeft='50px'
                >
                    Click to learn more...
                </Typography>
            </Grid>
            <Grid 
                container 
                item 
                sm={12} 
                md={6} 
                justifyContent='space-around' 
                alignItems='stretch'
            >
                {projectsData.map(
                    projectData => {
                        return <ProjectCard {...projectData} />
                    }
                )}
            </Grid>
        </Grid>
    )
}

export default Projects
