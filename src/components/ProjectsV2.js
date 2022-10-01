import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectsV2 = props => {
    const projectsData = props.projectsData;
    const tabId = props.tabId;

    return (
        <React.Fragment>
            <Box 
                id={tabId} 
                sx={{ 
                    pt: 6 
                }}
            >
                {/* Header */}
                <Typography 
                    variant='h2' 
                    textAlign='center' 
                    fontWeight='bold' 
                >
                    Projects
                </Typography>
                <Typography 
                    variant='subtitle1' 
                    textAlign='center' 
                    fontStyle='italic'
                >
                    Click to learn more...
                </Typography>
                {/* Create project grid here */}
                <Grid 
                    container 
                    justifyContent='center'
                >
                    {projectsData.map(
                        projectData => {
                            return <ProjectCard {...projectData} />
                        }
                    )}
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default ProjectsV2
