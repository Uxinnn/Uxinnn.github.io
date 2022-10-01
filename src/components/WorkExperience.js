import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';


const WorkExperience = props => {
    const workExpsData = props.workExperienceData;
    const tabId = props.tabId;

    const createWorkExpDot = workExpData => {
        // Creates an entry in the timeline
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    {workExpData.duration}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot 
                        variant="outlined" 
                        color="primary"
                    />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'>
                        {workExpData.job}
                    </Typography>
                    <Typography variant='subtitle2'>
                        {workExpData.org}
                    </Typography>
                    <Typography variant='body2'>
                        {workExpData.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        )
    }

    return (
        <React.Fragment>
            <Grid 
                container 
                id={tabId} 
                direction='row' 
                justifyContent='center' 
                alignItems='top' 
                minHeight='100vh' 
                sx={{
                    pt: 6
                }}
            >
                {/* Mobile view header */}
                <Grid 
                    item 
                    sm={12} 
                    sx={{ 
                        textAlign: 'center', 
                        display: { xs: 'block', md: 'none' } 
                    }}
                >
                    <Typography 
                        variant='h2' 
                        fontWeight='bold'
                    >
                        Work <br/>Experience
                    </Typography>
                    <Typography 
                        variant='subtitle1' 
                        textAlign='center' 
                        fontStyle='italic'
                    >
                        More details can be found in the projects section above!
                    </Typography>
                </Grid>
                {/* Timeline object */}
                <Grid 
                    item 
                    sm={12} 
                    md={5.1} 
                >
                    <Timeline position='alternate'>
                        {workExpsData.map(
                            workExpData => createWorkExpDot(workExpData)
                        )}
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot 
                                    variant="outlined" 
                                    color="primary" 
                                />
                            </TimelineSeparator>
                            <TimelineContent></TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
                {/* Desktop view header */}
                <Grid 
                    item 
                    md={5.1} 
                    sx={{ 
                        textAlign: 'center', 
                        display: { xs: 'none', md: 'block' } 
                    }}
                >
                    <Typography 
                        variant='h2' 
                        textAlign='left' 
                        fontWeight='bold' 
                        sx={{
                            px: 6, pt: 24
                        }} 
                    >
                        Work <br/>Experience
                    </Typography>
                    <Typography 
                        variant='subtitle1' 
                        textAlign='left' 
                        fontStyle='italic' 
                        sx={{
                            px: 6
                        }}
                    >
                        More details can be found in the projects section above!
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default WorkExperience;
